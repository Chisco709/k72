Backend (API) y cómo correr localmente

Este repositorio incluye un pequeño backend en `server/` (Express + SQLite) para gestionar productos y órdenes.

Pasos rápidos:

1. Abrir una terminal en la carpeta `server`:

```powershell
cd 'c:\renes web\frontend\k72\server'
npm install
npm run dev
```

El servidor quedará escuchando por defecto en `http://localhost:4000`.

2. Configurar el frontend para usar la API (Vite): crear un archivo `.env` en la raíz con el contenido de `.env.example` o exportar la variable `VITE_API_URL`.

Ejemplo `.env`:

```
VITE_API_URL=http://localhost:4000
VITE_WHATSAPP_NUMBER=573001234567
```

3. Ejecutar el frontend:

```powershell
cd 'c:\renes web\frontend\k72'
npm install
npm run dev
```

4. Probar: abre `http://localhost:5173` y navega a Productos y Carrito. El checkout ahora enviará la orden al backend y recibirá una URL de WhatsApp para finalizar la compra.

Notas:
- El backend usa SQLite (`server/data.db`). Para producción recomendamos usar PostgreSQL o un servicio gestionado.
- En producción deberías configurar la variable `VITE_API_URL` apuntando al backend desplegado.
