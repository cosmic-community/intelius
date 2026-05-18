import { getCategories } from '@/lib/cosmic'
import CategoryCard from '@/components/CategoryCard'

export const metadata = {
  title: 'Categories - Intelius',
  description: 'Browse all content categories',
}

export default async function CategoriesPage() {
  const categories = await getCategories()

  return (
    <div className="bg-white py-12">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">All Categories</h1>
          <p className="text-lg text-gray-600">Explore content by category</p>
        </div>

        {categories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No categories found</p>
        )}
      </div>
    </div>
  )
}