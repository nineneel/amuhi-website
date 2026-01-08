export type NewsContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string; cite?: string }
  | { type: 'cta'; title: string; description: string; ctaText: string; href: string };

export interface NewsAuthor {
  name: string;
  role?: string;
  avatar?: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  coverImage: string;
  publishedAt: string;
  readTimeMinutes: number;
  featured?: boolean;
  trending?: boolean;
  badge?: string;
  author?: NewsAuthor;
  content?: NewsContentBlock[];
  relatedSlugs?: string[];
}
