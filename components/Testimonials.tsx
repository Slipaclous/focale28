'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'


interface Testimonial {
  id: number
  name: string

  text: string

  service?: string
}

// Témoignages clients
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mariage',

    text: "Hé non, ce n’est pas parce que nous avons fait silence radio pendant 2 jours que nous avons détesté tes photos !!! Au contraire… ça fait en fait 3 soirées qu’on se les passe en boucle ! C’est parfait, ce qu’on attendait, mieux encore en fait. Qualité parfaite, travail parfait.",

    service: 'Mariage',
  },
  {
    id: 2,
    name: 'Spectacle',

    text: "Je voulais encore une fois vous remercier pour les belles photos de mon spectacle! Un tout grand merci pour le travail effectué. J'ai pris beaucoup de plaisir à les regarder, nul doute que les autres en feront autant!",

    service: 'Spectacle',
  },
  {
    id: 3,
    name: 'Famille',

    text: "Bonjour Alain, Nous avons bien reçu et vu nos belles photos qui reflètent parfaitement la simplicité et le bonheur de cette journée. Nous vous remercions pour votre travail, votre professionnalisme et votre sympathie.",

    service: 'Famille',
  },
  {
    id: 4,
    name: 'Shooting',

    text: "Je viens de tout regarder, elles sont superbes ! Et j’adore l’effet grimace que vous aviez demandé de faire là ! Personnellement, j’adore les photos ! En plus, on voit vraiment tout le monde dessus.",

    service: 'Shooting',
  },
  {
    id: 5,
    name: 'Événement',

    text: "Bonsoir Alain, Je te remercie pour les photos et le petit mot d'accompagnement. Ce fût une soirée riche en surprises et émotions, ton travail me permet de garder tout ça pour très longtemps !",

    service: 'Événement',
  },
  {
    id: 6,
    name: 'Album',

    text: "Bonjour, L’album est parfait, un tout grand merci en tous cas ! On est vraiment content de t'avoir choisi comme photographe ! Nous ferons ta publicité ;)",

    service: 'Album',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })



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


                  {/* Nom */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-serif text-zinc-200">
                      {testimonial.name}
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

                {/* Indicateur */}
                <div className="mt-4 pt-4 border-t border-zinc-900">
                  <div className="flex items-center gap-2">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                      Témoignage Client
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
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
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

