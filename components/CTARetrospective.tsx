'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'

export default function CTARetrospective() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="retrospective" ref={ref} className="relative py-32 px-4 bg-black overflow-hidden">
      {/* Texture papier kraft vintage */}
      <div 
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/1000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='6' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Spots lumineux style projecteur de diaporama */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.35, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-radial from-zinc-800/30 via-transparent to-transparent blur-3xl pointer-events-none"
      />

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Boîte d'archives style vintage */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Étiquette d'archive en haut */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 text-center"
          >
            <div className="inline-block border-2 border-zinc-800 bg-zinc-950/80 px-6 py-2 font-mono text-xs text-zinc-300 tracking-widest uppercase">
              Archives Photographiques
            </div>
          </motion.div>

          {/* Conteneur principal style boîte d'archives */}
          <div className="relative bg-zinc-950 border-4 border-zinc-900 p-8 md:p-16 shadow-2xl">
            {/* Texture carton */}
            <div 
              className="absolute inset-0 opacity-[0.18] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/1000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Coins métalliques de protection */}
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-zinc-800" />
            <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-zinc-800" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-zinc-800" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-zinc-800" />

            <div className="relative z-10">
              {/* En-tête avec style typographique vintage */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center mb-12"
              >
                {/* Année en grand style affiche */}
                <div className="mb-6">
                  <motion.div
                    initial={{ letterSpacing: '0.5em', opacity: 0 }}
                    animate={isInView ? { letterSpacing: '0.3em', opacity: 1 } : { letterSpacing: '0.5em', opacity: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-8xl md:text-9xl font-serif font-light text-zinc-100 leading-none tracking-widest"
                  >
                    2024
                  </motion.div>
                  
                  {/* Ligne décorative avec ornements */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 1.2, delay: 0.7 }}
                    className="relative w-48 h-px bg-zinc-800 mx-auto mt-6 mb-6"
                  >
                    <div className="absolute left-0 top-1/2 w-2 h-2 bg-zinc-800 rounded-full -translate-y-1/2" />
                    <div className="absolute right-0 top-1/2 w-2 h-2 bg-zinc-800 rounded-full -translate-y-1/2" />
                    <div className="absolute left-1/2 top-1/2 w-1 h-1 bg-zinc-700 rounded-full -translate-x-1/2 -translate-y-1/2" />
                  </motion.div>
                </div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-2xl md:text-3xl font-serif font-light text-zinc-300 tracking-wide mb-4"
                >
                  Rétrospective Photographique
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 0.8 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="font-mono text-xs text-zinc-100 tracking-widest uppercase"
                >
                  Collection Complète
                </motion.div>
              </motion.div>

              {/* Description avec style éditorial */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="max-w-2xl mx-auto mb-12"
              >
                <div className="border-l-2 border-zinc-800 pl-6 py-4">
                  <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-serif">
                    Découvrez une sélection de nos plus beaux moments capturés au cours de l'année 2024. 
                    Des événements corporate aux cérémonies intimes, revivez les émotions et les instants précieux 
                    immortalisés à travers mon objectif.
                  </p>
                </div>

                {/* Métadonnées de la collection */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 0.8 } : { opacity: 0 }}
                  transition={{ duration: 1, delay: 1.3 }}
                  className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-zinc-100"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-zinc-800 rounded-full" />
                    <span>350+ PHOTOS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-zinc-800 rounded-full" />
                    <span>42 ÉVÉNEMENTS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-zinc-800 rounded-full" />
                    <span>12 MOIS</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Bouton CTA style ticket d'exposition */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="text-center"
              >
                <motion.a
                  href="https://www.example.com/retrospective-2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-block"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Billet avec perforations */}
                  <motion.div 
                    className="relative bg-white text-black px-8 md:px-12 py-6 font-serif transition-all duration-300"
                    whileHover={{ 
                      y: -8,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Perforations gauche */}
                    <div className="absolute left-0 top-0 bottom-0 w-4 flex flex-col justify-around py-2">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-zinc-950 rounded-full ml-1" />
                      ))}
                    </div>

                    {/* Perforations droite */}
                    <div className="absolute right-0 top-0 bottom-0 w-4 flex flex-col justify-around py-2">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-zinc-950 rounded-full mr-1" />
                      ))}
                    </div>

                      {/* Contenu du billet */}
                      <div className="relative px-4">
                        <div className="flex items-center justify-center gap-3">
                          <motion.span 
                            className="text-lg md:text-xl font-semibold tracking-wide"
                            whileHover={{ x: 2 }}
                            transition={{ duration: 0.2 }}
                          >
                            ACCÉDER À LA RÉTROSPECTIVE
                          </motion.span>
                          <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            whileHover={{ scale: 1.2, rotate: 45 }}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.div>
                        </div>

                      {/* Code barre stylisé */}
                      <div className="mt-4 flex items-center justify-center gap-[2px]">
                        {[3, 1, 2, 1, 3, 2, 1, 3, 1, 2, 3, 1].map((height, i) => (
                          <div 
                            key={i} 
                            className="w-[2px] bg-black"
                            style={{ height: `${height * 4}px` }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Ombre du billet */}
                    <motion.div 
                      className="absolute inset-0 -z-10 bg-zinc-800 translate-x-1 translate-y-1"
                      whileHover={{ 
                        x: 8,
                        y: 8
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  {/* Indication de validité */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
                    transition={{ duration: 1, delay: 1.6 }}
                    className="mt-4 text-xs font-mono text-zinc-100 tracking-wider"
                  >
                    ACCÈS ILLIMITÉ • TOUJOURS DISPONIBLE
                  </motion.div>
                </motion.a>
              </motion.div>
            </div>

            {/* Cachet "ARCHIVÉ" en filigrane */}
            <motion.div
              initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
              animate={isInView ? { opacity: 0.12, rotate: -12, scale: 1 } : { opacity: 0, rotate: -15, scale: 0.8 }}
              transition={{ duration: 1.5, delay: 1.8 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
            >
              <div className="w-64 h-64 border-8 border-zinc-800 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-serif font-bold text-zinc-300 tracking-wider">
                    2024
                  </div>
                  <div className="text-sm font-mono text-zinc-300 tracking-widest mt-2">
                    ARCHIVÉ
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Étiquettes adhésives style archive */}
          <motion.div
            initial={{ opacity: 0, x: -20, rotate: -5 }}
            animate={isInView ? { opacity: 0.8, x: 0, rotate: -3 } : { opacity: 0, x: -20, rotate: -5 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="absolute -left-4 top-1/4 bg-yellow-100/10 border border-yellow-800/20 px-3 py-2 text-[10px] font-mono text-yellow-900/40 tracking-wider hidden lg:block"
            style={{ transform: 'rotate(-3deg)' }}
          >
            COLLECTION<br/>2024
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, rotate: 5 }}
            animate={isInView ? { opacity: 0.8, x: 0, rotate: 4 } : { opacity: 0, x: 20, rotate: 5 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="absolute -right-4 bottom-1/4 bg-red-100/10 border border-red-800/20 px-3 py-2 text-[10px] font-mono text-red-900/40 tracking-wider hidden lg:block"
            style={{ transform: 'rotate(4deg)' }}
          >
            HAUTE<br/>RÉSOLUTION
          </motion.div>
        </motion.div>

      
      </div>
    </section>
  )
}