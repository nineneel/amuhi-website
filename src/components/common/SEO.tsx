import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

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
  imageWidth?: number;
  imageHeight?: number;
  keywords?: string;
}

const SITE_NAME = 'AMUHI - Asosiasi Milenial Umroh Haji Indonesia';
const DEFAULT_DESCRIPTION = 'AMUHI - Asosiasi Milenial Umroh Haji Indonesia. Building Better Future untuk industri umroh dan haji Indonesia.';
const BASE_URL = 'https://amuhi.id';
const DEFAULT_OG_IMAGE = '/amuhi-meeting.png';

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  image,
  url,
  type = 'website',
  article,
  noIndex = false,
  imageWidth,
  imageHeight,
  keywords,
}: SEOProps) {
  const location = useLocation();
  const pathname = (url ?? location.pathname ?? '/').startsWith('/')
    ? (url ?? location.pathname ?? '/')
    : `/${url ?? location.pathname ?? ''}`;

  const runtimeOrigin =
    typeof window !== 'undefined' && window.location?.origin
      ? window.location.origin
      : null;

  // Normalize domain: remove www. subdomain for canonical URL
  const normalizeOrigin = (origin: string | null): string => {
    if (!origin || origin.includes('localhost')) return BASE_URL;
    // Replace www. with just the protocol for canonical URL
    return origin.replace(/^https?:\/\/www\./, 'https://');
  };

  const origin = normalizeOrigin(runtimeOrigin);

  const pageTitle = title ? `${title} | AMUHI` : SITE_NAME;
  const pageUrl = `${origin}${pathname}`;
  const imageUrl = image?.startsWith('http')
    ? image
    : image
      ? `${origin}${image}`
      : `${origin}${DEFAULT_OG_IMAGE}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Language and Locale */}
      <html lang="id" />
      <meta httpEquiv="content-language" content="id-ID" />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:locale:alternate" content="en_US" />

      {/* Canonical URL */}
      <link rel="canonical" href={pageUrl} />

      {/* Alternate Language URLs for International SEO */}
      <link rel="alternate" hrefLang="id" href={pageUrl} />
      <link rel="alternate" hrefLang="en" href={pageUrl} />
      <link rel="alternate" hrefLang="x-default" href={pageUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={SITE_NAME} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {imageUrl && <meta property="og:image:alt" content={title || 'AMUHI'} />}
      {imageUrl && imageWidth && <meta property="og:image:width" content={String(imageWidth)} />}
      {imageUrl && imageHeight && <meta property="og:image:height" content={String(imageHeight)} />}

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
