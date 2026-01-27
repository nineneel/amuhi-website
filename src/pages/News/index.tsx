import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { newsArticles } from '../../data/news';
import type { NewsArticle } from '../../types/news';
import './NewsPage.css';

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
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

function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <Link to={`/news/${article.slug}`} className="news-card">
      <div className="news-card__image">
        <img src={article.coverImage} alt={article.title} loading="lazy" />
        <span className="news-card__category">{article.category}</span>
      </div>
      <div className="news-card__body">
        <NewsMeta article={article} />
        <h3 className="news-card__title">{article.title}</h3>
        <p className="news-card__summary">{article.summary}</p>
        {/* <div className="news-card__footer">
          <span className="news-card__cta">
            Read More
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </span>
        </div> */}
      </div>
    </Link>
  );
}

export default function NewsPage() {
  const sortedArticles = useMemo(
    () =>
      [...newsArticles].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
      ),
    [],
  );

  const featuredArticle = useMemo(
    () => sortedArticles.find((article) => article.featured) ?? sortedArticles[0],
    [sortedArticles],
  );

  const filteredArticles = useMemo(
    () => sortedArticles,
    [sortedArticles],
  );

  if (!featuredArticle) {
    return (
      <div className="news-page">
        <section className="container news-empty news-empty--page">
          <p>No news available yet. Please check back soon.</p>
        </section>
      </div>
    );
  }

  return (
    <div className="news-page">
      <section className="news-hero">
        <div className="news-hero__accent news-hero__accent--right" aria-hidden="true" />
        <div className="news-hero__accent news-hero__accent--left" aria-hidden="true" />
        <div className="container news-hero__grid">
          <div className="news-hero__intro">
            <div className="news-hero__badge">
              <span className="news-hero__badge-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="16" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M7 8h6M7 12h10M7 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <span>News &amp; Insights</span>
            </div>
            <h1 className="news-hero__title">
              Latest Updates from the Hajj &amp; Umrah World
            </h1>
            <p className="news-hero__subtitle">
              Stay informed with the latest announcements, regulations, and success stories from the
              AMUHI community and the global industry.
            </p>
          </div>
        </div>
      </section>
      <div className="news-container">
        <section className="news-section">
          <div className="news-grid">
            {filteredArticles.length === 0 && (
              <div className="news-empty">
                <p>No news found for that search. Try another keyword or category.</p>
              </div>
            )}

            {filteredArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
          {/* <div className="container news-load-more">
            <button type="button">Load More Articles</button>
          </div> */}
        </section>
      </div>


      {/* <section className="news-subscribe">
        <div className="container news-subscribe__content">
          <div>
            <p className="news-kicker">Stay Updated</p>
            <h3>Never Miss an Update</h3>
            <p className="news-subscribe__text">
              Subscribe to our newsletter and get the latest industry news, regulatory updates, and
              exclusive AMUHI insights delivered directly to your inbox.
            </p>
          </div>
          <form className="news-subscribe__form">
            <input type="email" placeholder="Enter your email address" />
            <button type="button">Subscribe Now</button>
          </form>
          <p className="news-subscribe__note">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section> */}
    </div>
  );
}
