import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { site } from '../config/site'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { HiBars3, HiXMark } from 'react-icons/hi2'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/color-library', label: 'Color Library' },
  { to: '/aftercare', label: 'Aftercare' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = prev }
    }
  }, [open])

  const handleLinkClick = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-onyx/70 border-b border-graphite">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group" onClick={handleLinkClick}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-ember to-phoenixGold shadow-glow" />
            <div className="font-heading tracking-wider text-xl text-white group-hover:text-ember transition">Phoenix Auto Styling</div>
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {nav.map(n => (
              <NavLink key={n.to} to={n.to} onClick={handleLinkClick} className={({ isActive }) =>
                'text-sm uppercase tracking-wide hover:text-ember transition ' + (isActive ? 'text-ember' : 'text-silver')}>
                {n.label}
              </NavLink>
            ))}
          </nav>
          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4">
              <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-ember"><FaInstagram /></a>
              <a href={site.facebook} target="_blank" rel="noreferrer" className="hover:text-ember"><FaFacebook /></a>
            </div>
            <a href="tel:+61434233588" className="hidden sm:inline-block ml-2 px-3 py-1 rounded-xl bg-ember text-black font-medium shadow-glow hover:scale-105 transition">
              Call
            </a>
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen(o => !o)}
              className="md:hidden p-2 rounded-lg text-silver hover:text-ember focus:outline-none focus:ring-2 focus:ring-ember/60 focus:ring-offset-2 focus:ring-offset-onyx transition"
            >
              {open ? <HiXMark className="h-6 w-6" /> : <HiBars3 className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out ${open ? 'max-h-[600px]' : 'max-h-0'}`}
      >
        <div className="px-4 pb-6 pt-2 border-t border-graphite bg-onyx/95 backdrop-blur-sm shadow-inner">
          <nav className="flex flex-col gap-2">
            {nav.map(n => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  'px-2 py-2 rounded-lg text-sm tracking-wide uppercase font-medium hover:bg-graphite/40 active:bg-graphite/60 transition ' +
                  (isActive ? 'text-ember' : 'text-silver')}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-5">
            <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-ember"><FaInstagram className="h-5 w-5" /></a>
            <a href={site.facebook} target="_blank" rel="noreferrer" className="hover:text-ember"><FaFacebook className="h-5 w-5" /></a>
            <a href="tel:+61434233588" onClick={handleLinkClick} className="ml-auto px-4 py-2 rounded-xl bg-ember text-black font-semibold shadow-glow hover:scale-105 transition">
              Call
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
