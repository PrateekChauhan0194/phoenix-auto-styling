export default function Aftercare() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="font-heading text-5xl text-white">Aftercare & Warranty</h1>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <h3 className="text-2xl text-white">Wrap Care</h3>
          <ul className="list-disc list-inside mt-2 space-y-1 text-silver/90">
            <li>Avoid washing for 72 hours after installation.</li>
            <li>Use pH‑neutral shampoo, no harsh solvents.</li>
            <li>Hand wash preferred; pressure washer at safe distances.</li>
            <li>Edges: pat dry—don’t pull.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl text-white">Tint Care</h3>
          <ul className="list-disc list-inside mt-2 space-y-1 text-silver/90">
            <li>Allow films to fully cure (up to several days).</li>
            <li>Clean with ammonia‑free glass cleaner and soft microfiber.</li>
            <li>Don’t roll windows down for 48 hours.</li>
          </ul>
        </div>
      </div>
      <p className="text-silver/80 mt-6">Manufacturer warranties are available on film defects and adhesion. Ask in‑store for details.</p>
    </main>
  )
}
