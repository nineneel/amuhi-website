import { useState } from 'react';
import LeadForm, { type LeadFormData } from '../../../components/common/LeadForm';
import './Hero.css';

const stats = [
    { line1: 'Verified by', line2: 'AMUHI Badge' },
    { line1: 'Access to', line2: 'AMUHI Academy' },
    { line1: 'Network &', line2: 'Collaboration Access' },
    { line1: 'Visibility', line2: 'Boost' },
    { line1: 'Protection &', line2: 'Support System' },
];

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (payload: LeadFormData) => {
        console.log('Form submitted:', payload);
        setIsModalOpen(false);
    };

    return (
        <section id="home" className="hero">
            <div className="hero-bg">
                <img src="/hero-bg.jpg" alt="AMUHI Team" />
            </div>

            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span>Building</span>
                        <span>Better Future</span>
                    </h1>
                    <button
                        className="hero-cta-button"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Get Started
                    </button>
                </div>

                {/* Stats bar */}
                <div className="hero-stats">
                    <div className="stats-track">
                        {/* Render stats twice for seamless loop */}
                        {[...stats, ...stats].map((stat, index) => (
                            <div key={index} className="stat-text">
                                <div className="stat-line-1">{stat.line1}</div>
                                <div className="stat-line-2">{stat.line2}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hero-form-wrapper">
                    <LeadForm
                        title="Let us know better by filling out this form"
                        buttonText="Submit"
                        onSubmit={handleSubmit}
                    />
                </div>
            </div>

            {/* Modal for mobile */}
            {isModalOpen && (
                <div className="hero-modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="hero-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="hero-modal-close"
                            onClick={() => setIsModalOpen(false)}
                        >
                            ×
                        </button>
                        <LeadForm
                            title="Let us know better by filling out this form"
                            buttonText="Submit"
                            onSubmit={handleSubmit}
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
