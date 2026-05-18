import Link from 'next/link'
import { SeoPage } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function SeoPageCard({ page }: { page: SeoPage }) {
  const heading = getMetafieldValue(page.metadata?.h1_heading) || page.title
  const metaDescription = getMetafieldValue(page.metadata?.meta_description)
  const featuredImage = page.metadata?.featured_image
  const category = page.metadata?.category

  return (
    <Link
      href={`/pages/${page.slug}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-brand-300"
    >
      {featuredImage && (
        <div className="aspect-video w-full overflow-hidden bg-gray-100">
          <img
            src={`${featuredImage.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={heading}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>
      )}
      <div className="p-6">
        {category && (
          <span className="inline-block px-3 py-1 bg-brand-50 text-brand-700 rounded-full text-xs font-medium mb-3">
            {category.title}
          </span>
        )}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition line-clamp-2">
          {heading}
        </h3>
        {metaDescription && (
          <p className="text-gray-600 text-sm line-clamp-3">{metaDescription}</p>
        )}
      </div>
    </Link>
  )
}