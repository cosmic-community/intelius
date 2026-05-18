// app/locations/[slug]/page.tsx
import { getLocationBySlug, getSeoPagesByLocation } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import SeoPageCard from '@/components/SeoPageCard'

export default async function LocationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const location = await getLocationBySlug(slug)

  if (!location) {
    notFound()
  }

  const pages = await getSeoPagesByLocation(location.id)
  const description = getMetafieldValue(location.metadata?.description)
  const stateCode = getMetafieldValue(location.metadata?.state_code)
  const locationType = getMetafieldValue(location.metadata?.type)
  const population = location.metadata?.population
  const heroImage = location.metadata?.hero_image

  return (
    <div className="bg-white">
      <div className="relative h-80 md:h-96 overflow-hidden">
        {heroImage ? (
          <img
            src={`${heroImage.imgix_url}?w=2400&h=800&fit=crop&auto=format,compress`}
            alt={location.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-green-600 to-blue-700" />
        )}
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container-custom">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{location.title}</h1>
            {stateCode && <p className="text-2xl text-white/90">{stateCode}</p>}
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {locationType && (
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Type</p>
              <p className="text-xl font-semibold text-gray-900">{locationType}</p>
            </div>
          )}
          {population && (
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Population</p>
              <p className="text-xl font-semibold text-gray-900">{Number(population).toLocaleString()}</p>
            </div>
          )}
          {stateCode && (
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">State</p>
              <p className="text-xl font-semibold text-gray-900">{stateCode}</p>
            </div>
          )}
        </div>

        {description && (
          <div className="max-w-4xl mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About {location.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
          </div>
        )}

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {pages.length} {pages.length === 1 ? 'Page' : 'Pages'} for this Location
          </h2>

          {pages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pages.map((page) => (
                <SeoPageCard key={page.id} page={page} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 py-8">No pages found for this location</p>
          )}
        </div>
      </div>
    </div>
  )
}