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
  title: "focale 2.8 Photographie | Photographe Événementiel Professionnel",
  description: "focale 2.8 Photographie - Plus de 15 ans d'expérience en photographie événementielle. Spécialisé en corporate, cérémonies, portraits, reportages. Belgique.",
  keywords: ["photographe", "photographie événementielle", "corporate", "portraits", "cérémonies", "Belgique", "reportages"],
  authors: [{ name: "Alain Heymans" }],
  openGraph: {
    title: "focale 2.8 Photographie",
    description: "Photographe événementiel professionnel - 15 ans d'expérience",
    url: "https://www.focale28.be",
    locale: "fr_BE",
    type: "website",
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








