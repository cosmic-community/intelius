import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🔍</span>
            <span className="text-xl font-bold text-gray-900">Intelius</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-brand-600 font-medium transition">
              Home
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-brand-600 font-medium transition">
              Categories
            </Link>
            <Link href="/locations" className="text-gray-700 hover:text-brand-600 font-medium transition">
              Locations
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}