import ReviewsCarousel from 'components/ReviewsCarousel'

export default function Reviews() {
  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="font-heading text-5xl text-white">Reviews</h1>
        <p className="mt-4 text-silver/90">Embed your Google Reviews here for live social proof.</p>
      </div>
      <ReviewsCarousel />
    </main>
  )
}
