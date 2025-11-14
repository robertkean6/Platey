import Link from 'next/link'

export default function Suppliers() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4 pt-24 pb-12">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            We're Looking for Suppliers
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Platey is seeking quality suppliers to help us deliver premium UK number plates
          </p>
        </div>

        {/* What We're Looking For */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-white/10 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-6">What We're Looking For</h2>
          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="text-2xl">🏭</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Number Plate Materials</h3>
                <p className="text-gray-300">
                  Suppliers of high-quality acrylic, aluminum, and other materials used in UK number plate manufacturing.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">🖨️</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Printing Equipment & Supplies</h3>
                <p className="text-gray-300">
                  Suppliers of printing equipment, inks, and related supplies for number plate production.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">📦</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Packaging & Logistics</h3>
                <p className="text-gray-300">
                  Suppliers of packaging materials and logistics partners for UK-wide delivery.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">✅</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">UK Compliance & Quality</h3>
                <p className="text-gray-300">
                  Suppliers who understand UK regulations and can provide compliant, premium-quality products.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Work With Us */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-white/10 mb-8">
          <h2 className="text-3xl font-semibold text-white mb-6">Why Work With Platey?</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-2xl">📈</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Growing Business</h3>
                <p className="text-gray-300">
                  Partner with a rapidly expanding UK number plate business with increasing demand for quality products.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">🤝</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Long-Term Partnerships</h3>
                <p className="text-gray-300">
                  We value stable, long-term supplier relationships built on fair treatment, clear communication, and mutual respect.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">💼</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Reliable Business</h3>
                <p className="text-gray-300">
                  Consistent orders and clear communication. We're building a sustainable, professional operation.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-2xl">🇬🇧</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">UK-Based Focus</h3>
                <p className="text-gray-300">
                  We prioritize UK suppliers and understand the importance of local partnerships and compliance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}

