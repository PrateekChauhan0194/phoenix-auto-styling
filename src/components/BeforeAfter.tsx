import { useState } from 'react'

export default function BeforeAfter() {
  const [val, setVal] = useState(50)
  const before = "https://imgur.com/aS0lDqQ.jpeg?q=80&w=1200&auto=format&fit=crop"
  const after = "https://imgur.com/fJ1KECC.jpeg?q=80&w=1200&auto=format&fit=crop"

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h3 className="font-heading text-3xl text-white mb-4">Before / After</h3>
      <div className="relative overflow-hidden rounded-2xl border border-graphite">
        <img src={before} alt="Before" className="w-full h-[360px] object-cover" />
        <img src={after} alt="After" className="absolute inset-0 h-[360px] w-full object-cover"
          style={{ clipPath: `inset(0 ${100 - val}% 0 0)` }} />
        <input type="range" min="0" max="100" value={val} onChange={e => setVal(parseInt(e.target.value))}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1/2" />
      </div>
      <p className="text-xs text-silver/70 mt-2">Move the slider to reveal the transformation.</p>
    </section>
  )
}
