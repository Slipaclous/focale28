'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X, Instagram, Facebook, Youtube } from 'lucide-react'

const navItems = [
  { name: 'Accueil', href: '#hero' },
  { name: 'À Propos', href: '#about' },
  { name: 'Portfolio', href: '#gallery' },
  { name: 'Témoignages', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/focale28', Icon: Instagram },
  { name: 'Facebook', href: 'https://www.facebook.com/focale28', Icon: Facebook },
  { name: 'YouTube', href: 'https://www.youtube.com/@focale28', Icon: Youtube },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.95)']
  )
  
  const borderOpacity = useTransform(
    scrollY,
    [0, 100],
    [0, 0.3]
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        style={{ backgroundColor }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        {/* Bordure inférieure progressive */}
        <motion.div 
          style={{ opacity: borderOpacity }}
          className="absolute bottom-0 left-0 right-0 h-px bg-zinc-800"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo minimaliste */}
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#hero')
              }}
              className="flex items-center gap-3 group relative z-10"
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Marque diaphragme simplifiée */}
              <div className="relative w-10 h-10">
                {/* Cercles concentriques */}
                <div className="absolute inset-0 border border-zinc-700 rounded-full group-hover:border-zinc-500 transition-colors" />
                <div className="absolute inset-2 border border-zinc-800 rounded-full" />
                
                {/* Centre */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[10px] font-serif text-zinc-400 leading-none">f</div>
                    <div className="text-xs font-serif text-zinc-400 leading-none">2.8</div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block">
                <div className="text-base font-serif font-light text-zinc-200 tracking-wide leading-none">
                  focale 2.8
                </div>
                <div className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase leading-none mt-0.5">
                  Photographie
                </div>
              </div>
            </motion.a>

            {/* Menu Desktop - Style barre de mesure */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-1">
                {navItems.map((item, index) => (
                  <div key={item.name} className="relative">
                    <motion.a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                      className="group relative px-4 py-2 block"
                      whileHover={{ y: -1 }}
                    >
                      {/* Texte du menu */}
                      <span className="text-xs font-mono text-zinc-400 group-hover:text-zinc-200 uppercase tracking-wider transition-colors relative z-10">
                        {item.name}
                      </span>

                      {/* Marque de mesure au-dessus */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-1 bg-zinc-800 group-hover:bg-zinc-300 group-hover:h-1.5 transition-all" />

                      {/* Ligne de soulignement */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-zinc-900 group-hover:bg-zinc-700 transition-colors" />
                    </motion.a>

                    {/* Séparateur vertical entre les items (sauf le dernier) */}
                    {index < navItems.length - 1 && (
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-3 bg-zinc-900" />
                    )}
                  </div>
                ))}
              </div>

              <div className="h-6 w-px bg-zinc-900" />

              <div className="flex items-center gap-3">
                {socialLinks.map(({ name, href, Icon }) => (
                  <motion.a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center w-9 h-9 border border-zinc-800 rounded-full text-zinc-400 hover:text-zinc-200 hover:border-zinc-600 transition-colors"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={name}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Bouton Menu Mobile - Style carré */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 border border-zinc-800 bg-zinc-950/50 flex items-center justify-center hover:border-zinc-700 transition-colors"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-zinc-400" />
              ) : (
                <Menu className="w-5 h-5 text-zinc-400" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Indicateur de scroll - Style compteur de frames */}
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            className="absolute bottom-0 left-4 text-[9px] font-mono text-zinc-400 pb-1 hidden lg:block"
          >
            SCROLL ↓
          </motion.div>
        )}
      </motion.nav>

      {/* Menu Mobile - Style fiche de contact */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-16 left-0 right-0 z-40 md:hidden overflow-hidden bg-black border-b-2 border-zinc-900"
      >
        <div className="relative px-4 py-6 space-y-1">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className="group flex items-center justify-between py-3 border-b border-zinc-900 transition-all"
              >
                <div className="flex items-center gap-3">
                  {/* Numéro de menu */}
                  <div className="w-6 h-6 border border-zinc-900 bg-zinc-950 flex items-center justify-center">
                    <span className="text-[10px] font-mono text-zinc-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Nom du menu */}
                  <span className="text-sm font-mono text-zinc-300 group-hover:text-zinc-100 uppercase tracking-wider transition-colors">
                    {item.name}
                  </span>
                </div>

                {/* Flèche */}
                <div className="text-zinc-300 group-hover:text-zinc-400 transition-colors">
                  →
                </div>
              </a>
            </motion.div>
          ))}

          <div className="pt-4 mt-4 border-t border-zinc-900">
            <div className="flex items-center justify-center gap-4">
              {socialLinks.map(({ name, href, Icon }) => (
                <motion.a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 border border-zinc-800 rounded-full text-zinc-400 hover:text-zinc-100 hover:border-zinc-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={name}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Note en bas du menu mobile */}
          <div className="pt-4 mt-4 border-t border-zinc-900">
            <div className="text-[10px] font-mono text-zinc-300 tracking-wider text-center">
              NAVIGATION • {navItems.length} SECTIONS
            </div>
          </div>
        </div>
      </motion.div>

      {/* Overlay pour fermer le menu mobile */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          style={{ top: '16rem' }} // Commence après le menu
        />
      )}
    </>
  )
}