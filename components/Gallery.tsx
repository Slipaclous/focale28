'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    src: '/images/Mariage - Alain Heymans focale 2.8 - 001.jpg',
    alt: 'Mariage',
    title: 'Mariage',
    settings: 'f/2.8 • ISO 400 • 1/125s',
    film: 'KODAK 400',
    frame: '001A',
  },
  {
    id: 2,
    src: '/images/Event - Alain Heymans focale 2.8 -30.jpg',
    alt: 'Événement corporate',
    title: 'Événement Corporate',
    settings: 'f/4.0 • ISO 800 • 1/250s',
    film: 'FUJI 800',
    frame: '007B',
  },
  {
    id: 3,
    src: '/images/Portrait - Alain Heymans focale 2.8 -1.jpg',
    alt: 'Portrait',
    title: 'Portrait',
    settings: 'f/2.8 • ISO 320 • 1/160s',
    film: 'ILFORD HP5',
    frame: '012A',
  },
  {
    id: 4,
    src: '/images/Nightlife - Alain Heymans focale 2.8 -221.jpg',
    alt: 'Nightlife',
    title: 'Nightlife',
    settings: 'f/1.8 • ISO 200 • 1/200s',
    film: 'PORTRA 400',
    frame: '024C',
  },
  {
    id: 5,
    src: '/images/Concert - Alain Heymans focale 2.8 -10.jpg',
    alt: 'Concert',
    title: 'Concert',
    settings: 'f/2.8 • ISO 640 • 1/100s',
    film: 'EKTAR 100',
    frame: '018A',
  },
  {
    id: 6,
    src: '/images/Famille - Alain Heymans focale 2.8 -12.jpg',
    alt: 'Famille',
    title: 'Famille',
    settings: 'f/4.0 • ISO 400 • 1/125s',
    film: 'TRI-X 400',
    frame: '032B',
  },
  {
    id: 7,
    src: '/images/Archi - Alain Heymans focale 2.8 - 13.jpg',
    alt: 'Architecture',
    title: 'Architecture',
    settings: 'f/2.8 • ISO 400 • 1/125s',
    film: 'KODAK 400',
    frame: '013A',
  },
  {
    id: 8,
    src: '/images/Divers - Alain Heymans focale 2.8 -6.jpg',
    alt: 'Divers',
    title: 'Divers',
    settings: 'f/2.8 • ISO 400 • 1/125s',
    film: 'KODAK 400',
    frame: '006A',
  },
  {
    id: 9,
    src: '/images/Night - Alain Heymans focale 2.8 -14.jpg',
    alt: 'Nuit',
    title: 'Nuit',
    settings: 'f/2.8 • ISO 400 • 1/125s',
    film: 'KODAK 400',
    frame: '014A',
  },
]

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Fonction pour naviguer vers l'image précédente
  const goToPrevious = () => {
    if (selectedImage === null) return
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage)
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1
    setSelectedImage(galleryImages[previousIndex].id)
  }

  // Fonction pour naviguer vers l'image suivante
  const goToNext = () => {
    if (selectedImage === null) return
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage)
    const nextIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0
    setSelectedImage(galleryImages[nextIndex].id)
  }

  // Gestion des touches du clavier
  useEffect(() => {
    if (selectedImage === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        const currentIndex = galleryImages.findIndex(img => img.id === selectedImage)
        const previousIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1
        setSelectedImage(galleryImages[previousIndex].id)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        const currentIndex = galleryImages.findIndex(img => img.id === selectedImage)
        const nextIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0
        setSelectedImage(galleryImages[nextIndex].id)
      } else if (e.key === 'Escape') {
        e.preventDefault()
        setSelectedImage(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  return (
    <>
      <section id="gallery" ref={ref} className="relative py-32 px-4 bg-black overflow-hidden">


        <div className="relative max-w-7xl mx-auto z-10">
          {/* En-tête avec style archive */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
         

            <h2 className="text-5xl md:text-7xl font-serif font-extralight text-zinc-100 tracking-tight mb-4">
              Portfolio
            </h2>

            {/* Ligne avec marques de sélection */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="relative w-64 h-px bg-zinc-800 mx-auto mt-6 mb-4"
            >
              {/* Croix de repérage */}
              <div className="absolute left-0 top-1/2 w-2 h-2 border-l border-t border-zinc-700 -translate-y-1/2" />
              <div className="absolute right-0 top-1/2 w-2 h-2 border-r border-t border-zinc-700 -translate-y-1/2" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.8 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-sm font-mono text-zinc-300 tracking-wider uppercase"
            >
              Sélection • {galleryImages.length} photos
            </motion.p>
          </motion.div>

          {/* Grille style planche contact photographique */}
          <div className="relative bg-zinc-900/30 border-2 border-zinc-800/50 p-6 md:p-8 rounded-lg backdrop-blur-sm">
            {/* En-tête de planche contact */}
            <div className="mb-6 pb-4 border-b border-zinc-800/50">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>ROLL 001 • {galleryImages.length} FRAMES</span>
               
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.6
                  }}
                  className="relative aspect-square group cursor-pointer"
                  onClick={() => setSelectedImage(image.id)}
                >
                  {/* Conteneur de l'image */}
                  <div className="relative w-full h-full overflow-hidden bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-all duration-300">
                    {/* Image avec fallback */}
                    <div className="absolute inset-0 z-[1]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 33vw"
                        priority={index < 3}
                        quality={85}
                        unoptimized={true}
                      />
                    </div>
                    
                    {/* Overlay gradient au survol - z-index plus élevé */}
                    <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Informations en bas au survol - z-index élevé */}
                    <div className="absolute bottom-0 left-0 right-0 z-[3] p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                      <p className="text-white font-serif text-sm md:text-base mb-1">
                        {image.title}
                      </p>
                      <div className="text-[10px] font-mono text-zinc-400 space-y-0.5">
                        <div>{image.settings}</div>
                        <div className="text-zinc-300">{image.film}</div>
                      </div>
                    </div>

                    {/* Numéro de frame en haut à droite */}
                    <div className="absolute top-2 right-2 z-[3] text-[10px] font-mono text-zinc-400 bg-black/60 px-2 py-1 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {image.frame}
                    </div>

                    {/* Marques de repérage subtiles aux coins */}
                    <div className="absolute top-2 left-2 z-[3] w-3 h-3 border-l border-t border-zinc-800 opacity-0 group-hover:opacity-50 transition-opacity pointer-events-none" />
                    <div className="absolute top-2 right-2 z-[3] w-3 h-3 border-r border-t border-zinc-800 opacity-0 group-hover:opacity-50 transition-opacity pointer-events-none" />
                    <div className="absolute bottom-2 left-2 z-[3] w-3 h-3 border-l border-b border-zinc-800 opacity-0 group-hover:opacity-50 transition-opacity pointer-events-none" />
                    <div className="absolute bottom-2 right-2 z-[3] w-3 h-3 border-r border-b border-zinc-800 opacity-0 group-hover:opacity-50 transition-opacity pointer-events-none" />
                  </div>

                  {/* Numéro d'index */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="absolute -bottom-5 left-0 text-[10px] font-mono text-zinc-300"
                  >
                    #{String(image.id).padStart(2, '0')}
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Note manuscrite en bas de planche */}
            <motion.div
              initial={{ opacity: 0, rotate: -2 }}
              animate={isInView ? { opacity: 0.9, rotate: -1 } : { opacity: 0, rotate: -2 }}
              transition={{ delay: 1 }}
              className="mt-6 pt-4 border-t border-zinc-800/50 flex items-center justify-between text-xs font-serif text-zinc-400"
            >
              <div className="flex items-center gap-4">
                <span className="italic">Collection 2024</span>
                <span className="text-zinc-400">•</span>
                <span className="font-mono text-zinc-400">{galleryImages.length} épreuves sélectionnées</span>
              </div>
              <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-zinc-400">
                <span>APPROVED</span>
                <span className="w-1 h-1 bg-zinc-700 rounded-full" />
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Lightbox style table lumineuse */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-zinc-950 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            {/* Effet de lumière diffuse de table lumineuse */}
            <div className="absolute inset-0 bg-gradient-radial from-zinc-900/50 via-zinc-950 to-black pointer-events-none" />

            {/* Bouton fermer style bouton de chambre noire */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-10 w-12 h-12 rounded-full border-2 border-zinc-800 bg-black/60 backdrop-blur-sm hover:border-zinc-300 transition-colors duration-300 flex items-center justify-center group"
              aria-label="Fermer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
            </motion.button>

            {selectedImage && (() => {
              const image = galleryImages.find((img) => img.id === selectedImage)
              if (!image) return null

              return (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative max-w-7xl w-full h-full flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Bouton navigation précédente */}
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      goToPrevious()
                    }}
                    className="absolute left-4 md:left-8 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-zinc-800 bg-black/60 backdrop-blur-sm hover:border-zinc-300 transition-colors duration-300 flex items-center justify-center group"
                    aria-label="Image précédente"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                  </motion.button>

                  {/* Bouton navigation suivante */}
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      goToNext()
                    }}
                    className="absolute right-4 md:right-8 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-zinc-800 bg-black/60 backdrop-blur-sm hover:border-zinc-300 transition-colors duration-300 flex items-center justify-center group"
                    aria-label="Image suivante"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                  </motion.button>

                  {/* Image principale */}
                  <div className="relative w-full max-w-6xl h-[90vh] flex items-center justify-center px-16 md:px-20">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain"
                      sizes="90vw"
                      priority
                      unoptimized={true}
                    />
                  </div>
                </motion.div>
              )
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}