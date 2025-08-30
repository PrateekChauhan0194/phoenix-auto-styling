export default function Pricing() {
  const rows = [
    { segment: "Small Hatch", wrap: "From $3,000", tint: "From $280" },
    { segment: "Sedan", wrap: "From $3,500", tint: "From $320" },
    { segment: "SUV / 4x4", wrap: "From $4,200", tint: "From $360" },
  ]
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="font-heading text-5xl text-white">Pricing</h1>
      <p className="mt-4 text-silver/90">Transparent guide pricing. Exact quotes vary by colour/finish, disassembly and paint condition.</p>
      <div className="mt-8 overflow-x-auto">
        <table className="min-w-[600px] w-full border border-graphite rounded-xl">
          <thead>
            <tr className="bg-onyx/70 text-left">
              <th className="p-3">Vehicle</th>
              <th className="p-3">Full Color Change Wrap</th>
              <th className="p-3">Window Tint</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.segment} className="border-t border-graphite">
                <td className="p-3">{r.segment}</td>
                <td className="p-3">{r.wrap}</td>
                <td className="p-3">{r.tint}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8">
        <a href="/contact" className="px-5 py-3 rounded-2xl bg-ember text-black font-semibold shadow-glow hover:scale-105 transition">Get exact quote</a>
      </div>
      <div className="mt-4 text-xs text-silver/60">No financing page, no downloadable PDFs—kept intentionally simple as requested.</div>
    </main>
  )
}
