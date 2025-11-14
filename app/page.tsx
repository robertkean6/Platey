import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-red-900 to-green-800 px-4 pt-24 pb-12 relative overflow-hidden">
      {/* Snowflakes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-white/30 text-2xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>❄️</div>
        <div className="absolute top-20 right-20 text-white/30 text-xl animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>❄️</div>
        <div className="absolute top-40 left-1/4 text-white/30 text-3xl animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>❄️</div>
        <div className="absolute top-60 right-1/3 text-white/30 text-xl animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}>❄️</div>
        <div className="absolute bottom-40 left-1/3 text-white/30 text-2xl animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>❄️</div>
        <div className="absolute bottom-20 right-1/4 text-white/30 text-xl animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '4s' }}>❄️</div>
      </div>
      <div className="max-w-4xl w-full text-center relative z-10">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">🎄</span>
            <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight">
              PLATEY
            </h1>
            <span className="text-4xl">🎄</span>
          </div>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Coming Soon <span className="text-2xl">🎁</span>
          </h2>
          <p className="text-xl md:text-2xl text-red-100 mb-4 max-w-2xl mx-auto">
            Premium UK Number Plates
          </p>
          <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            We&apos;re crafting something special. Platey will be your trusted UK-based supplier 
            and printer of high-quality number plates. Stay tuned for our launch!
          </p>
        </div>

        {/* Features Preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border-2 border-red-500/30 hover:border-red-400/50 transition-colors">
            <div className="text-3xl mb-3">🚗</div>
            <h3 className="text-xl font-semibold text-white mb-2">Premium Quality</h3>
            <p className="text-gray-200">
              High-grade materials and precision printing for durable, long-lasting number plates.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border-2 border-green-500/30 hover:border-green-400/50 transition-colors">
            <div className="text-3xl mb-3">🇬🇧</div>
            <h3 className="text-xl font-semibold text-white mb-2">UK Based</h3>
            <p className="text-gray-200">
              Proudly UK-based supplier, ensuring fast delivery and compliance with UK regulations.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border-2 border-red-500/30 hover:border-red-400/50 transition-colors">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-2">Fast Service</h3>
            <p className="text-gray-200">
              Quick turnaround times without compromising on quality or attention to detail.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-red-300/30 flex flex-col items-center gap-4">
          <Image
            src="/logo-footer.svg"
            alt="Platey"
            width={200}
            height={43}
            className="h-8 w-auto"
          />
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Platey. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  )
}

