'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-green-900/90 backdrop-blur-md border-b-2 border-red-500/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Platey"
              width={150}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className={`px-4 py-2 rounded-lg transition-colors duration-200 ${
                pathname === '/'
                  ? 'text-white bg-red-600/30 border-2 border-red-400/50'
                  : 'text-red-100 hover:text-white hover:bg-red-500/20'
              }`}
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

