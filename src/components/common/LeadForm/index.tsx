import { useState, type ChangeEvent, type FormEvent } from 'react';
import './LeadForm.css';

export type LeadFormData = {
  role: 'owner' | 'management';
  fullName: string;
  phoneNumber: string;
  travelName: string;
  idNumber: string;
};

type LeadFormProps = {
  className?: string;
  variant?: 'dark' | 'light';
  title?: string;
  subtitle?: string;
  buttonText?: string;
  placeholders?: Partial<Record<'fullName' | 'phoneNumber' | 'travelName' | 'idNumber', string>>;
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
  const [role, setRole] = useState<'owner' | 'management'>('owner');
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    travelName: '',
    idNumber: '',
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload: LeadFormData = { role, ...formData };
    onSubmit?.(payload);
  };

  const handleChange = (field: keyof typeof formData) => (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const rootClass = ['lead-form', className].filter(Boolean).join(' ');
  const mergedPlaceholders = {
    fullName: 'Full Name *',
    phoneNumber: 'Phone Number *',
    travelName: 'Travel Name *',
    idNumber: 'ID Number *',
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
        <label>
          <input
            type="radio"
            name="role"
            value="owner"
            checked={role === 'owner'}
            onChange={() => setRole('owner')}
          />
          Owner
        </label>
        <label>
          <input
            type="radio"
            name="role"
            value="management"
            checked={role === 'management'}
            onChange={() => setRole('management')}
          />
          Management
        </label>
      </div>

      <form className="lead-form__fields" onSubmit={handleSubmit}>
        <div className="lead-form__group">
          <input
            type="text"
            placeholder={mergedPlaceholders.fullName}
            value={formData.fullName}
            onChange={handleChange('fullName')}
            required
          />
        </div>
        <div className="lead-form__group">
          <input
            type="tel"
            placeholder={mergedPlaceholders.phoneNumber}
            value={formData.phoneNumber}
            onChange={handleChange('phoneNumber')}
            required
          />
        </div>
        <div className="lead-form__group">
          <input
            type="text"
            placeholder={mergedPlaceholders.travelName}
            value={formData.travelName}
            onChange={handleChange('travelName')}
            required
          />
        </div>
        <div className="lead-form__group">
          <input
            type="text"
            placeholder={mergedPlaceholders.idNumber}
            value={formData.idNumber}
            onChange={handleChange('idNumber')}
            required
          />
        </div>

        <button type="submit" className="lead-form__submit">
          {buttonText}
        </button>
      </form>
    </div>
  );
}
