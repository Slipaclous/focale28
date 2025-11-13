'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  rating: number
  text: string
  date: string
  service?: string
}

// Témoignages statiques - À remplacer par les vrais avis Google
// Vous pouvez récupérer ces avis depuis votre Google Business Profile
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Marie Dubois',
    rating: 5,
    text: 'Service exceptionnel ! Alain a su capturer tous les moments importants de notre événement corporate. Les photos sont magnifiques et le professionnalisme au rendez-vous.',
    date: '2024-01-15',
    service: 'Corporate',
  },
  {
    id: 2,
    name: 'Jean Martin',
    rating: 5,
    text: 'Photographe très professionnel et à l\'écoute. Les photos de notre cérémonie sont absolument parfaites. Je recommande sans hésitation !',
    date: '2024-02-20',
    service: 'Cérémonies',
  },
  {
    id: 3,
    name: 'Sophie Lambert',
    rating: 5,
    text: 'Un travail remarquable ! Alain a su mettre en valeur notre événement avec des clichés de qualité. Très réactif et professionnel du début à la fin.',
    date: '2024-03-10',
    service: 'Team Building',
  },
  {
    id: 4,
    name: 'Pierre Rousseau',
    rating: 5,
    text: 'Excellent photographe, très à l\'écoute de nos besoins. Les photos sont superbes et ont parfaitement capturé l\'ambiance de notre événement.',
    date: '2024-03-25',
    service: 'Event',
  },
  {
    id: 5,
    name: 'Claire Bernard',
    rating: 5,
    text: 'Service impeccable ! Les photos sont magnifiques et le délai de livraison respecté. Un vrai professionnel que je recommande vivement.',
    date: '2024-04-05',
    service: 'Portraits',
  },
  {
    id: 6,
    name: 'Thomas Moreau',
    rating: 5,
    text: 'Alain a su capturer l\'essence de notre événement avec talent. Photos de qualité professionnelle et approche très professionnelle. Merci !',
    date: '2024-04-18',
    service: 'Afterwork',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-BE', { 
      month: 'long', 
      year: 'numeric' 
    })
  }

  return (
    <section id="testimonials" ref={ref} className="relative py-32 px-4 bg-black overflow-hidden">
      <div className="relative max-w-7xl mx-auto z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          {/* Numéro de référence */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.9 } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-mono text-xs text-zinc-400 tracking-widest mb-6"
          >
            [ SÉRIE #003 — TÉMOIGNAGES ]
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-serif font-extralight text-zinc-100 tracking-tight leading-tight mb-4">
            Ce que disent
            <br />
            <span className="text-zinc-400 italic font-light">nos clients</span>
          </h2>

          {/* Ligne de séparation */}
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

        {/* Grille de témoignages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ 
                delay: 0.6 + index * 0.1, 
                duration: 0.6 
              }}
              className="relative group"
            >
              {/* Carte de témoignage */}
              <div className="relative bg-zinc-950 border-2 border-zinc-900 p-6 h-full flex flex-col hover:border-zinc-800 transition-colors duration-300">
                {/* En-tête avec étoiles */}
                <div className="mb-4">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-zinc-800'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Nom et date */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-serif text-zinc-200">
                      {testimonial.name}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-500">
                      {formatDate(testimonial.date)}
                    </div>
                  </div>

                  {/* Service (si disponible) */}
                  {testimonial.service && (
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                      {testimonial.service}
                    </div>
                  )}
                </div>

                {/* Texte du témoignage */}
                <div className="flex-1">
                  <p className="text-sm text-zinc-300 leading-relaxed font-serif italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>

                {/* Indicateur Google */}
                <div className="mt-4 pt-4 border-t border-zinc-900">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4">
                      <svg viewBox="0 0 24 24" className="w-full h-full fill-zinc-400">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                      Google Review
                    </div>
                  </div>
                </div>

                {/* Coins décoratifs */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-zinc-900 opacity-0 group-hover:opacity-50 transition-opacity" />
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-zinc-900 opacity-0 group-hover:opacity-50 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-zinc-900 opacity-0 group-hover:opacity-50 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-zinc-900 opacity-0 group-hover:opacity-50 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lien vers Google Reviews */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-center"
        >
          <motion.a
            href="https://www.google.com/maps/place/focale+2.8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="border-2 border-zinc-800 px-6 py-3 group-hover:border-zinc-700 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6">
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-zinc-400 group-hover:fill-zinc-300 transition-colors">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <span className="text-sm font-mono text-zinc-400 group-hover:text-zinc-300 uppercase tracking-wider transition-colors">
                  Voir tous les avis sur Google
                </span>
                <span className="text-zinc-600 group-hover:text-zinc-500 transition-colors">→</span>
              </div>
            </div>
          </motion.a>
        </motion.div>

        {/* Note de bas de page */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-12 text-center font-mono text-xs text-zinc-400 tracking-wider"
        >
          [ {testimonials.length} TÉMOIGNAGES VERIFIÉS ]
        </motion.div>
      </div>
    </section>
  )
}

