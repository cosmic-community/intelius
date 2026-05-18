import Link from 'next/link'
import { Location } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function LocationCard({ location }: { location: Location }) {
  const stateCode = getMetafieldValue(location.metadata?.state_code)
  const locationType = getMetafieldValue(location.metadata?.type)
  const heroImage = location.metadata?.hero_image

  return (
    <Link
      href={`/locations/${location.slug}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-green-400 to-blue-500 relative">
        {heroImage ? (
          <img
            src={`${heroImage.imgix_url}?w=600&h=450&fit=crop&auto=format,compress`}
            alt={location.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl">📍</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition">
            {location.title}
          </h3>
          {stateCode && (
            <span className="text-sm font-semibold text-gray-500">{stateCode}</span>
          )}
        </div>
        {locationType && (
          <p className="text-sm text-gray-600">{locationType}</p>
        )}
      </div>
    </Link>
  )
}