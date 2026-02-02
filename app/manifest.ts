import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'focale 2.8 Photographie',
        short_name: 'focale 2.8',
        description: 'Photographe événementiel professionnel spécialisé en corporate, cérémonies et portraits en Belgique.',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        icons: [
            {
                src: '/images/_Logo Focale blanc.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/images/_Logo Focale blanc.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
