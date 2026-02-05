import './NotFound.css';
import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import HERO_IMAGE from '../../assets/hero-image/about-us.webp';

export default function NotFoundPage() {
  return (
    <div className="notfound-page">
      <SEO
        title="404 - Halaman Tidak Ditemukan | AMUHI"
        description="Halaman yang Anda cari tidak ditemukan. Kembali ke beranda AMUHI."
        image={HERO_IMAGE}
        url="/404"
      />
      <section
        className="notfound-hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(5, 12, 32, 0.6) 0%, rgba(5, 12, 32, 0.8) 100%), url(${HERO_IMAGE})`,
        }}
      >
        <div className="container notfound-hero__grid">
          <div className="notfound-hero__content">
            <div className="notfound-hero__badge">
              <span>404</span>
            </div>

            <h1 className="notfound-hero__title">
              Halaman Tidak <span className="notfound-hero__title-accent">Ditemukan</span>
            </h1>

            <p className="notfound-hero__lead">
              Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
              Silakan kembali ke beranda atau jelajahi program kami.
            </p>

            <div className="notfound-hero__actions">
              <Link to="/" className="notfound-btn notfound-btn--primary">
                Kembali ke Beranda
              </Link>
              <Link to="/#programs" className="notfound-btn notfound-btn--secondary">
                Lihat Program
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
