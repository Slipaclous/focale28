import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.focale28.be'),
  title: "focale 2.8 Photographie | Photographe Événementiel Professionnel",
  description: "focale 2.8 Photographie - Plus de 15 ans d'expérience en photographie événementielle. Spécialisé en corporate, cérémonies, portraits, reportages. Belgique.",
  keywords: ["photographe", "photographie événementielle", "corporate", "portraits", "cérémonies", "Belgique", "reportages"],
  authors: [{ name: "Alain Heymans" }],
  openGraph: {
    title: "focale 2.8 Photographie | Photographe Événementiel Professionnel",
    description: "focale 2.8 Photographie - Plus de 15 ans d'expérience en photographie événementielle. Spécialisé en corporate, cérémonies, portraits, reportages. Belgique.",
    url: "https://www.focale28.be",
    siteName: "focale 2.8 Photographie",
    locale: "fr_BE",
    type: "website",
    images: [
      {
        url: "/images/focale%202.8%20corporate%20.jpeg",
        width: 1200,
        height: 630,
        alt: "focale 2.8 Photographie - Photographe événementiel professionnel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "focale 2.8 Photographie | Photographe Événementiel Professionnel",
    description: "focale 2.8 Photographie - Plus de 15 ans d'expérience en photographie événementielle. Spécialisé en corporate, cérémonies, portraits, reportages. Belgique.",
    images: ["/images/focale%202.8%20corporate%20.jpeg"],
  },
  icons: {
    icon: '/images/_Logo Focale blanc.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}









