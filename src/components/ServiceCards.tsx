import { motion } from 'framer-motion'
import { services } from '../data/services'

export default function ServiceCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div key={s.title} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay:i*0.05}}
            className="rounded-2xl border border-graphite bg-onyx/50 p-5 hover:border-ember/60 transition">
            <div className="text-xl font-semibold text-white">{s.title}</div>
            <p className="text-sm mt-2 text-silver/90">{s.snippet}</p>
            <ul className="text-xs mt-3 space-y-1 list-disc list-inside">
              {s.highlights.map(h => <li key={h} className="text-silver/80">{h}</li>)}
            </ul>
            <a href="/services" className="inline-block mt-4 text-ember hover:underline text-sm">Learn more →</a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
