import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4 py-12">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
          Page Not Found
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  )
}

