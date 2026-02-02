import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.focale28.be',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // Sections of the page as potential anchor links if needed, but sitemap usually lists pages.
        // Since it's a SPA-like landing page, just the root is enough.
    ]
}
