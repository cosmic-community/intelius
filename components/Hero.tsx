import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 text-white py-20 md:py-28">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Comprehensive SEO Content & Insights
          </h1>
          <p className="text-xl md:text-2xl text-brand-100 mb-8 leading-relaxed">
            Discover curated content organized by categories and locations to help you find what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/categories"
              className="px-8 py-3 bg-white text-brand-700 font-semibold rounded-lg hover:bg-gray-100 transition shadow-lg"
            >
              Browse Categories
            </Link>
            <Link
              href="/locations"
              className="px-8 py-3 bg-brand-500 text-white font-semibold rounded-lg hover:bg-brand-400 transition border-2 border-brand-400"
            >
              Explore Locations
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}