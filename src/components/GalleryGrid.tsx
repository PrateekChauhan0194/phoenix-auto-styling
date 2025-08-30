import { useState } from 'react'
import { gallery } from '../data/gallery'

export default function GalleryGrid() {
  const [active, setActive] = useState<string | null>(null)
  const activeItem = gallery.find(g => g.id === active)

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gallery.map(item => (
          <button key={item.id} onClick={()=>setActive(item.id)} className="group relative overflow-hidden rounded-xl border border-graphite bg-onyx/40">
            <img src={item.url} alt={item.title} className="h-52 w-full object-cover transition scale-100 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="absolute bottom-2 left-2 text-xs">{item.title}</div>
          </button>
        ))}
      </div>

      {activeItem && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" onClick={()=>setActive(null)}>
          <div className="max-w-4xl w-full">
            <img src={activeItem.url} alt={activeItem.title} className="w-full h-auto rounded-xl border border-graphite" />
            <div className="text-sm mt-2 text-silver/80">{activeItem.title} • {activeItem.meta}</div>
          </div>
        </div>
      )}
    </section>
  )
}
