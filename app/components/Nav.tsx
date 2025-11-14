'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white tracking-tight">
              PLATEY
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                pathname === '/'
                  ? 'text-white bg-blue-600/20 border border-blue-500/30'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </Link>
            <Link
              href="/suppliers"
              className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                pathname === '/suppliers'
                  ? 'text-white bg-blue-600/20 border border-blue-500/30'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Suppliers
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

