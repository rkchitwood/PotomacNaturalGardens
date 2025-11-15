import type NavInterface from "../interfaces/NavInterface";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBase({ linkLabels }: NavInterface) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800/70 backdrop-blur-md z-50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo + Title */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/5 hover:text-white"
            >
              <img
                src="/PngLogoPlaceholder.png"
                alt="PNG Logo"
                className="h-8 w-auto"
              />
              <span className="ml-2">Potomac Natural Gardens</span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden sm:flex space-x-4">
            {linkLabels.map(({ link, label }) => (
              <Link
                key={link}
                to={link}
                className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white/5 hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!menuOpen ? (
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown links */}
      {menuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {linkLabels.map(({ link, label }) => (
              <Link
                key={link}
                to={link}
                onClick={() => setMenuOpen(false)} // Close menu on navigation
                className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white/10 hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}