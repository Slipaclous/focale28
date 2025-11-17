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
    <section id="about" ref={ref} className="relative py-32 px-4 bg-black overflow-hidden">


      <div className="relative max-w-6xl mx-auto z-10">
        {/* En-tête avec style planche contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center relative"
        >
          

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

          </motion.div>

          {/* Colonne principale - Texte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="md:col-span-9 space-y-6"
          >
            <div className="prose prose-invert prose-lg max-w-2xl">
              <p className="text-zinc-300 leading-relaxed font-serif text-lg">
                Bienvenue chez <span className="text-white font-medium">focale 2.8 Photographie</span>, 
                votre partenaire de confiance pour capturer et sublimer vos moments les plus précieux.
              </p>

              <p className="text-zinc-400 leading-relaxed font-serif">
                Forte de plus de <span className="text-zinc-300">15 ans d&apos;expérience</span> dans 
                la photographie professionnelle, focale 2.8 met son expertise et sa passion au service 
                de vos événements d&apos;entreprise, cérémonies, portraits et reportages.
              </p>

              <p className="text-zinc-400 leading-relaxed font-serif">
                L&apos;approche allie technicité et sens artistique afin de révéler l&apos;émotion de chaque 
                instant ; qu&apos;il s&apos;agisse de l&apos;atmosphère d&apos;un événement corporate, de 
                l&apos;intensité d&apos;une cérémonie ou de la beauté d&apos;un portrait.
              </p>

              <p className="text-zinc-400 leading-relaxed font-serif">
                Les prestations s&apos;étendent également à la photographie mobilière et immobilière, 
                offrant ainsi une gamme complète de services visuels adaptés à tous les besoins.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Section services - Liste horizontale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center flex-wrap gap-4 md:gap-6 items-center"
        >
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                delay: 1.0 + index * 0.05, 
                duration: 0.5,
              }}
              className="flex items-center gap-4 md:gap-6"
            >
              {/* Nom du service */}
              <span className="text-base md:text-lg text-zinc-300 font-serif hover:text-zinc-200 transition-colors">
                {service}
              </span>
              
              {/* Gros point séparateur (sauf pour le dernier) */}
              {index < services.length - 1 && (
                <span className="text-zinc-600 text-2xl">•</span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  )
}