import VLTPreview from 'components/VLTPreview'
import { services } from 'data/services'

export default function Services() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="font-heading text-5xl text-white">Services</h1>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {services.map(s => (
          <div key={s.title} className="rounded-2xl border border-graphite bg-onyx/60 p-6">
            <h3 className="text-2xl text-white">{s.title}</h3>
            <p className="text-silver/90 mt-2">{s.snippet}</p>
            <ul className="mt-3 list-disc list-inside space-y-1 text-silver/80">
              {s.highlights.map(h => <li key={h}>{h}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <VLTPreview />
      <div className="mt-10">
        <a href="/contact" className="px-5 py-3 rounded-2xl bg-ember text-black font-semibold shadow-glow hover:scale-105 transition">Book a consult</a>
      </div>
    </main>
  )
}
