import ColorSwatches from 'components/ColorSwatches'

export default function ColorLibrary() {
  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="font-heading text-5xl text-white">Color Library</h1>
        <p className="mt-4 text-silver/90 max-w-3xl">Browse a curated set of popular finishes from 3M™ 2080 and Avery Dennison SW900 ranges. On‑screen colours may differ—book an in‑studio swatch check before locking in your choice.</p>
      </div>
      <ColorSwatches />
    </main>
  )
}
