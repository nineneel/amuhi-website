import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  article?: {
    publishedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  noIndex?: boolean;
}

const SITE_NAME = 'AMUHI - Asosiasi Milenial Umroh Haji Indonesia';
const DEFAULT_DESCRIPTION = 'AMUHI - Asosiasi Milenial Umroh Haji Indonesia. Building Better Future untuk industri umroh dan haji Indonesia.';
const BASE_URL = 'https://amuhi.id';

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  image,
  url,
  type = 'website',
  article,
  noIndex = false,
}: SEOProps) {
  const pageTitle = title ? `${title} | AMUHI` : SITE_NAME;
  const pageUrl = url ? `${BASE_URL}${url}` : BASE_URL;
  const imageUrl = image?.startsWith('http') ? image : image ? `${BASE_URL}${image}` : undefined;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={description} />

      {/* Canonical URL */}
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={SITE_NAME} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {imageUrl && <meta property="og:image:alt" content={title || 'AMUHI'} />}

      {/* Twitter */}
      <meta name="twitter:card" content={imageUrl ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      {/* Article specific tags */}
      {type === 'article' && article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {type === 'article' && article?.author && (
        <meta property="article:author" content={article.author} />
      )}
      {type === 'article' && article?.section && (
        <meta property="article:section" content={article.section} />
      )}
      {type === 'article' && article?.tags?.map((tag) => (
        <meta property="article:tag" content={tag} key={tag} />
      ))}

      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex,nofollow" />}
    </Helmet>
  );
}
