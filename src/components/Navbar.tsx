import { Link, NavLink } from 'react-router-dom'
import { site } from '../config/site'
import { FaInstagram, FaFacebook } from 'react-icons/fa'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/color-library', label: 'Color Library' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-onyx/70 border-b border-graphite">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-ember to-phoenixGold shadow-glow" />
            <div className="font-heading tracking-wider text-xl text-white group-hover:text-ember transition">Phoenix Auto Styling</div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map(n => (
              <NavLink key={n.to} to={n.to} className={({isActive}) => 
                'text-sm uppercase tracking-wide hover:text-ember transition ' + (isActive ? 'text-ember' : 'text-silver')}>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-ember"><FaInstagram/></a>
            <a href={site.facebook} target="_blank" rel="noreferrer" className="hover:text-ember"><FaFacebook/></a>
            <a href="tel:+61434233588" className="ml-2 px-3 py-1 rounded-xl bg-ember text-black font-medium shadow-glow hover:scale-105 transition">
              Call
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
