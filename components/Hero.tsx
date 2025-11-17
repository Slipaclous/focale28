'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(true)
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Bandes de film 35mm sur les côtés */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-black border-r border-zinc-800 opacity-60 pointer-events-none">
        <div className="h-full flex flex-col justify-around py-4">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, delay: i * 0.1, repeat: Infinity }}
              className="w-8 h-2 bg-zinc-700 ml-2 rounded-sm"
            />
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-black border-l border-zinc-800 opacity-60 pointer-events-none">
        <div className="h-full flex flex-col justify-around py-4">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, delay: i * 0.1 + 0.5, repeat: Infinity }}
              className="w-8 h-2 bg-zinc-700 mr-2 ml-auto rounded-sm"
            />
          ))}
        </div>
      </div>

      {/* Image de fond avec effet chambre noire */}
      <motion.div 
        style={{ opacity, scale }}
        className="absolute inset-0 z-0 bg-black"
      >
        <Image
          src="/images/hero.jpg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay sombre pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>


      {/* Contenu principal */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Logo minimaliste inspiré de l'ouverture d'objectif */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="mb-12"
        >
          <div className="relative inline-block">
            {/* Diaphragme d'objectif stylisé */}
            <svg 
              viewBox="0 0 200 200" 
              className="w-40 h-40 md:w-48 md:h-48 mx-auto"
            >
              {/* Lames du diaphragme */}
              {[...Array(8)].map((_, i) => (
                <motion.path
                  key={i}
                  d={`M 100 100 L ${100 + 60 * Math.cos((i * Math.PI) / 4)} ${100 + 60 * Math.sin((i * Math.PI) / 4)} L ${100 + 60 * Math.cos(((i + 1) * Math.PI) / 4)} ${100 + 60 * Math.sin(((i + 1) * Math.PI) / 4)} Z`}
                  fill="none"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="0.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.4, 0.6, 0.4] }}
                  transition={{ 
                    duration: 3, 
                    delay: i * 0.1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
              
              {/* Cercle extérieur */}
              <motion.circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              
              {/* Cercle intérieur */}
              <motion.circle
                cx="100"
                cy="100"
                r="35"
                fill="rgba(0,0,0,0.6)"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1.5"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              {/* Texte central */}
              <text
                x="100"
                y="95"
                textAnchor="middle"
                className="fill-white font-serif text-2xl tracking-wider"
                style={{ fontWeight: 300 }}
              >
                focale
              </text>
              <text
                x="100"
                y="115"
                textAnchor="middle"
                className="fill-zinc-400 font-serif text-4xl tracking-widest"
                style={{ fontWeight: 200 }}
              >
                2.8
              </text>
            </svg>

            
          </div>
        </motion.div>

        {/* Tagline avec effet machine à écrire */}
        <motion.div className="space-y-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="relative"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-white tracking-tight leading-tight">
              Un moment…
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.1 }}
            className="relative"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-white tracking-tight leading-tight">
              Une pose…
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            className="relative"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-white tracking-tight leading-tight">
              Une photo…
            </h1>
          </motion.div>
        </motion.div>

        {/* Séparateur style négatif photo */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 2.4 }}
          className="relative h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent max-w-xl mx-auto mb-8"
        >
          {/* Points de perforation de film */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-12">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 2.4 + i * 0.1 }}
                className="w-1 h-1 bg-zinc-300 rounded-full"
              />
            ))}
          </div>
        </motion.div>

        {/* Informations avec style timecode */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.6 }}
          className="flex items-center justify-center gap-4 text-zinc-400 font-mono text-xs md:text-sm tracking-wider"
        >
          <span className="hidden md:inline">◐</span>
          <span>PHOTOGRAPHE ÉVÉNEMENTIEL</span>
          <span className="text-zinc-500">|</span>
          <span>15 ANS D&apos;EXPÉRIENCE</span>
          <span className="hidden md:inline">◑</span>
        </motion.div>

        {/* Compteur style compteur de photos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 2.8 }}
          className="mt-8 font-mono text-xs text-zinc-300 tracking-widest"
        >
          [ 00001 / ∞ ]
        </motion.div>
      </div>

      {/* Bouton scroll minimaliste */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isVisible ? 0.6 : 0,
        }}
        whileHover={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 group"
        aria-label="Défiler vers le bas"
      >
        <div className="relative">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 rounded-full border border-zinc-700 group-hover:border-zinc-500 transition-colors flex items-center justify-center backdrop-blur-sm bg-black/20"
          >
            <ChevronDown className="w-5 h-5 text-zinc-300 group-hover:text-zinc-400 transition-colors" />
          </motion.div>
          {/* Cercle de mise au point */}
          <div className="absolute inset-0 rounded-full border border-zinc-800 animate-pulse" style={{ animationDuration: '3s' }} />
        </div>
      </motion.button>

    
    </section>
  )
}