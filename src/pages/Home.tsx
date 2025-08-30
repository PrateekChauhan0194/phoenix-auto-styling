import Hero from 'components/Hero'
import ServiceCards from 'components/ServiceCards'
import BeforeAfter from 'components/BeforeAfter'
import ColorSwatches from 'components/ColorSwatches'
import ReviewsCarousel from 'components/ReviewsCarousel'
import StatBand from 'components/StatBand'

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceCards />
      <StatBand />
      <BeforeAfter />
      <ColorSwatches />
      <ReviewsCarousel />
    </main>
  )
}
