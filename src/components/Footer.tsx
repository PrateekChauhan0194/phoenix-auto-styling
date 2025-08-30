import { site } from '../config/site'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-graphite bg-onyx/60">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-heading text-2xl text-white">Phoenix Auto Styling</div>
          <p className="text-sm mt-2 text-silver/80">Melbourne’s finest Vinyl Wrap & Tinting Specialists.</p>
          <p className="text-sm mt-4">Phone: <a className="hover:text-ember" href={"tel:"+site.phone}>{site.phone}</a></p>
          <p className="text-sm">Email: <a className="hover:text-ember" href={"mailto:"+site.email}>{site.email}</a></p>
          <p className="text-sm">Address: {site.address}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Link to="/services" className="block hover:text-ember text-sm">Services</Link>
            <Link to="/gallery" className="block hover:text-ember text-sm">Gallery</Link>
            <Link to="/color-library" className="block hover:text-ember text-sm">Color Library</Link>
            <Link to="/pricing" className="block hover:text-ember text-sm">Pricing</Link>
          </div>
          <div className="space-y-2">
            <Link to="/reviews" className="block hover:text-ember text-sm">Reviews</Link>
            <Link to="/about" className="block hover:text-ember text-sm">About</Link>
            <Link to="/case-studies" className="block hover:text-ember text-sm">Case Studies</Link>
            <Link to="/contact" className="block hover:text-ember text-sm">Contact</Link>
          </div>
        </div>
        <div className="text-sm">
          <p>© {new Date().getFullYear()} Phoenix Auto Styling</p>
          <p className="mt-2">Made with ❤️ in Melbourne.</p>
        </div>
      </div>
    </footer>
  )
}
