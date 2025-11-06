'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Phone, Globe } from 'lucide-react'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    console.log('Données du formulaire:', data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section id="contact" ref={ref} className="relative py-32 px-4 bg-[#0a0a0a] overflow-hidden">
      {/* Texture papier ligné */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Lignes de carnet en arrière-plan */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
        <div className="h-full flex flex-col justify-around">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="h-px bg-zinc-800" />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* En-tête avec style formulaire professionnel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
         

          <h2 className="text-5xl md:text-7xl font-serif font-extralight text-zinc-100 tracking-tight mb-4">
            Prenons Contact
          </h2>

          {/* Ligne avec date */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="relative w-64 h-px bg-zinc-800 mx-auto mt-6"
          >
            <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-[#0a0a0a] px-3 text-[10px] font-mono text-zinc-400">
              {new Date().getFullYear()}
            </div>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Colonne gauche - Carte de visite style */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Carte de visite principale */}
            <div className="relative bg-zinc-950 border-2 border-zinc-900 p-8 shadow-2xl">
              {/* Texture carte */}
              <div 
                className="absolute inset-0 opacity-[0.15] pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />

              <div className="relative space-y-6">
                {/* Logo simplifié */}
                <div className="mb-8">
                  <div className="text-3xl font-serif font-light text-zinc-200 tracking-wider mb-1">
                    focale 2.8
                  </div>
                  <div className="text-sm font-mono text-zinc-300 tracking-widest">
                    PHOTOGRAPHIE
                  </div>
                </div>

                {/* Introduction */}
                <div className="border-l-2 border-zinc-800 pl-4 py-2">
                  <p className="text-base text-zinc-300 leading-relaxed font-serif">
                    Vous avez un projet photographique ? Parlons-en ensemble. 
                    Chaque demande est unique et mérite une attention particulière.
                  </p>
                </div>

                {/* Informations de contact */}
                <div className="space-y-4 pt-4">
                  <motion.a
                    href="mailto:focale2.8@gmail.com"
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-4 transition-all"
                  >
                    <div className="w-10 h-10 border border-zinc-800 bg-zinc-900/50 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
                      <Mail className="w-4 h-4 text-zinc-300 group-hover:text-zinc-400 transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                        Email
                      </div>
                      <div className="text-sm text-zinc-200 group-hover:text-white transition-colors font-mono">
                        focale2.8@gmail.com
                      </div>
                    </div>
                  </motion.a>

                  <motion.a
                    href="tel:+32"
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-4 transition-all"
                  >
                    <div className="w-10 h-10 border border-zinc-800 bg-zinc-900/50 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
                      <Phone className="w-4 h-4 text-zinc-300 group-hover:text-zinc-400 transition-colors" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                        Téléphone
                      </div>
                      <div className="text-sm text-zinc-200 group-hover:text-white transition-colors font-mono">
                        +324777777
                      </div>
                    </div>
                  </motion.a>
                </div>

                {/* Horaires style annotation */}
                <div className="pt-6 border-t border-zinc-900">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    Disponibilité
                  </div>
                  <div className="text-xs text-zinc-300 font-serif space-y-1">
                    <div>Réponse sous 24-48h</div>
                    <div className="text-zinc-400">Du lundi au vendredi</div>
                  </div>
                </div>
              </div>

              {/* Coins de carte de visite */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-zinc-800" />
              <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-zinc-800" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-zinc-800" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-zinc-800" />
            </div>

            {/* Note adhésive */}
            <motion.div
              initial={{ opacity: 0, rotate: -2 }}
              animate={isInView ? { opacity: 1, rotate: -1 } : { opacity: 0, rotate: -2 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="hidden lg:block"
            >
              <div className="bg-yellow-100/5 border border-yellow-800/20 p-4 shadow-lg" style={{ transform: 'rotate(-1deg)' }}>
                <div className="text-xs text-zinc-200 font-serif italic leading-relaxed">
                  "Chaque projet est une nouvelle
                  <br />
                  histoire à raconter en images"
                </div>
                <div className="mt-2 text-[10px] font-mono text-yellow-100/20">
                  — A.H.
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Colonne droite - Formulaire style fiche de commande */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-3"
          >
            {/* En-tête du formulaire */}
            <div className="mb-6 border-l-4 border-zinc-800 pl-4">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                Fiche de demande
              </div>
              <div className="text-sm text-zinc-300 font-serif">
                Remplissez ce formulaire pour une demande de renseignements
              </div>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative bg-zinc-950 border-2 border-zinc-900 p-8 shadow-2xl"
            >
              {/* Texture papier formulaire */}
              <div 
                className="absolute inset-0 opacity-[0.15] pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />

              <div className="relative space-y-6">
                {/* Champ Nom */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    Nom complet <span className="text-zinc-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Le nom est requis' })}
                    className="w-full px-0 py-2 bg-transparent border-b-2 border-zinc-900 text-zinc-200 placeholder:text-zinc-300 focus:outline-none focus:border-zinc-700 transition-colors font-serif"
                    placeholder="Votre nom"
                  />
                  {errors.name && (
                    <p className="mt-2 text-xs text-red-500/50 font-mono">{errors.name.message}</p>
                  )}
                </div>

                {/* Champ Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    Adresse email <span className="text-zinc-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'L\'email est requis',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email invalide',
                      },
                    })}
                    className="w-full px-0 py-2 bg-transparent border-b-2 border-zinc-900 text-zinc-200 placeholder:text-zinc-300 focus:outline-none focus:border-zinc-700 transition-colors font-serif"
                    placeholder="votre@email.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-xs text-red-500/50 font-mono">{errors.email.message}</p>
                  )}
                </div>

                {/* Champ Téléphone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    Téléphone <span className="text-zinc-400">(optionnel)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    className="w-full px-0 py-2 bg-transparent border-b-2 border-zinc-900 text-zinc-200 placeholder:text-zinc-300 focus:outline-none focus:border-zinc-700 transition-colors font-serif"
                    placeholder="+32 ..."
                  />
                </div>

                {/* Champ Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                    Description du projet <span className="text-zinc-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message', { required: 'Le message est requis' })}
                    className="w-full px-0 py-2 bg-transparent border-b-2 border-zinc-900 text-zinc-200 placeholder:text-zinc-300 focus:outline-none focus:border-zinc-700 transition-colors resize-none font-serif leading-relaxed"
                    placeholder="Décrivez votre projet, la date souhaitée, le type d'événement..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-xs text-red-500/50 font-mono">{errors.message.message}</p>
                  )}
                </div>

                {/* Message de confirmation */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border-2 border-green-900/30 bg-green-950/20 p-4"
                  >
                    <div className="text-xs font-mono text-green-500/50 uppercase tracking-wider mb-1">
                      Message envoyé
                    </div>
                    <div className="text-sm text-green-400/60 font-serif">
                      Merci pour votre demande. Je reviendrai vers vous dans les 24-48h.
                    </div>
                  </motion.div>
                )}

                {/* Bouton d'envoi style tampon */}
                <div className="pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="relative w-full group"
                  >
                    <div className="relative bg-white text-black py-4 px-8 font-mono text-sm uppercase tracking-widest transition-all duration-300 group-hover:bg-zinc-200">
                      Envoyer la demande
                      
                      {/* Perforations décoratives */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-950 rounded-full" />
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-950 rounded-full" />
                    </div>
                    
                    {/* Ombre */}
                    <div className="absolute inset-0 bg-zinc-800 translate-y-1 -z-10 transition-transform group-hover:translate-y-2" />
                  </motion.button>

                  {/* Note de confidentialité */}
                  <div className="mt-4 text-[10px] font-mono text-zinc-300 text-center">
                    Vos données sont traitées de manière confidentielle
                  </div>
                </div>
              </div>

              {/* Numéro de formulaire en coin */}
              <div className="absolute top-2 right-2 text-[10px] font-mono text-zinc-900 opacity-50">
                #F-{new Date().getFullYear()}-001
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer de section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 text-center font-mono text-xs text-zinc-200 tracking-wider"
        >
          [ DÉLAI DE RÉPONSE MOYEN : 24-48 HEURES ]
        </motion.div>
      </div>
    </section>
  )
}