# OPCTALENT

Landing page mobile-first para el servicio de creación de CV profesional por WhatsApp.

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Configuración

- Marca provisional: `components/brand/BrandMark.tsx`
- WhatsApp, mensajes y URL del sitio: `lib/site-config.ts`
- Dominio canónico: define `NEXT_PUBLIC_SITE_URL` a partir de `.env.example`

## Producción

```bash
npm run build
npm run start
```

Con el servidor de producción activo, `npm run verify` comprueba anchors, enlaces de WhatsApp y archivos SEO esenciales.

Para desplegar en Vercel, importa este directorio como proyecto, configura `NEXT_PUBLIC_SITE_URL` con el dominio final y usa los valores de build detectados para Next.js.
