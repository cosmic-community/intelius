import Link from 'next/link'
import { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function CategoryCard({ category }: { category: Category }) {
  const description = getMetafieldValue(category.metadata?.description)
  const iconImage = category.metadata?.icon_image

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group block bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-brand-300"
    >
      <div className="flex items-start gap-4">
        {iconImage ? (
          <img
            src={`${iconImage.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={category.title}
            className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
          />
        ) : (
          <div className="w-16 h-16 rounded-lg bg-brand-100 flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">🏷️</span>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-brand-600 transition">
            {category.title}
          </h3>
          {description && (
            <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
          )}
        </div>
      </div>
    </Link>
  )
}