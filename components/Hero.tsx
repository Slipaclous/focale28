'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

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
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Texture papier photo grain argentique */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='6' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Bandes de film 35mm sur les côtés */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-black border-r border-zinc-800 opacity-60 pointer-events-none">
        <div className="h-full flex flex-col justify-around py-4">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
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
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'contrast(1.1) brightness(0.7)',
          }}
        />
        {/* Vignette photographique naturelle */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 100%)'
          }}
        />
        {/* Overlay avec dégradé subtil */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </motion.div>

      {/* Planche contact vintage en arrière-plan */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-20">
        <div className="w-full h-full grid grid-cols-6 grid-rows-4 gap-2 p-8">
          {[...Array(24)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: [0.2, 0.4, 0.2], scale: [0.9, 1, 0.9] }}
              transition={{ 
                duration: 4, 
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="border border-white/20 bg-white/5"
            />
          ))}
        </div>
      </div>

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
                  animate={{ opacity: [0.15, 0.3, 0.15] }}
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

            {/* Annotations manuscrites style carnet de notes */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.7, x: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="absolute -left-20 top-1/2 -translate-y-1/2 hidden lg:block"
            >
              <div className="text-xs text-zinc-400 font-mono -rotate-12 space-y-1">
                <div className="border-l-2 border-zinc-700 pl-2">
                  <div>f/2.8</div>
                  <div className="text-zinc-300">large ouv.</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 0.7, x: 0 }}
              transition={{ duration: 1, delay: 1.7 }}
              className="absolute -right-20 top-1/2 -translate-y-1/2 hidden lg:block"
            >
              <div className="text-xs text-zinc-400 font-mono rotate-12 space-y-1">
                <div className="border-r-2 border-zinc-700 pr-2 text-right">
                  <div>bokeh</div>
                  <div className="text-zinc-300">profond</div>
                </div>
              </div>
            </motion.div>
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
              Capturer l'instant,
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.1 }}
            className="relative"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-white tracking-tight leading-tight">
              révéler l'<span className="italic text-zinc-300">émotion</span>
            </h2>
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
          <span>15 ANS D'EXPÉRIENCE</span>
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

      {/* Informations techniques en bas (style métadonnées EXIF) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-6 left-6 z-10 hidden xl:block"
      >
        <div className="font-mono text-[10px] text-zinc-300 space-y-1 border-l-2 border-zinc-800 pl-3">
          <div className="flex gap-4">
            <span className="text-zinc-500">ISO</span>
            <span>400</span>
          </div>
          <div className="flex gap-4">
            <span className="text-zinc-500">SHUTTER</span>
            <span>1/125s</span>
          </div>
          <div className="flex gap-4">
            <span className="text-zinc-500">APERTURE</span>
            <span>f/2.8</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-6 right-6 z-10 hidden xl:block"
      >
        <div className="font-mono text-[10px] text-zinc-300 space-y-1 border-r-2 border-zinc-800 pr-3 text-right">
          <div>FULL FRAME</div>
          <div className="text-zinc-500">35mm EQUIV.</div>
          <div>RAW + JPEG</div>
        </div>
      </motion.div>
    </section>
  )
}