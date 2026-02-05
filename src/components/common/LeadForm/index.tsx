import { useState, type ChangeEvent, type FormEvent } from 'react';
import { createPortal } from 'react-dom';
import './LeadForm.css';
import ComingSoonImage from '../../../assets/hero-image/about-us.webp';

export type LeadFormData = {
  category: 'ppiu_pihk' | 'pt' | 'personal';
  fullName: string;
  whatsappNumber: string;
  email: string;
  companyName?: string;
};

type LeadFormProps = {
  className?: string;
  variant?: 'dark' | 'light';
  title?: string;
  subtitle?: string;
  buttonText?: string;
  placeholders?: Partial<Record<'fullName' | 'whatsappNumber' | 'email' | 'companyName', string>>;
  onSubmit?: (data: LeadFormData) => void;
};

export default function LeadForm({
  className = '',
  variant = 'dark',
  title,
  subtitle,
  buttonText = 'Submit',
  placeholders,
  onSubmit,
}: LeadFormProps) {
  const [category, setCategory] = useState<'ppiu_pihk' | 'pt' | 'personal'>('ppiu_pihk');
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    email: '',
    companyName: '',
  });
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleInputFocus = () => {
    setShowComingSoon(true);
  };

  const closeComingSoon = () => {
    setShowComingSoon(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload: LeadFormData = { category, ...formData };
    onSubmit?.(payload);
  };

  const handleChange = (field: keyof typeof formData) => (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const rootClass = ['lead-form', className].filter(Boolean).join(' ');
  const mergedPlaceholders = {
    fullName: 'Nama *',
    whatsappNumber: 'No WA *',
    email: 'Email Aktif *',
    companyName: 'Nama PT (Optional)',
    ...placeholders,
  };

  return (
    <div className={rootClass} data-variant={variant}>
      {(title || subtitle) && (
        <div className="lead-form__header">
          {title && <p className="lead-form__title">{title}</p>}
          {subtitle && <p className="lead-form__subtitle">{subtitle}</p>}
        </div>
      )}

      <div className="lead-form__toggle">
        {/* <span className="lead-form__toggle-label">Kategori</span> */}
        <div className="lead-form__toggle-options">
          <label>
            <input
              type="radio"
              name="category"
              value="ppiu_pihk"
              checked={category === 'ppiu_pihk'}
              onChange={() => setCategory('ppiu_pihk')}
            />
            PPIU / PIHK
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="pt"
              checked={category === 'pt'}
              onChange={() => setCategory('pt')}
            />
            PT
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="personal"
              checked={category === 'personal'}
              onChange={() => setCategory('personal')}
            />
            Personal
          </label>
        </div>
      </div>

      <form className="lead-form__fields" onSubmit={handleSubmit}>
        <div className="lead-form__group">
          <input
            type="text"
            placeholder={mergedPlaceholders.fullName}
            value={formData.fullName}
            onChange={handleChange('fullName')}
            onFocus={handleInputFocus}
            required
          />
        </div>
        <div className="lead-form__group">
          <input
            type="tel"
            placeholder={mergedPlaceholders.whatsappNumber}
            value={formData.whatsappNumber}
            onChange={handleChange('whatsappNumber')}
            onFocus={handleInputFocus}
            required
          />
        </div>
        <div className="lead-form__group">
          <input
            type="email"
            placeholder={mergedPlaceholders.email}
            value={formData.email}
            onChange={handleChange('email')}
            onFocus={handleInputFocus}
            required
          />
        </div>
        <div className="lead-form__group">
          <input
            type="text"
            placeholder={mergedPlaceholders.companyName}
            value={formData.companyName}
            onChange={handleChange('companyName')}
            onFocus={handleInputFocus}
          />
        </div>

        <button type="submit" className="lead-form__submit">
          {buttonText}
        </button>

        <div className="lead-form__post-submit">
          <span className="lead-form__already">Sudah mendaftar?</span>
          <button type="button" className="lead-form__login" onClick={() => setShowComingSoon(true)}>
            Login
          </button>
        </div>
      </form>

      {showComingSoon && createPortal(
        <div className="lead-form__coming-soon-overlay" onClick={closeComingSoon}>
          <div className="lead-form__coming-soon-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="lead-form__coming-soon-close"
              onClick={closeComingSoon}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="lead-form__coming-soon-content">
              <img
                src="/logo.png"
                alt="AMUHI Logo"
                className="lead-form__coming-soon-logo"
              />
              <img
                src={ComingSoonImage}
                alt="Coming Soon"
                className="lead-form__coming-soon-image"
              />
              <h3 className="lead-form__coming-soon-title">Coming Soon</h3>
              <p className="lead-form__coming-soon-text">
                Fitur registrasi akan segera hadir. Nantikan update selanjutnya!
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
