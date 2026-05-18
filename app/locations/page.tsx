import { getLocations } from '@/lib/cosmic'
import LocationCard from '@/components/LocationCard'

export const metadata = {
  title: 'Locations - Intelius',
  description: 'Browse all locations',
}

export default async function LocationsPage() {
  const locations = await getLocations()

  return (
    <div className="bg-white py-12">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">All Locations</h1>
          <p className="text-lg text-gray-600">Explore location-specific content</p>
        </div>

        {locations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {locations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No locations found</p>
        )}
      </div>
    </div>
  )
}