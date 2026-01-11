import './About.css';

const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIY8XjSnZMQqVbQLwiKfn7lYz04OTG02KweSHz03jal_KqtpxaMyTM6fIK1M-i87CLX_VD6ErpFOZK5GoBk432WW1d4KBtLRmoaIpy8XdxLVvYYNRkCCiCh14XmTRhPlv7ptNXPrsRbb0uK4vAU0bmVn1n8EEZV88Hy9XxtUODlKd8h7DVsIGXW8tILyHkR3Z_aG8H9vJ3_FG2sIAAz7D6whQaaqsqUDn4bQlWXThAlk72EMTYEBFq_kiXggklL1wOzu2Gs6mvb7Y';

const missionPillars = [
  {
    title: 'Digital Infrastructure',
    description: 'Membangun digital infrastructure & ecosystem bagi pelaku industri.',
  },
  {
    title: 'Smart Learning',
    description: 'Mengedukasi & melatih anggota melalui smart learning & certification system.',
  },
  {
    title: 'Digital Networking',
    description: 'Mendorong kolaborasi antar travel melalui platform digital networking.',
  },
  {
    title: 'Protection & Advocacy',
    description: 'Menghadirkan perlindungan dan advokasi anggota yang cepat dan kredibel.',
  },
  {
    title: 'Global Partnership',
    description: 'Menciptakan ruang promosi dan kemitraan global yang saling menguntungkan.',
  },
];

const brandIdentity = [
  {
    title: 'Tagline',
    highlight: '"Building Better Future"',
    description: 'Our commitment to continuous improvement and long-term vision.',
    accent: 'primary',
  },
  {
    title: 'Spirit Line',
    highlight: '"Trusted & Verified"',
    description: 'The foundation of trust we build with every verification.',
    accent: 'cyan',
  },
  {
    title: 'Core Identity',
    highlight: '"Professional & Islamic"',
    description: 'Balancing modern professionalism with timeless Islamic values.',
    accent: 'indigo',
  },
  {
    title: 'Positioning',
    highlight: '"Ecosystem Enabler"',
    description: "We don't just participate; we enable the entire ecosystem to thrive.",
    accent: 'emerald',
  },
];

const ecosystemProducts = [
  {
    title: 'AMUHI Academy',
    description: 'Learning & certification hub ensuring industry players meet global standards.',
  },
  {
    title: 'AMUHI Check',
    description: 'Digital verification system for official travel agencies to prevent fraud.',
  },
  {
    title: 'AMUHI Protect',
    description: 'Comprehensive protection platform for members against scams and fraud.',
  },
  {
    title: 'AMUHI Care',
    description: 'Social impact & advocacy program supporting the welfare of pilgrims.',
  },
  {
    title: 'AMUHI Network',
    description: 'Digital business hub & collaboration space connecting global partners.',
  },
  {
    title: 'AMUHI Digital',
    description: 'Communication channel & media platform for industry news and updates.',
  },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero" id="about">
        <div className="about-hero__accent about-hero__accent--right" aria-hidden="true" />
        <div className="about-hero__accent about-hero__accent--left" aria-hidden="true" />

        <div className="container about-hero__grid">
          <div className="about-hero__content">
            <div className="about-hero__badge">
              <span>Who We Are</span>
            </div>

            <h1 className="about-hero__title">
              Building a <span className="about-hero__title-accent">Better Future</span> for Umrah &amp; Hajj
            </h1>

            <p className="about-hero__lead">
              Empowering the ecosystem through innovation, certification, and collaboration. We bridge trusted,
              modernized pilgrimage experiences for every stakeholder.
            </p>
          </div>

          <div className="about-hero__visual">
            <div className="about-hero__image-wrapper">
              <img src={HERO_IMAGE} alt="AMUHI team collaboration" loading="lazy" />
              <div className="about-hero__image-overlay">
                <p className="about-hero__overlay-title">Our Vision</p>
                <p className="about-hero__overlay-subtitle">
                  To be the global standard bearer for excellence and integrity in the Hajj &amp; Umrah ecosystem.
                </p>
              </div>
            </div>
            <div className="about-hero__shadow" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="container about-mission__grid">
          <div className="about-mission__visual">
            <div className="about-mission__visual-frame">
              <img src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=1600&q=80" alt="Strategy session" loading="lazy" />
            </div>
            <div className="about-mission__visual-card">
              <p className="about-mission__visual-title">Our Focus</p>
              <p>Modernizing pilgrim services with integrity, technology, and people-first solutions.</p>
            </div>
          </div>

          <div className="about-mission__content">
            <p className="about-kicker">Vision & Mission</p>
            <h2 className="about-mission__title">Menjadi mitra utama dan mendukung penuh program Kementerian Haji dan Umroh</h2>
            <p className="about-mission__description">
              Mewujudkan ekosistem Umrah dan Haji yang bebas dari scam, fraud, dan ketidaktransparanan, serta menciptakan pengalaman ibadah yang lebih aman, profesional, dan berdaya saing global. Juga menjadi mitra utama dan mendukung penuh program Kementerian Haji dan Umroh serta mewujudkan ekosistem Umrah dan Haji yang aman, transparan, dan terhubung secara global.
            </p>

            <div className="about-mission__pillars">
              {missionPillars.map((pillar) => (
                <div className="about-mission__pillar" key={pillar.title}>
                  <div>
                    <p className="about-mission__pillar-title">{pillar.title}</p>
                    <p className="about-mission__pillar-description">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-brand">
        <div className="container">
          <div className="about-section__header">
            <p className="about-kicker">Brand Identity</p>
            <h2>Values that define AMUHI</h2>
            <p className="about-section__description">
              The core values that guide our path forward and shape every experience we create.
            </p>
          </div>

          <div className="about-brand__grid">
            {brandIdentity.map((item) => (
              <div className={`about-card about-card--${item.accent}`} key={item.title}>
                <h3 className="about-card__title">{item.title}</h3>
                <p className="about-card__highlight">{item.highlight}</p>
                <p className="about-card__text">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-ecosystem">
        <div className="container">
          <div className="about-section__header about-section__header--light">
            <p className="about-kicker about-kicker--light">Our Network</p>
            <h2>Digital Brand Ecosystem</h2>
            <p className="about-section__description about-section__description--light">
              A comprehensive suite of interconnected platforms designed to serve every aspect of the pilgrimage journey.
            </p>
          </div>

          <div className="about-ecosystem__grid">
            {ecosystemProducts.map((product) => (
              <div className="about-ecosystem__card" key={product.title}>
                <div className="about-ecosystem__card-header">
                  <h3>{product.title}</h3>
                </div>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta__content">
          <div>
            <h2>Ready to join the ecosystem?</h2>
            <p>Be part of the future of Umrah and Hajj services. Connect with us today.</p>
          </div>
          <div className="about-cta__actions">
            <a className="btn btn-primary" href="/#programs">Explore Programs</a>
          </div>
        </div>
      </section>
    </div>
  );
}
