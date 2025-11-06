'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Globe, Facebook, Instagram } from 'lucide-react'

const services = [
  'Corporate',
  'Team Building',
  'Cérémonies',
  'Portraits',
  'Reportages',
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-black border-t-4 border-zinc-900 overflow-hidden">
      {/* Texture papier photo */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Bande de négatif en haut */}
      <div className="absolute top-0 left-0 right-0 h-12 pointer-events-none opacity-25">
        <div className="h-full flex items-center justify-between px-2">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="w-2 h-8 bg-zinc-700 rounded-sm" />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 z-10">
        {/* Grille principale */}
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          {/* Colonne 1 - Logo et signature */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo minimaliste */}
              <div className="mb-6">
                <div className="text-3xl font-serif font-light text-zinc-200 tracking-wider mb-1">
                  focale 2.8
                </div>
                <div className="text-xs font-mono text-zinc-400 tracking-widest uppercase">
                  Photographie Événementielle
                </div>
              </div>

              {/* Tagline */}
              <div className="border-l-2 border-zinc-800 pl-4 mb-6">
                <p className="text-sm text-zinc-400 italic font-serif leading-relaxed">
                  Un moment...
                  <br />
                  Une pose...
                  <br />
                  Une photo...
                </p>
              </div>

              {/* Cachet d'authenticité */}
              <div className="inline-block border-2 border-zinc-900 p-3">
                <div className="text-center">
                  <div className="text-[10px] font-mono text-zinc-400 tracking-widest mb-1">
                    PHOTOGRAPHE CERTIFIÉ
                  </div>
                  <div className="text-2xl font-serif text-zinc-300 font-bold">
                    {currentYear}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Colonne 2 - Contact */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-6 border-b border-zinc-900 pb-2">
                Coordonnées
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:focale2.8@gmail.com"
                    className="group flex items-start gap-3 transition-all"
                  >
                    <div className="w-8 h-8 border border-zinc-900 bg-zinc-950 flex items-center justify-center group-hover:border-zinc-700 transition-colors mt-0.5">
                      <Mail className="w-4 h-4 text-zinc-300 group-hover:text-zinc-400 transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-0.5">
                        Email
                      </div>
                      <div className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors font-mono break-all">
                        focale2.8@gmail.com
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+32"
                    className="group flex items-start gap-3 transition-all"
                  >
                    <div className="w-8 h-8 border border-zinc-900 bg-zinc-950 flex items-center justify-center group-hover:border-zinc-700 transition-colors mt-0.5">
                      <Phone className="w-4 h-4 text-zinc-300 group-hover:text-zinc-400 transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-0.5">
                        Téléphone
                      </div>
                      <div className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors font-mono">
                        +324777777
                      </div>
                    </div>
                  </a>
                </li>
              
              </ul>
            </motion.div>
          </div>

          {/* Colonne 3 - Services */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-6 border-b border-zinc-900 pb-2">
                Spécialités
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-zinc-800 rounded-full" />
                    <span className="text-sm text-zinc-400 font-serif">
                      {service}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Métadonnées */}
              <div className="mt-8 pt-6 border-t border-zinc-900">
                <div className="text-[10px] font-mono text-zinc-400 space-y-1">
                  <div>15+ ANS D'EXPÉRIENCE</div>
                  <div className="text-zinc-300">BELGIQUE • BRUXELLES</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Séparateur avec annotations */}
        <div className="relative mb-8">
          <div className="h-px bg-zinc-900" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-900 rounded-full" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-900 rounded-full" />
        </div>

        {/* Bas de page - Réseaux sociaux et copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Réseaux sociaux */}
          <div className="flex items-center gap-4">
            <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mr-2">
              Réseaux
            </div>
            <a
              href="https://www.facebook.com/focale28"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 border border-zinc-900 bg-zinc-950 flex items-center justify-center hover:border-zinc-700 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 text-zinc-300 group-hover:text-zinc-400 transition-colors" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-10 h-10 border border-zinc-900 bg-zinc-950 flex items-center justify-center hover:border-zinc-700 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-zinc-300 group-hover:text-zinc-400 transition-colors" />
            </a>
          </div>

          {/* Copyright et mentions */}
          <div className="text-center md:text-right">
            <p className="text-xs text-zinc-300 font-mono mb-1">
              © {currentYear} focale 2.8 • Tous droits réservés
            </p>
            <p className="text-[10px] text-zinc-300 font-mono">
              Photographie professionnelle
            </p>
          </div>
        </motion.div>

        {/* Note d'archive en bas */}
        
      </div>

      {/* Marque d'impression en coin */}
      <motion.div
        initial={{ opacity: 0, rotate: -5 }}
        whileInView={{ opacity: 0.7, rotate: -3 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-4 left-4 pointer-events-none hidden lg:block"
      >
        <div className="w-24 h-24 border-4 border-zinc-900 rounded-full flex items-center justify-center transform -rotate-12">
          <div className="text-center">
            <div className="text-[10px] font-mono text-zinc-300 tracking-widest">
              SINCE
            </div>
            <div className="text-xl font-serif text-zinc-300 font-bold">
              2009
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}