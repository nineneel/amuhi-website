import './CallToAction.css';

interface CallToActionProps {
  title: string;
  description?: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  variant?: 'primary' | 'dark';
}

export default function CallToAction({
  title,
  description,
  primaryButton,
  secondaryButton,
  variant = 'primary',
}: CallToActionProps) {
  return (
    <section className={`cta-section cta-${variant}`}>
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">{title}</h2>
          {description && <p className="cta-description">{description}</p>}
          <div className="cta-buttons">
            <a href={primaryButton.href} className="btn btn-primary cta-btn-primary">
              {primaryButton.text}
            </a>
            {secondaryButton && (
              <a href={secondaryButton.href} className="btn btn-outline cta-btn-secondary">
                {secondaryButton.text}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
