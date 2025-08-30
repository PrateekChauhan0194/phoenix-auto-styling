import { motion } from 'framer-motion'
import hero from '../assets/hero-reference.png'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[50rem] h-[50rem] bg-ember/10 blur-3xl rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
          <p className="uppercase tracking-[0.3em] text-xs text-silver/70">Melbourne’s finest Vinyl Wrap & Tinting Specialists</p>
          <h1 className="font-heading text-white text-6xl leading-none mt-3">You name it – we will <span className="text-ember">wrap & tint</span> it!</h1>
          <p className="mt-6 text-silver/90 max-w-prose">Premium films. Meticulous prep. Flawless edges. Because details matter. From full colour changes to precision window tints—Phoenix-level finish every time.</p>
          <div className="mt-8 flex gap-4">
            <a href="/contact" className="px-5 py-3 rounded-2xl bg-ember text-black font-semibold shadow-glow hover:scale-105 transition">Get a Quote</a>
            <a href="/gallery" className="px-5 py-3 rounded-2xl bg-graphite text-white border border-silver/20 hover:border-ember transition">View Gallery</a>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.6, delay:0.1}} className="relative">
          <div className="rounded-3xl overflow-hidden border border-graphite shadow-2xl">
            <img src={hero} alt="Phoenix Auto Styling hero" className="w-full h-auto object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
