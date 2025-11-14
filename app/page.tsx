import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4 pt-24 pb-12">
      <div className="max-w-4xl w-full text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            PLATEY
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Coming Soon
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-2xl mx-auto">
            Premium UK Number Plates
          </p>
          <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            We&apos;re crafting something special. Platey will be your trusted UK-based supplier 
            and printer of high-quality number plates. Stay tuned for our launch!
          </p>
        </div>

        {/* Number Plate Visual */}
        <div className="mb-16 flex justify-center">
          <div className="bg-white rounded-lg px-8 py-6 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-bold text-black tracking-wider">
              PLATEY
            </div>
            <div className="text-sm text-gray-600 mt-2">
              UK Number Plate Supplier
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <div className="text-3xl mb-3">🚗</div>
            <h3 className="text-xl font-semibold text-white mb-2">Premium Quality</h3>
            <p className="text-gray-300">
              High-grade materials and precision printing for durable, long-lasting number plates.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <div className="text-3xl mb-3">🇬🇧</div>
            <h3 className="text-xl font-semibold text-white mb-2">UK Based</h3>
            <p className="text-gray-300">
              Proudly UK-based supplier, ensuring fast delivery and compliance with UK regulations.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-2">Fast Service</h3>
            <p className="text-gray-300">
              Quick turnaround times without compromising on quality or attention to detail.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="mb-4">
            <Link
              href="/suppliers"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg font-medium"
            >
              We&apos;re Looking for Suppliers →
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Platey. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  )
}

