import { useEffect, useRef, useState } from 'react'
import { gallery } from '../data/gallery'

export default function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const activeItem = activeIndex !== null ? gallery[activeIndex] : null
  const touchStartX = useRef<number | null>(null)

  const openAt = (idx: number) => setActiveIndex(idx)
  const close = () => setActiveIndex(null)
  const prev = () => setActiveIndex(i => (i === null ? i : (i - 1 + gallery.length) % gallery.length))
  const next = () => setActiveIndex(i => (i === null ? i : (i + 1) % gallery.length))

  // Keyboard navigation
  useEffect(() => {
    if (activeIndex === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { close() }
      else if (e.key === 'ArrowRight') { next() }
      else if (e.key === 'ArrowLeft') { prev() }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [activeIndex])

  const onTouchStart: React.TouchEventHandler = (e) => {
    touchStartX.current = e.changedTouches[0].clientX
  }
  const onTouchEnd: React.TouchEventHandler = (e) => {
    if (touchStartX.current == null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    const threshold = 50
    if (delta > threshold) {
      prev()
    } else if (delta < -threshold) {
      next()
    }
    touchStartX.current = null
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gallery.map((item, i) => (
          <button
            key={item.id}
            onClick={() => openAt(i)}
            className="group relative overflow-hidden rounded-xl border border-graphite bg-onyx/40 focus:outline-none focus:ring-2 focus:ring-ember/60"
            aria-label={`Open image: ${item.title}`}
          >
            <img src={item.url} alt={item.title} className="h-52 w-full object-cover transition scale-100 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="absolute bottom-2 left-2 text-xs text-white drop-shadow">{item.title}</div>
          </button>
        ))}
      </div>

      {activeItem && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          <div
            className="relative max-w-5xl w-full select-none"
            onClick={e => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Close button */}
            <button
              onClick={close}
              aria-label="Close gallery"
              className="absolute -top-10 right-0 md:top-2 md:right-2 p-2 rounded-full bg-black/40 text-silver hover:text-ember hover:bg-black/60 backdrop-blur focus:outline-none focus:ring-2 focus:ring-ember/70"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>

            {/* Image */}
            <img
              src={activeItem.url}
              alt={activeItem.title}
              className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
              draggable={false}
            />
            <div className="mt-3 flex flex-col md:flex-row md:items-center gap-2 text-silver/80 text-sm">
              <span className="font-medium text-silver/90">{activeItem.title}</span>
              <span className="opacity-60">{activeItem.meta}</span>
              <span className="ml-auto opacity-60">{(activeIndex! + 1)} / {gallery.length}</span>
            </div>

            {/* Navigation buttons */}
            {gallery.length > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="Previous image"
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-silver hover:text-ember hover:bg-black/60 backdrop-blur focus:outline-none focus:ring-2 focus:ring-ember/70"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  aria-label="Next image"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 text-silver hover:text-ember hover:bg-black/60 backdrop-blur focus:outline-none focus:ring-2 focus:ring-ember/70"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
