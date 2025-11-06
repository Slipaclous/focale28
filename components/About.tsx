'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  'Corporate',
  'Team Building',
  'Fête d\'Entreprise',
  'Cérémonies',
  'Anniversaire',
  'Family Day',
  'Lifestyle',
  'Event',
  'Afterwork',
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="relative py-32 px-4 bg-[#0a0a0a] overflow-hidden">
      {/* Texture papier baryté */}
      <div 
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.8' numOctaves='5' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Cadre de diapositive style Kodachrome */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 0.8, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 1.2 }}
        className="absolute top-12 right-12 w-64 h-64 border-8 border-zinc-800 pointer-events-none hidden lg:block"
        style={{
          boxShadow: 'inset 0 0 40px rgba(0,0,0,0.8)',
        }}
      >
        <div className="absolute inset-0 border-2 border-zinc-700" />
        <div className="absolute -top-2 -left-2 text-[10px] font-mono text-zinc-400 rotate-[-90deg]">
          KODAK 64
        </div>
      </motion.div>

      {/* Bande de négatif photo en fond */}
      <div className="absolute top-0 left-0 right-0 h-20 opacity-50 pointer-events-none hidden md:block">
        <div className="h-full flex items-center justify-between px-4">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="w-4 h-12 bg-zinc-700 rounded-sm" />
          ))}
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* En-tête avec style planche contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center relative"
        >
          {/* Numéro de référence style archive photo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.9 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-mono text-xs text-zinc-400 tracking-widest mb-6"
          >
            [ SÉRIE #002 — À PROPOS ]
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-serif font-extralight text-zinc-100 tracking-tight leading-tight mb-4">
            Photographie
            <br />
            <span className="text-zinc-400 italic font-light">Événementielle</span>
          </h2>

          {/* Ligne de séparation style règle de mesure */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="relative w-48 h-px bg-zinc-800 mx-auto mt-8"
          >
            {/* Marques de mesure */}
            {[0, 0.25, 0.5, 0.75, 1].map((pos, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.8 } : { opacity: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="absolute w-px h-2 bg-zinc-700 -translate-x-1/2"
                style={{ left: `${pos * 100}%`, top: '-2px' }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Contenu principal avec style carnet de notes */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-20">
          {/* Colonne de gauche - Métadonnées style EXIF */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="md:col-span-3 space-y-6"
          >
            <div className="border-l-2 border-zinc-800 pl-4 space-y-4">
              <div>
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                  Photographe
                </div>
                <div className="text-sm text-zinc-400 font-serif">
                  Alain Heymans
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                  Expérience
                </div>
                <div className="text-sm text-zinc-400 font-serif">
                  15 ans
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                  Spécialité
                </div>
                <div className="text-sm text-zinc-400 font-serif">
                  Événementiel
                </div>
              </div>

              <div>
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                  Format
                </div>
                <div className="text-sm text-zinc-400 font-serif">
                  RAW + JPEG
                </div>
              </div>
            </div>

            {/* Annotation manuscrite */}
            <motion.div
              initial={{ opacity: 0, rotate: -5 }}
              animate={isInView ? { opacity: 0.8, rotate: -3 } : { opacity: 0, rotate: -5 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="hidden md:block"
            >
              <div className="text-xs font-serif text-zinc-100 italic transform -rotate-3 border border-zinc-200 bg-zinc-950/50 p-3 rounded">
                &ldquo;Capturer l&apos;essence
                <br />
                de chaque instant&rdquo;
              </div>
            </motion.div>
          </motion.div>

          {/* Colonne principale - Texte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="md:col-span-9 space-y-6"
          >
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-zinc-300 leading-relaxed font-serif text-lg">
                Bienvenue chez <span className="text-white font-medium">focale 2.8 Photographie</span>, 
                votre partenaire de confiance pour immortaliser vos moments les plus précieux.
              </p>

              <p className="text-zinc-400 leading-relaxed font-serif">
                Avec plus de <span className="text-zinc-300">15 ans d&apos;expérience</span> dans 
                le domaine de la photographie professionnelle, je mets mon expertise et ma 
                passion au service de vos événements d&apos;entreprise, cérémonies, portraits et 
                reportages.
              </p>

              <p className="text-zinc-400 leading-relaxed font-serif">
                Que ce soit pour capturer l&apos;ambiance d&apos;un événement corporate, l&apos;émotion 
                d&apos;une cérémonie, ou la beauté d&apos;un portrait, j&apos;apporte une approche artistique 
                et technique qui sublime chaque instant. Ma spécialité s&apos;étend également à la 
                photographie mobilière et immobilière, offrant ainsi une gamme complète de 
                services photographiques.
              </p>
            </div>

            {/* Citation avec style légende de photo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8 relative"
            >
              <div className="border-l-4 border-zinc-700 pl-6 py-4">
                <p className="text-xl md:text-2xl font-serif text-zinc-300 italic leading-relaxed">
                  Chaque moment mérite d&apos;être capturé avec l&apos;attention et la qualité qu&apos;il mérite.
                </p>
              </div>
              
              {/* Timecode style */}
              <div className="mt-3 font-mono text-xs text-zinc-400 tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-zinc-800 rounded-full" />
                <span>TC: 00:15:00</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Section services avec style planche contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="relative"
        >
          {/* En-tête de section */}
          <div className="mb-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-zinc-800" />
            <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-widest">
              Services
            </h3>
            <div className="flex-1 h-px bg-zinc-800" />
          </div>

          {/* Grille de services style vignettes de planche contact */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ 
                  delay: 1.4 + index * 0.05, 
                  duration: 0.4,
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                {/* Cadre de vignette */}
                <div className="relative aspect-[4/3] border-2 border-zinc-800 bg-zinc-950/50 hover:border-zinc-700 transition-colors duration-300 overflow-hidden">
                  {/* Texture interne */}
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/30 to-transparent" />
                  
                  {/* Contenu */}
                  <div className="absolute inset-0 flex items-center justify-center p-3">
                    <span className="text-sm md:text-base text-zinc-300 font-serif text-center group-hover:text-white transition-colors duration-300">
                      {service}
                    </span>
                  </div>

                  {/* Numéro de référence en coin */}
                  <div className="absolute top-1 right-1 text-[8px] font-mono text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    #{String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Marque de sélection style planche contact */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-1 left-1 w-2 h-2 border border-zinc-700 rounded-full"
                  />
                </div>

                {/* Ombre portée de polaroid */}
                <div className="absolute -bottom-1 -right-1 w-full h-full border border-zinc-900 -z-10" />
              </motion.div>
            ))}
          </div>

          {/* Note de bas de page style légende */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.9 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-8 text-center font-mono text-xs text-zinc-400 tracking-wider"
          >
            [ {services.length} SPÉCIALITÉS DISPONIBLES ]
          </motion.div>
        </motion.div>
      </div>

      {/* Coin inférieur droit - Tampon style archive */}
      <motion.div
        initial={{ opacity: 0, rotate: 10, scale: 0.8 }}
        animate={isInView ? { opacity: 0.7, rotate: 12, scale: 1 } : { opacity: 0, rotate: 10, scale: 0.8 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 right-12 pointer-events-none hidden xl:block"
      >
        <div className="w-32 h-32 border-4 border-zinc-800 rounded-full flex items-center justify-center">
          <div className="text-center">
            <div className="text-xs font-mono text-zinc-400 tracking-widest">
              SINCE
            </div>
            <div className="text-2xl font-serif text-zinc-400 font-bold">
              2009
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}