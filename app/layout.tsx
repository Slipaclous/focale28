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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N2626C2P');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N2626C2P"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  )
}









