import { Link, Navigate, useParams } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import Breadcrumb from '../../components/common/Breadcrumb';
import { getNewsArticleBySlug, getRelatedArticles } from '../../data/news';
import type { NewsArticle, NewsContentBlock } from '../../types/news';
import '../News/NewsPage.css';
import './NewsDetail.css';

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });
}

function NewsMeta({ article }: { article: NewsArticle }) {
  return (
    <div className="news-meta">
      <span>{formatDate(article.publishedAt)}</span>
      <span aria-hidden="true">•</span>
      <span>{article.readTimeMinutes} min read</span>
    </div>
  );
}

function renderBlock(block: NewsContentBlock) {
  switch (block.type) {
    case 'paragraph':
      return <p>{block.text}</p>;
    case 'heading':
      return <h3>{block.text}</h3>;
    case 'list':
      return (
        <ul className="news-detail__list">
          {block.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    case 'quote':
      return (
        <blockquote className="news-detail__quote">
          <p>{block.text}</p>
          {block.cite && <cite>{block.cite}</cite>}
        </blockquote>
      );
    case 'cta':
      return (
        <div className="news-detail__cta">
          <div>
            <p className="news-kicker">Member Benefit</p>
            <h4>{block.title}</h4>
            <p>{block.description}</p>
          </div>
          <a className="news-detail__cta-button" href={block.href}>
            {block.ctaText}
          </a>
        </div>
      );
    default:
      return null;
  }
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
        fill="currentColor"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.297-.495.099-.198.05-.371-.025-.52-.075-.148-.669-1.612-.916-2.203-.242-.58-.487-.5-.67-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.87.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347"
        fill="currentColor"
      />
      <path
        d="M12.051 22c-1.675 0-3.316-.433-4.754-1.254l-.341-.196-3.615.95.965-3.53-.222-.342a9.239 9.239 0 0 1-1.422-4.917C2.663 7.11 6.907 2.869 12.05 2.869c2.481 0 4.812.965 6.563 2.716a9.2 9.2 0 0 1 2.72 6.549c-.003 5.146-4.247 9.389-9.382 9.389m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.84 11.84 0 0 0 5.724 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.447-8.413"
        fill="currentColor"
      />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 16.5 3c-2.5 0-4.5 2.11-4.5 4.72 0 .37.04.73.12 1.07C7.69 8.64 4.07 6.86 1.64 4a4.72 4.72 0 0 0-.61 2.37A4.75 4.75 0 0 0 3.1 9.5a4.41 4.41 0 0 1-2-.56v.06c0 2.3 1.58 4.21 3.68 4.65a4.48 4.48 0 0 1-2 .08 4.52 4.52 0 0 0 4.21 3.16A9 9 0 0 1 0 19.54 12.7 12.7 0 0 0 6.92 21c8.3 0 12.85-7.26 12.85-13.57 0-.21 0-.42-.02-.63A9.18 9.18 0 0 0 23 3z"
        fill="currentColor"
      />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 0C5.375 0 0 5.375 0 12c0 4.99 3.057 9.26 7.377 11.064-.103-.938-.197-2.378.04-3.401.215-.925 1.389-5.881 1.389-5.881s-.355-.712-.355-1.763c0-1.651.957-2.886 2.148-2.886 1.013 0 1.502.76 1.502 1.669 0 1.017-.649 2.538-.985 3.948-.279 1.182.593 2.146 1.758 2.146 2.109 0 3.727-2.223 3.727-5.433 0-2.839-2.041-4.826-4.954-4.826-3.375 0-5.366 2.531-5.366 5.143 0 1.029.397 2.137.893 2.739.098.119.112.223.083.343-.091.375-.293 1.182-.333 1.346-.05.207-.165.252-.381.152-1.417-.657-2.3-2.732-2.3-4.398 0-3.58 2.6-6.868 7.494-6.868 3.933 0 6.991 2.804 6.991 6.55 0 3.907-2.463 7.059-5.884 7.059-1.149 0-2.228-.596-2.597-1.3l-.705 2.68c-.254.976-.939 2.2-1.4 2.944 1.054.326 2.171.503 3.331.503 6.625 0 12-5.375 12-12S18.625 0 12 0z"
        fill="currentColor"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M3 7l9 6 9-6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v14H0zM7.5 8h4.8v2h.07c.67-1.2 2.3-2.5 4.73-2.5 5.06 0 6 3.3 6 7.6V22H18V15.4c0-1.6-.03-3.7-2.3-3.7-2.3 0-2.6 1.8-2.6 3.6V22h-5z"
        fill="currentColor"
      />
    </svg>
  );
}

function TumblrIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14.948 24v-8.288h2.77l.414-3.226h-3.184v-2.06c0-.934.259-1.57 1.595-1.57h1.703V6.035c-.829-.088-1.662-.13-2.497-.126-2.475 0-4.169 1.507-4.169 4.274v2.38H8.5v3.226h3.08V24h3.368"
        fill="currentColor"
      />
    </svg>
  );
}

export default function NewsDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getNewsArticleBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const content = article.content ?? [{ type: 'paragraph', text: article.summary }];
  const related = getRelatedArticles(article, 3);
  const shareUrl =
    typeof window !== 'undefined'
      ? new URL(`/news/${article.slug}`, window.location.origin).toString()
      : `/news/${article.slug}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(article.title);
  const encodedSummary = encodeURIComponent(article.summary);

  const shareButtons = [
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: '#4267B2',
      icon: <FacebookIcon />,
    },
    {
      name: 'WhatsApp',
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: '#25D366',
      icon: <WhatsAppIcon />,
    },
    {
      name: 'Twitter',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: '#1DA1F2',
      icon: <TwitterIcon />,
    },
    {
      name: 'Pinterest',
      href: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`,
      color: '#E60023',
      icon: <PinterestIcon />,
    },
    {
      name: 'Email',
      href: `mailto:?subject=${encodedTitle}&body=${encodedSummary}%0A${encodedUrl}`,
      color: '#B71C1C',
      icon: <EmailIcon />,
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
      color: '#0A66C2',
      icon: <LinkedInIcon />,
    },
    {
      name: 'Tumblr',
      href: `https://www.tumblr.com/widgets/share/tool?canonicalUrl=${encodedUrl}&title=${encodedTitle}`,
      color: '#35465C',
      icon: <TumblrIcon />,
    },
  ];

  return (
    <div className="news-detail">
      <SEO
        title={article.title}
        description={article.summary}
        image={article.coverImage}
        url={`/news/${article.slug}`}
        type="article"
        article={{
          publishedTime: article.publishedAt,
          author: article.author?.name,
          section: article.category,
          tags: article.tags,
        }}
      />

      <article className="container news-detail__article">
        <Breadcrumb
          items={[
            // { label: 'Home', path: '/' },
            { label: 'News', path: '/news' },
            { label: article.title },
          ]}
        />
        <header className="news-detail__header">
          {article.badge && <span className="news-detail__badge">{article.badge}</span>}
          <h1>{article.title}</h1>
          <div className="news-detail__meta">
            <div className="news-detail__meta-primary">
              {article.author && (
                <div className="news-detail__author">
                  {article.author.avatar && (
                    <img src={article.author.avatar} alt={article.author.name} loading="lazy" />
                  )}
                  <div>
                    <p className="news-detail__author-name">{article.author.name}</p>
                    {article.author.role && (
                      <p className="news-detail__author-role">{article.author.role}</p>
                    )}
                  </div>
                </div>
              )}
              <NewsMeta article={article} />
            </div>
          </div>
        </header>

        <div className="news-detail__cover">
          <img src={article.coverImage} alt={article.title} />
          {article.summary && <figcaption>{article.summary}</figcaption>}
        </div>

        <div className="news-detail__content">
          {content.map((block, index) => (
            <div className="news-detail__block" key={`${block.type}-${index}`}>
              {renderBlock(block)}
            </div>
          ))}
        </div>

        <div className="news-detail__share" aria-label="Bagikan artikel">
          <p className="news-detail__share-title">Bagikan :</p>
          <div className="news-detail__share-actions">
            {shareButtons.map((button) => (
              <a
                key={button.name}
                className="news-detail__share-button"
                style={{ backgroundColor: button.color }}
                href={button.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Bagikan ke ${button.name}`}
              >
                {button.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="news-detail__tags">
          {article.tags.map((tag) => (
            <span key={tag} className="news-tag">
              #{tag}
            </span>
          ))}
        </div>

        {related.length > 0 && (
          <section className="related-news" aria-label="Berita terkait">
            <div className="related-news__header">
              <div>
                <p className="news-kicker">Artikel Terkait</p>
                {/* <h2>Berita lain yang relevan</h2> */}
              </div>
              <Link className="related-news__see-all" to="/news">
                Lihat semua berita →
              </Link>
            </div>
            <div className="related-news__grid">
              {related.map((item) => (
                <Link key={item.id} to={`/news/${item.slug}`} className="related-news__card">
                  <div className="related-news__image">
                    <img src={item.coverImage} alt={item.title} loading="lazy" />
                  </div>
                  <div className="related-news__body">
                    <p className="related-news__meta">
                      {item.category} · {formatDate(item.publishedAt)}
                    </p>
                    <h3 className="related-news__title">{item.title}</h3>
                    <p className="related-news__summary">{item.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

    </div>
  );
}
