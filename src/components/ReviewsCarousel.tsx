export default function ReviewsCarousel() {
  const reviews = [
    { name: "Alex", text: "Immaculate wrap and perfect tint. Zero bubbles, zero drama.", stars: 5 },
    { name: "Priya", text: "Great consult, helped me pick the right finish. Looks factory!", stars: 5 },
    { name: "Marcus", text: "Booked in, quick turnaround, incredible attention to detail.", stars: 5 },
  ]
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h3 className="font-heading text-3xl text-white mb-4">What clients say</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div key={i} className="rounded-2xl border border-graphite bg-onyx/50 p-5">
            <div className="font-semibold text-white">{r.name}</div>
            <div className="text-ember text-sm mt-1">{'★'.repeat(r.stars)}</div>
            <p className="text-sm mt-3 text-silver/90">{r.text}</p>
          </div>
        ))}
      </div>
      {/* <p className="text-xs text-silver/60 mt-3">Tip: Replace with a Google Reviews embed for live social proof.</p> */}
    </section>
  )
}
