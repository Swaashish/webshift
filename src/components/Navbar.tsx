import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site } from '../config/site'
import { MagneticButton } from './MagneticButton'
import logo from "../assets/webshift.png"

const links = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-ink-line/80 bg-graphite/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 md:px-10 lg:px-16">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight text-foam">
         <img
            src={logo}
            alt={site.wordmark}
            className="h-8 w-auto md:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative text-sm text-mist transition-colors hover:text-foam ${
                  isActive ? 'text-foam' : ''
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-lime transition-all ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MagneticButton to="/contact" className="inline-flex w-fit bg-brand-gradient px-5 py-3 text-sm font-medium text-graphite">Start a project</MagneticButton>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center text-foam lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-ink-line bg-graphite lg:hidden"
        >
          <nav className="flex flex-col px-6 py-6" aria-label="Mobile">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className="border-b border-ink-line py-4 font-display text-3xl text-foam"
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-6 inline-flex w-fit bg-lime px-5 py-3 text-sm font-medium text-graphite"
            >
              Start a project
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
