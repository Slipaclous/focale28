'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Grid } from 'lucide-react'

// Type definitions
type GalleryImage = {
  id: number
  src: string
  alt: string
  title: string
  settings: string
  film: string
  frame: string
}

type Category = {
  id: string
  title: string
  coverImage: GalleryImage
  images: GalleryImage[]
}

// Original images data transformed into categories
const rawImages = [
  // Mariage
  {
    id: 1,
    src: '/images/Mariage - Alain Heymans focale 2.8 - 001.jpg',
    alt: 'Mariage',
    title: 'Mariage',
    settings: 'f/2.8 • ISO 400 • 1/125s',
    film: 'KODAK 400',
    frame: '001A',
    category: 'mariage'
  },
  {
    id: 101,
    src: '/images/Mariage - Alain Heymans focale 2.8 - 006.jpg',
    alt: 'Mariage',
    title: 'Mariage',
    settings: 'f/2.8 • ISO 400 • 1/125s',
    film: 'KODAK 400',
    frame: '006A',
    category: 'mariage'
  },
  {
    id: 102,
    src: '/images/Mariage - Alain Heymans focale 2.8 - 007.jpg',
    alt: 'Mariage',
    title: 'Mariage',
    settings: 'f/2.8 • ISO 400 • 1/125s',
    film: 'KODAK 400',
    frame: '007A',
    category: 'mariage'
  },

  // Corporate
  {
    id: 2,
    src: '/images/Event - Alain Heymans focale 2.8 -30.jpg',
    alt: 'Événement corporate',
    title: 'Corporate',
    settings: 'f/4.0 • ISO 800 • 1/250s',
    film: 'FUJI 800',
    frame: '007B',
    category: 'corporate'
  },
  {
    id: 201,
    src: '/images/Event - Alain Heymans focale 2.8 -10.jpg',
    alt: 'Événement corporate',
    title: 'Corporate',
    settings: 'f/4.0 • ISO 800 • 1/250s',
    film: 'FUJI 800',
    frame: '010B',
    category: 'corporate'
  },
  {
    id: 202,
    src: '/images/Event - Alain Heymans focale 2.8 -7.jpg',
    alt: 'Événement corporate',
    title: 'Corporate',
    settings: 'f/4.0 • ISO 800 • 1/250s',
    film: 'FUJI 800',
    frame: '007B',
    category: 'corporate'
  },

  // Portrait
  {
    id: 3,
    src: '/images/Portrait - Alain Heymans focale 2.8 -1.jpg',
    alt: 'Portrait',
    title: 'Portrait',
    settings: 'f/2.8 • ISO 320 • 1/160s',
    film: 'ILFORD HP5',
    frame: '012A',
    category: 'portrait'
  },
  {
    id: 301,
    src: '/images/Portrait - Alain Heymans focale 2.8 -27.jpg',
    alt: 'Portrait',
    title: 'Portrait',
    settings: 'f/2.8 • ISO 320 • 1/160s',
    film: 'ILFORD HP5',
    frame: '027A',
    category: 'portrait'
  },
  {
    id: 302,
    src: '/images/Portrait - Alain Heymans focale 2.8 -37.jpg',
    alt: 'Portrait',
    title: 'Portrait',
    settings: 'f/2.8 • ISO 320 • 1/160s',
    film: 'ILFORD HP5',
    frame: '037A',
    category: 'portrait'
  },

  // Nightlife
  {
    id: 4,
    src: '/images/Nightlife - Alain Heymans focale 2.8 -221.jpg',
    alt: 'Nightlife',
    title: 'Nightlife',
    settings: 'f/1.8 • ISO 200 • 1/200s',
    film: 'PORTRA 400',
    frame: '024C',
    category: 'nightlife'
  },
  {
    id: 401,
    src: '/images/Nightlife - Alain Heymans focale 2.8 -301.jpg',
    alt: 'Nightlife',
    title: 'Nightlife',
    settings: 'f/1.8 • ISO 200 • 1/200s',
    film: 'PORTRA 400',
    frame: '301C',
    category: 'nightlife'
  },
  {
    id: 402,
    src: '/images/Nightlife - Alain Heymans focale 2.8 -360.jpg',
    alt: 'Nightlife',
    title: 'Nightlife',
    settings: 'f/1.8 • ISO 200 • 1/200s',
    film: 'PORTRA 400',
    frame: '360C',
    category: 'nightlife'
  },

  // Concert
  {
    id: 5,
    src: '/images/Concert - Alain Heymans focale 2.8 -10.jpg',
    alt: 'Concert',
    title: 'Concert',
    settings: 'f/2.8 • ISO 640 • 1/100s',
    film: 'EKTAR 100',
    frame: '018A',
    category: 'concert'
  },
  {
    id: 501,
    src: '/images/Concert - Alain Heymans focale 2.8 -8.jpg',
    alt: 'Concert',
    title: 'Concert',
    settings: 'f/2.8 • ISO 640 • 1/100s',
    film: 'EKTAR 100',
    frame: '008A',
    category: 'concert'
  },
  {
    id: 502,
    src: '/images/Concert - Alain Heymans focale 2.8 -9.jpg',
    alt: 'Concert',
    title: 'Concert',
    settings: 'f/2.8 • ISO 640 • 1/100s',
    film: 'EKTAR 100',
    frame: '009A',
    category: 'concert'
  },

  // Famille
  {
    id: 6,
    src: '/images/Famille - Alain Heymans focale 2.8 -12.jpg',
    alt: 'Famille',
    title: 'Famille',
    settings: 'f/4.0 • ISO 400 • 1/125s',
    film: 'TRI-X 400',
    frame: '032B',
    category: 'famille'
  },
  {
    id: 601,
    src: '/images/Famille - Alain Heymans focale 2.8 -17.jpg',
    alt: 'Famille',
    title: 'Famille',
    settings: 'f/4.0 • ISO 400 • 1/125s',
    film: 'TRI-X 400',
    frame: '017B',
    category: 'famille'
  },
  {
    id: 602,
    src: '/images/Famille - Alain Heymans focale 2.8 -6.jpg',
    alt: 'Famille',
    title: 'Famille',
    settings: 'f/4.0 • ISO 400 • 1/125s',
    film: 'TRI-X 400',
    frame: '006B',
    category: 'famille'
  },

  // Architecture
  {
    id: 7,
    src: '/images/Archi - Alain Heymans focale 2.8 - 13.jpg',
    alt: 'Architecture',
    title: 'Architecture',
    settings: 'f/2.8 • ISO 400 • 1/125s',
    film: 'KODAK 400',
    frame: '013A',
    category: 'architecture'
  },
  {
    id: 701,
    src: '/images/Archi - Alain Heymans focale 2.8 - 02.jpg',
    alt: 'Architecture',
    title: 'Architecture',
    settings: 'f/2.8 • ISO 400 • 1/125s',
    film: 'KODAK 400',
    frame: '002A',
    category: 'architecture'
  },
  {
    id: 702,
    src: '/images/Archi - Alain Heymans focale 2.8 -15.jpg',
    alt: 'Architecture',
    title: 'Architecture',
    settings: 'f/2.8 • ISO 400 • 1/125s',
    film: 'KODAK 400',
    frame: '015A',
    category: 'architecture'
  },

  // Divers
  {
    id: 8,
    src: '/images/Divers - Alain Heymans focale 2.8 -6.jpg',
    alt: 'Divers',
    title: 'Divers',
    settings: 'f/2.8 • ISO 400 • 1/125s',
    film: 'KODAK 400',
    frame: '006A',
    category: 'divers'
  },
  {
    id: 801,
    src: '/images/Divers - Alain Heymans focale 2.8 -12.jpg',
    alt: 'Divers',
    title: 'Divers',
    settings: 'f/2.8 • ISO 400 • 1/125s',
    film: 'KODAK 400',
    frame: '012A',
    category: 'divers'
  },
  {
    id: 802,
    src: '/images/Divers - Alain Heymans focale 2.8 -13.jpg',
    alt: 'Divers',
    title: 'Divers',
    settings: 'f/2.8 • ISO 400 • 1/125s',
    film: 'KODAK 400',
    frame: '013A',
    category: 'divers'
  },

  // Nuit
  {
    id: 9,
    src: '/images/Night - Alain Heymans focale 2.8 -14.jpg',
    alt: 'Nuit',
    title: 'Nuit',
    settings: 'f/2.8 • ISO 400 • 1/125s',
    film: 'KODAK 400',
    frame: '014A',
    category: 'nuit'
  },
  {
    id: 901,
    src: '/images/Night - Alain Heymans focale 2.8 - 002.jpg',
    alt: 'Nuit',
    title: 'Nuit',
    settings: 'f/2.8 • ISO 400 • 1/125s',
    film: 'KODAK 400',
    frame: '002A',
    category: 'nuit'
  },
  {
    id: 902,
    src: '/images/Night - Alain Heymans focale 2.8 - 251.jpg',
    alt: 'Nuit',
    title: 'Nuit',
    settings: 'f/2.8 • ISO 400 • 1/125s',
    film: 'KODAK 400',
    frame: '251A',
    category: 'nuit'
  },
]

const categories: Category[] = [
  'mariage', 'corporate', 'portrait', 'nightlife', 'concert', 'famille', 'architecture', 'divers', 'nuit'
].map(catId => {
  const catImages = rawImages.filter(img => img.category === catId)
  return {
    id: catId,
    title: catImages[0].title,
    coverImage: catImages[0],
    images: catImages
  }
})

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  // Navigation functions for Lightbox
  const goToPrevious = () => {
    if (!selectedImage || !selectedCategory) return
    const currentIndex = selectedCategory.images.findIndex(img => img.id === selectedImage.id)
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : selectedCategory.images.length - 1
    setSelectedImage(selectedCategory.images[previousIndex])
  }

  const goToNext = () => {
    if (!selectedImage || !selectedCategory) return
    const currentIndex = selectedCategory.images.findIndex(img => img.id === selectedImage.id)
    const nextIndex = currentIndex < selectedCategory.images.length - 1 ? currentIndex + 1 : 0
    setSelectedImage(selectedCategory.images[nextIndex])
  }

  // Keyboard navigation
  useEffect(() => {
    if (!selectedImage) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goToNext()
      } else if (e.key === 'Escape') {
        e.preventDefault()
        setSelectedImage(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, selectedCategory])

  return (
    <>
      <section id="gallery" ref={ref} className="relative py-32 px-4 bg-black overflow-hidden">
        <div className="relative max-w-7xl mx-auto z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <h2 className="text-5xl md:text-7xl font-serif font-extralight text-zinc-100 tracking-tight mb-4">
              Portfolio
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="relative w-64 h-px bg-zinc-800 mx-auto mt-6 mb-4"
            >
              <div className="absolute left-0 top-1/2 w-2 h-2 border-l border-t border-zinc-700 -translate-y-1/2" />
              <div className="absolute right-0 top-1/2 w-2 h-2 border-r border-t border-zinc-700 -translate-y-1/2" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.8 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-sm font-mono text-zinc-300 tracking-wider uppercase"
            >
              Collections • {categories.length} Albums
            </motion.p>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 border border-zinc-800 group-hover:border-zinc-600 transition-all duration-500">
                  <Image
                    src={category.coverImage.src}
                    alt={category.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-serif text-white mb-2 italic">
                        {category.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
                        <span>{category.images.length} Photos</span>
                        <span className="w-1 h-1 bg-zinc-600 rounded-full" />
                        <span>Voir l'album</span>
                      </div>
                    </div>
                  </div>

                  {/* Corner Marks */}
                  <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Modal (Album View) */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md overflow-y-auto"
          >
            <div className="min-h-screen px-4 py-12 md:py-20">
              <div className="max-w-7xl mx-auto">
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-12 sticky top-0 z-50 bg-black/50 backdrop-blur-sm py-4 border-b border-zinc-800">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-serif text-white italic mb-1">
                      {selectedCategory.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Album • {selectedCategory.images.length} Photos
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="p-2 hover:bg-zinc-900 rounded-full transition-colors group"
                  >
                    <X className="w-8 h-8 text-zinc-400 group-hover:text-white transition-colors" />
                  </button>
                </div>

                {/* Album Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedCategory.images.map((image, index) => (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative aspect-square cursor-pointer group bg-zinc-900"
                      onClick={() => setSelectedImage(image)}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                      {/* Hover Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-sm font-mono text-zinc-300">{image.frame}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox (Full Screen Image) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 p-4 hover:bg-zinc-900/50 rounded-full transition-colors group"
            >
              <X className="w-6 h-6 text-zinc-400 group-hover:text-white" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 z-50 p-4 hover:bg-zinc-900/50 rounded-full transition-colors group hidden md:block"
            >
              <ChevronLeft className="w-8 h-8 text-zinc-400 group-hover:text-white" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 z-50 p-4 hover:bg-zinc-900/50 rounded-full transition-colors group hidden md:block"
            >
              <ChevronRight className="w-8 h-8 text-zinc-400 group-hover:text-white" />
            </button>

            {/* Image */}
            <div className="relative w-full h-full p-4 md:p-12 flex items-center justify-center">
              <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  priority
                  quality={95}
                />
              </div>
            </div>

            {/* Image Info */}
            <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
              <p className="text-white font-serif text-xl mb-2">{selectedImage.title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}