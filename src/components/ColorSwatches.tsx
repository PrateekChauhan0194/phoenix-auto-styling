import { swatches } from '../data/swatches'

export default function ColorSwatches() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-baseline justify-between">
        <h3 className="font-heading text-3xl text-white">Explore Colors</h3>
        <p className="text-xs text-silver/70 max-w-lg">Screen colours may vary from physical films. Book an in-studio swatch viewing before finalising.</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
        {swatches.map(s => (
          <div key={s.code} className="rounded-xl overflow-hidden border border-graphite bg-onyx/50">
            <div className="h-20" style={{background:s.hex}} />
            <div className="p-3">
              <div className="text-sm text-white">{s.name}</div>
              <div className="text-xs text-silver/80">{s.brand} • {s.finish}</div>
              <div className="text-xs mt-1 text-silver/60">{s.code}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <a href="/contact" className="px-5 py-3 rounded-2xl bg-graphite text-white border border-silver/20 hover:border-ember transition">Book swatch viewing →</a>
      </div>
    </section>
  )
}
