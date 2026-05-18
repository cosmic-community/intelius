import { createBucketClient } from '@cosmicjs/sdk'
import { SeoPage, Category, Location, hasStatus } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'number' || typeof field === 'boolean') return String(field);
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value);
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key);
  }
  return '';
}

export async function getSeoPages(): Promise<SeoPage[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'seo-pages' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as SeoPage[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch SEO pages')
  }
}

export async function getSeoPageBySlug(slug: string): Promise<SeoPage | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'seo-pages', slug })
      .depth(1)
    return response.object as SeoPage
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch SEO page')
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'categories' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Category[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch categories')
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'categories', slug })
      .depth(1)
    return response.object as Category
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch category')
  }
}

export async function getLocations(): Promise<Location[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'locations' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Location[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch locations')
  }
}

export async function getLocationBySlug(slug: string): Promise<Location | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'locations', slug })
      .depth(1)
    return response.object as Location
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return null
    throw new Error('Failed to fetch location')
  }
}

export async function getSeoPagesByCategory(categoryId: string): Promise<SeoPage[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'seo-pages', 'metadata.category': categoryId })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as SeoPage[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch SEO pages by category')
  }
}

export async function getSeoPagesByLocation(locationId: string): Promise<SeoPage[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'seo-pages', 'metadata.location': locationId })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as SeoPage[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) return []
    throw new Error('Failed to fetch SEO pages by location')
  }
}