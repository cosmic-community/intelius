export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name?: string;
    description?: string;
    icon_image?: CosmicImage;
  };
}

export interface Location extends CosmicObject {
  type: 'locations';
  metadata: {
    name?: string;
    state_code?: string;
    type?: string;
    population?: number;
    description?: string;
    hero_image?: CosmicImage;
  };
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SeoPage extends CosmicObject {
  type: 'seo-pages';
  metadata: {
    meta_title?: string;
    meta_description?: string;
    h1_heading?: string;
    intro_content?: string;
    main_content?: string;
    target_keywords?: string;
    faq_section?: FAQ[];
    featured_image?: CosmicImage;
    category?: Category;
    location?: Location;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}