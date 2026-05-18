// app/categories/[slug]/page.tsx
import { getCategoryBySlug, getSeoPagesByCategory } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import SeoPageCard from '@/components/SeoPageCard'

export default async function CategoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    notFound()
  }

  const pages = await getSeoPagesByCategory(category.id)
  const description = getMetafieldValue(category.metadata?.description)
  const iconImage = category.metadata?.icon_image

  return (
    <div className="bg-white">
      <div className="bg-gradient-to-br from-brand-600 to-brand-800 text-white py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto">
            {iconImage && (
              <img
                src={`${iconImage.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                alt={category.title}
                className="w-24 h-24 rounded-full object-cover border-4 border-white/20"
              />
            )}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.title}</h1>
              {description && <p className="text-lg text-brand-100">{description}</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          {pages.length} {pages.length === 1 ? 'Page' : 'Pages'} in this Category
        </h2>

        {pages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((page) => (
              <SeoPageCard key={page.id} page={page} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-12">No pages found in this category</p>
        )}
      </div>
    </div>
  )
}