import { Routes, Route } from 'react-router-dom'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import Home from 'pages/Home'
import About from 'pages/About'
import Services from 'pages/Services'
import Gallery from 'pages/Gallery'
import Pricing from 'pages/Pricing'
import ColorLibrary from 'pages/ColorLibrary'
import Aftercare from 'pages/Aftercare'
import Reviews from 'pages/Reviews'
import Contact from 'pages/Contact'
import CaseStudies from 'pages/CaseStudies'
import CTASticky from 'components/CTASticky'

export default function App() {
  return (
    <div className="min-h-screen bg-carbon bg-carbon-texture text-silver">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/color-library" element={<ColorLibrary />} />
        <Route path="/aftercare" element={<Aftercare />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <CTASticky />
    </div>
  )
}
