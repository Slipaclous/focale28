import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
            {/* Background grain/noise effect could go here if global css handles it, otherwise plain black is fine */}

            <div className="relative z-10 max-w-lg mx-auto space-y-8">
                {/* Decorative film strips */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-900 -translate-x-12 hidden md:block" />
                <div className="absolute right-0 top-0 bottom-0 w-px bg-zinc-900 translate-x-12 hidden md:block" />

                <div className="relative w-48 h-48 mx-auto opacity-50 mb-8">
                    <Image
                        src="/images/_Logo Focale blanc.png"
                        alt="Focale 2.8 Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                <h1 className="text-9xl font-serif text-zinc-800 font-bold tracking-tighter">
                    404
                </h1>

                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-serif text-white italic">
                        Image introuvable...
                    </h2>
                    <p className="text-zinc-400 font-mono text-sm max-w-md mx-auto leading-relaxed">
                        Il semblerait que le négatif de cette page ait été perdu.
                        Retournons au studio pour développer de nouvelles images.
                    </p>
                </div>

                <div className="pt-8">
                    <Link
                        href="/"
                        className="inline-block border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 px-8 py-3 font-mono text-xs uppercase tracking-widest transition-all"
                    >
                        Retour à l'accueil
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                    ERR_FILM_NOT_FOUND
                </p>
            </div>
        </div>
    )
}
