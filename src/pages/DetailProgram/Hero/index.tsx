import type { ProgramData } from '../../../types/program';
import { BookIcon, CheckIcon, ShieldIcon } from '../icons';
import './Hero.css';

type HeroProps = {
  program: ProgramData;
};

const DEFAULT_HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFXWAvdPlyJesEACbpsiVlG2wyEhoHddmVeyG4msGlmSRPeXTk5g3aAk0_4YAy6WcEnfyosNDX-KUlBrb7h9MGaLNsaYwbabQS7W_cdsR8uVJJRrJ_8FARgP-VA_l6NPEBiDiuKMywXS6NeNu0aY2yP7iwKIAXS4C7heubPPOuu3z91V_jcrZLzIpczWJPcxkjK-LZgpZ-YpHGglcshLW5TEwdanqYvbqzc8CexXlXQpzF04gNlfiEcxmrLLUDVFzCERaYUsRXCmk';

export default function Hero({ program }: HeroProps) {
  const heroImage = program.heroImage ?? DEFAULT_HERO_IMAGE;

  const metaItems = [
    { label: 'Official Certification', icon: <CheckIcon /> },
    { label: 'Trusted by Professionals', icon: <ShieldIcon /> },
  ];

  return (
    <section className="detail-hero" id="detail-hero">
      <div className="detail-hero__accent detail-hero__accent--right" aria-hidden="true" />
      <div className="detail-hero__accent detail-hero__accent--left" aria-hidden="true" />

      <div className="container detail-hero__grid">
        <div className="detail-hero__content">
          <div className="detail-hero__badge">
            <span className="detail-hero__badge-icon" aria-hidden="true">
              <BookIcon />
            </span>
            <span>Education & Certification</span>
          </div>

          <h1 className="detail-hero__title">
            {program.name}{' '}
            <span className="detail-hero__title-accent">{program.tagline}</span>
          </h1>

          <p className="detail-hero__lead">
            {program.longDescription}
          </p>

          <div className="detail-hero__actions">
            <a className="btn btn-primary detail-hero__primary" href="#register">
              Register Now
            </a>
          </div>

          <div className="detail-hero__meta">
            {metaItems.map((item) => (
              <div className="detail-hero__meta-item" key={item.label}>
                <span className="detail-hero__meta-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <div className="detail-hero__meta-label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="detail-hero__visual">
          <div className="detail-hero__image-wrapper">
            <img src={heroImage} alt={`${program.name} preview`} loading="lazy" />
            <div className="detail-hero__image-overlay">
              <p className="detail-hero__overlay-title">Next Cohort Starts: Oct 25th</p>
              <p className="detail-hero__overlay-subtitle">Limited seats available</p>
            </div>
          </div>
          <div className="detail-hero__shadow" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
