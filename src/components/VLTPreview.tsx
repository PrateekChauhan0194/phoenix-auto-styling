
import { useState } from 'react'

export default function VLTPreview() {
  const [vlt, setVlt] = useState(35)
  return (
    <section className="max-w-7xl mx-auto pt-12">
      <h3 className="font-heading text-3xl text-white">VLT Preview</h3>
      <div className="flex items-baseline justify-start">
        <div className="glass py-6 w-screen md:w-[40vw]">
          <div className="flex items-center justify-between">
            <div className="chip">{vlt}%</div>
          </div>
          <div className="relative my-4 aspect-[16/9] rounded-xl overflow-hidden bg-gradient-to-tr from-zinc-800 to-zinc-900 border border-white/10">
            <div className="absolute inset-0 grid grid-cols-6 gap-1 p-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="rounded bg-white/5"></div>
              ))}
            </div>
            <div className="absolute inset-0 bg-black" style={{ opacity: (100 - vlt) / 100 }}></div>
          </div>
          <input type="range" min="5" max="70" step="5" value={vlt} onChange={(e) => setVlt(parseInt(e.target.value))}
            className="w-full accent-amber-300" />
          <p className="text-xs text-white/60 mt-2">Adjust to preview approximate darkness (informational only).</p>
        </div>
      </div>
    </section>
  )
}
