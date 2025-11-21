const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const sqlite3 = require('sqlite3').verbose()
const { open } = require('sqlite')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

const DB_PATH = path.join(__dirname, 'data.db')

async function start() {
  try {
    console.log('Initializing database...')
    const db = await open({ 
      filename: DB_PATH, 
      driver: sqlite3.Database 
    })

    console.log('Creating tables...')
    // Create tables if not exists
    await db.exec(`
      CREATE TABLE IF NOT EXISTS products (
        id TEXT PRIMARY KEY,
        title TEXT,
        subtitle TEXT,
        description TEXT,
        image TEXT,
        price INTEGER,
        type TEXT,
        features TEXT,
        color TEXT,
        accentColor TEXT,
        metadata TEXT
      );

      CREATE TABLE IF NOT EXISTS orders (
        id TEXT PRIMARY KEY,
        customer TEXT,
        items TEXT,
        total INTEGER,
        created_at INTEGER
      );
    `)

  // Seed products if empty
  console.log('Checking products...')
  const row = await db.get('SELECT COUNT(1) as c FROM products')
  if (row.c === 0) {
    console.log('Seeding products...')
    const seedProducts = [
      {
        id: '1',
        type: 'Curso Virtual',
        title: 'Del Cambio a la Transformación Personal',
        subtitle: 'Coaching de Vida con René Chisco',
        description: 'Un emocionante programa de coaching de vida que te guiará a través de un viaje reflexivo y empoderador para alcanzar tu máximo potencial y lograr una transformación personal significativa.',
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zIMy5TR9toRFdmNXjUQCy1wg4uPzF7.png',
        price: 19700,
        features: JSON.stringify([
          'Autoexploración profunda',
          'Gestión efectiva del cambio',
          'Establecimiento de objetivos claros',
          'Construcción de mentalidad positiva',
          'Herramientas y estrategias prácticas',
          'Acceso de por vida'
        ]),
        color: 'from-blue-500 via-cyan-400 to-blue-600',
        accentColor: 'blue'
      },
      {
        id: '2',
        type: 'Libro Digital',
        title: 'Rompe el Libreto',
        subtitle: 'Conquista Tu Mejor Versión',
        description: 'Un proceso sistematizado de estrategias y técnicas compartidas con éxito durante los últimos diez años. Una guía soportada en los aportes de la Física Cuántica, Neurociencias, Psicología, PNL y Coaching.',
        image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zIMy5TR9toRFdmNXjUQCy1wg4uPzF7.png',
        price: 4700,
        features: JSON.stringify([
          'Manual para vivir tus mejores días',
          'Estrategias probadas por 10 años',
          'Basado en investigación científica',
          'Técnicas de PNL y Coaching',
          'Desafío a la zona de confort',
          'Formato digital descargable'
        ]),
        color: 'from-cyan-400 via-blue-500 to-cyan-600',
        accentColor: 'cyan'
      }
    ]

    const insert = await db.prepare(
      'INSERT INTO products (id, type, title, subtitle, description, image, price, features, color, accentColor) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
    )
    for (const p of seedProducts) {
      await insert.run(
        p.id,
        p.type,
        p.title,
        p.subtitle,
        p.description,
        p.image,
        p.price,
        p.features,
        p.color,
        p.accentColor
      )
    }
    await insert.finalize()
    console.log('Products seeded successfully')
  }

  console.log('Setting up Express server...')
  const app = express()
  app.use(cors())
  app.use(bodyParser.json())

  // GET /api/products
  app.get('/api/products', async (req, res) => {
    try {
      const products = await db.all('SELECT * FROM products')
      // Parse features JSON string back to array
      const parsedProducts = products.map(p => ({
        ...p,
        features: JSON.parse(p.features || '[]')
      }))
      res.json(parsedProducts)
    } catch (err) {
      console.error('Error fetching products:', err)
      res.status(500).json({ error: 'Internal error' })
    }
  })

  // GET /api/products/:id
  app.get('/api/products/:id', async (req, res) => {
    try {
      const p = await db.get('SELECT * FROM products WHERE id = ?', req.params.id)
      if (!p) return res.status(404).json({ error: 'Not found' })
      res.json(p)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: 'Internal error' })
    }
  })

  // POST /api/orders
  app.post('/api/orders', async (req, res) => {
    try {
      const { customer, items, total } = req.body
      if (!items || !Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ error: 'No items' })
      }

      const id = uuidv4()
      const created_at = Date.now()
      await db.run('INSERT INTO orders (id, customer, items, total, created_at) VALUES (?, ?, ?, ?, ?)',
        id, JSON.stringify(customer || {}), JSON.stringify(items), total || 0, created_at)

      // Build whatsapp message
      const whatsappNumber = process.env.WHATSAPP_NUMBER || '573001234567' // change in production
      const itemsText = items.map(it => `• ${it.title} (x${it.quantity}) - ${it.price}`).join('\n')
      const msg = `Nueva orden:${'\n'}${itemsText}${'\n'}Total: ${total}${'\n'}Cliente: ${customer?.nombre || ''}`
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`

      res.json({ orderId: id, whatsappUrl })
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: 'Internal error' })
    }
  })

  const PORT = process.env.PORT || 4000
  app.listen(PORT, () => {
    console.log('==================================')
    console.log(`🚀 Server running successfully!`)
    console.log(`📝 Database initialized and ready`)
    console.log(`🌐 API listening on http://localhost:${PORT}`)
    console.log('==================================')
  })
}

process.on('uncaughtException', err => {
  console.error('❌ Uncaught exception:', err)
  process.exit(1)
})

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason)
  process.exit(1)
})

start().catch(err => {
  console.error('❌ Failed to start server:', err)
  process.exit(1)
})
