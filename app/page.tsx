import { getSeoPages, getCategories, getLocations } from '@/lib/cosmic'
import SeoPageCard from '@/components/SeoPageCard'
import CategoryCard from '@/components/CategoryCard'
import LocationCard from '@/components/LocationCard'
import Hero from '@/components/Hero'

export default async function HomePage() {
  const [seoPages, categories, locations] = await Promise.all([
    getSeoPages(),
    getCategories(),
    getLocations(),
  ])

  return (
    <div>
      <Hero />

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore our content organized by topic</p>
          </div>
          {categories.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No categories available</p>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Pages</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover our most comprehensive SEO content</p>
          </div>
          {seoPages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seoPages.slice(0, 6).map((page) => (
                <SeoPageCard key={page.id} page={page} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No pages available</p>
          )}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Locations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Find location-specific information</p>
          </div>
          {locations.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {locations.map((location) => (
                <LocationCard key={location.id} location={location} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No locations available</p>
          )}
        </div>
      </section>
    </div>
  )
}