import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Heart, Clock, Sparkles, TrendingUp, Lightbulb } from 'lucide-react'

export default function BlogPage() {
  const featuredPost = {
    title: "Los Circuitos del Éxito Organizacional",
    collection: "Colección Las Paradojas",
    excerpt:
      "Es muy probable que todos en el colegio en una clase de Física o en alguna experiencia de la vida, hayamos tenido frente a nuestros ojos una tabla o placa de circuitos eléctricos...",
    likes: 0,
    readTime: "8 min",
    category: "Paradojas",
    image: "/electrical-circuits-success-organizational.jpg",
  }

  const posts = [
    {
      title: "El Poder de las Cosas Elementales",
      collection: "Colección Las Paradojas",
      excerpt:
        "Es paradójico que aquellas cosas que están frente a nuestros ojos no las veamos. La mayoría de las personas buscan fórmulas mágicas para resolver los aspectos básicos de sus vidas...",
      likes: 1,
      readTime: "6 min",
      category: "Paradojas",
      image: "/simple-things-mindfulness-awareness.jpg",
    },
    {
      title: "La Misión de Ser Feliz",
      collection: "Colección Las Paradojas",
      excerpt:
        "Es una verdadera paradoja que hayamos encarnado en la vida como resultado del amor o de una misteriosa suerte de situaciones que arrojaron un dado con el código de nuestro ADN...",
      likes: 0,
      readTime: "7 min",
      category: "Paradojas",
      image: "/happiness-mission-purpose-life.jpg",
    },
    {
      title: "El Destino de las Águilas",
      collection: "Fábulas",
      excerpt:
        "Desde que era muy chico papá águila recibió instrucciones muy precisas de su padre acerca de cómo volar con perfección, y además con mucha insistencia, sobre la importancia de enseñar a otros a volar...",
      likes: 1,
      readTime: "5 min",
      category: "Fábulas",
      image: "/eagle-flying-teaching-mentorship.jpg",
    },
    {
      title: "Águila Hembra",
      collection: "Fábulas",
      excerpt:
        "Una noche mientras Katy se encontraba a punto de irse a dormir, se le ocurrió ir al cuarto de su padre para preguntarle algo que le atormentaba profundamente a sus cinco años...",
      likes: 0,
      readTime: "4 min",
      category: "Fábulas",
      image: "/female-eagle-empowerment-equality.jpg",
    },
  ]

  const categories = [
    { name: "Paradojas", count: 3, icon: Sparkles, color: "from-cyan-500 to-blue-500" },
    { name: "Fábulas", count: 2, icon: BookOpen, color: "from-blue-500 to-indigo-500" },
    { name: "Coaching", count: 8, icon: TrendingUp, color: "from-indigo-500 to-purple-500" },
    { name: "Reflexiones", count: 12, icon: Lightbulb, color: "from-purple-500 to-pink-500" },
  ]

  // Helper para generar slugs simples
  const slugify = (text) =>
    text
      .toString()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // normaliza acentos
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Integrated Header with Featured Content */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 text-cyan-400 text-xs font-medium backdrop-blur-sm">
                  <Sparkles className="w-3 h-3" />
                  Blog
                </div>

                <h1 className="text-6xl md:text-7xl font-black leading-[0.9] tracking-tight">
                  Historias que
                  <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    Transforman
                  </span>
                </h1>
              </div>

              <p className="text-lg text-zinc-400 leading-relaxed max-w-md">
                Reflexiones profundas, paradojas reveladoras y fábulas inspiradoras para tu transformación personal
              </p>

              <div className="flex gap-8 pt-4 border-t border-zinc-800">
                <div>
                  <div className="text-2xl font-black text-cyan-400">25+</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">Artículos</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-blue-400">10K+</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">Lectores</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-indigo-400">4</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">Colecciones</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Link to={`/blog/${slugify(featuredPost.title)}`} className="group block">
                <div className="relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-500">
                  <div className="relative h-[400px] overflow-hidden">
                    <img
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 backdrop-blur-md border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-4">
                        {featuredPost.collection}
                      </div>

                      <h3 className="text-3xl font-black mb-3 group-hover:text-cyan-400 transition-colors">
                        {featuredPost.title}
                      </h3>

                      <div className="flex items-center gap-4 text-sm text-zinc-400">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-4 h-4" />
                          <span>{featuredPost.likes} Me gusta</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/blog/categoria/${category.name.toLowerCase()}`}
                className="group relative overflow-hidden rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 p-6 transition-all duration-300"
              >
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <category.icon className="w-5 h-5 text-white" />
                </div>

                <h3 className="text-lg font-bold mb-1 group-hover:text-cyan-400 transition-colors">{category.name}</h3>
                <p className="text-sm text-zinc-500">{category.count} artículos</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 pb-6 border-b border-zinc-800">
            <div>
              <h2 className="text-4xl font-black mb-2">Últimas Publicaciones</h2>
              <p className="text-zinc-500">Explora nuestro contenido más reciente</p>
            </div>
            <Link
              to="/blog/todos"
              className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 group text-sm"
            >
              Ver todo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <Link
              to={`/blog/${slugify(posts[0].title)}`}
              className="lg:col-span-2 group block"
            >
              <article className="relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-500 h-full">
                <div className="grid md:grid-cols-2 gap-0 h-full">
                  <div className="relative h-[300px] md:h-auto overflow-hidden">
                    <img
                      src={posts[0].image || "/placeholder.svg"}
                      alt={posts[0].title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-8 flex flex-col justify-center">
                    <div className="text-xs text-cyan-400 font-medium mb-3 uppercase tracking-wider">
                      {posts[0].collection}
                    </div>

                    <h3 className="text-2xl font-black mb-4 group-hover:text-cyan-400 transition-colors">
                      {posts[0].title}
                    </h3>

                    <p className="text-zinc-400 mb-6 leading-relaxed line-clamp-3">{posts[0].excerpt}</p>

                    <div className="flex items-center gap-4 text-sm text-zinc-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{posts[0].readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        <span>{posts[0].likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>

            <Link to={`/blog/${slugify(posts[1].title)}`} className="group block">
              <article className="relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-500 h-full">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={posts[1].image || "/placeholder.svg"}
                    alt={posts[1].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="text-xs text-cyan-400 font-medium mb-2 uppercase tracking-wider">
                    {posts[1].collection}
                  </div>

                  <h3 className="text-xl font-black mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {posts[1].title}
                  </h3>

                  <p className="text-zinc-400 text-sm mb-4 leading-relaxed line-clamp-2">{posts[1].excerpt}</p>

                  <div className="flex items-center gap-4 text-xs text-zinc-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{posts[1].readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      <span>{posts[1].likes}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            {posts.slice(2).map((post, index) => (
              <Link key={index} to={`/blog/${slugify(post.title)}`} className="group block">
                <article className="relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-500 h-full">
                  <div className="flex gap-6 p-6">
                    <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-xl">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-center">
                      <div className="text-xs text-cyan-400 font-medium mb-2 uppercase tracking-wider">
                        {post.collection}
                      </div>

                      <h3 className="text-xl font-black mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <div className="flex items-center gap-4 text-xs text-zinc-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-6">
                <Sparkles className="w-3 h-3" />
                Newsletter
              </div>

              <h2 className="text-4xl font-black mb-4">
                Mantente
                <span className="block text-cyan-400">Inspirado</span>
              </h2>

              <p className="text-zinc-400 leading-relaxed">
                Recibe los mejores artículos de transformación personal cada semana directamente en tu correo
              </p>
            </div>

            <div>
              <form className="space-y-4" onSubmit={(e)=>{ e.preventDefault(); alert('Formulario de newsletter - integrar backend') }}>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full px-6 py-4 rounded-xl bg-zinc-900 border border-zinc-800 focus:border-cyan-500 focus:outline-none text-white placeholder:text-zinc-500"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300"
                >
                  Suscribirme
                </button>
                <p className="text-xs text-zinc-500 text-center">Sin spam. Cancela cuando quieras.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
