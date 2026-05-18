// app/pages/[slug]/page.tsx
import { getSeoPageBySlug } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = await getSeoPageBySlug(slug)
  
  if (!page) {
    return { title: 'Page Not Found' }
  }

  return {
    title: getMetafieldValue(page.metadata?.meta_title) || page.title,
    description: getMetafieldValue(page.metadata?.meta_description),
  }
}

export default async function SeoPageDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = await getSeoPageBySlug(slug)

  if (!page) {
    notFound()
  }

  const heading = getMetafieldValue(page.metadata?.h1_heading) || page.title
  const intro = getMetafieldValue(page.metadata?.intro_content)
  const mainContent = getMetafieldValue(page.metadata?.main_content)
  const featuredImage = page.metadata?.featured_image
  const category = page.metadata?.category
  const location = page.metadata?.location
  const faqs = page.metadata?.faq_section

  return (
    <article className="bg-white">
      {featuredImage && (
        <div className="w-full h-64 md:h-96 overflow-hidden">
          <img
            src={`${featuredImage.imgix_url}?w=2400&h=800&fit=crop&auto=format,compress`}
            alt={heading}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-6">
            {category && (
              <Link
                href={`/categories/${category.slug}`}
                className="inline-block px-4 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-medium hover:bg-brand-200 transition"
              >
                {category.title}
              </Link>
            )}
            {location && (
              <Link
                href={`/locations/${location.slug}`}
                className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200 transition"
              >
                📍 {location.title}
              </Link>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{heading}</h1>

          {intro && (
            <div
              className="prose prose-lg max-w-none mb-8 text-gray-700"
              dangerouslySetInnerHTML={{ __html: intro }}
            />
          )}

          {mainContent && (
            <div
              className="prose prose-lg max-w-none mb-12 text-gray-700"
              dangerouslySetInnerHTML={{ __html: mainContent }}
            />
          )}

          {faqs && Array.isArray(faqs) && faqs.length > 0 && (
            <section className="mt-12 border-t pt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </article>
  )
}