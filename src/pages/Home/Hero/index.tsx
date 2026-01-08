import LeadForm, { type LeadFormData } from '../../../components/common/LeadForm';
import './Hero.css';

const stats = [
    <>Verified by <strong>AMUHI Badge</strong></>,
    <>Access to <strong>AMUHI Academy</strong></>,
    <><strong>Network & Collaboration</strong> Access</>,
    <><strong>Visibility Boost</strong></>,
    <><strong>Protection & Support System</strong></>,
];

export default function Hero() {
    const handleSubmit = (payload: LeadFormData) => {
        console.log('Form submitted:', payload);
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
                </div>

                <div className="hero-form-wrapper">
                    <LeadForm
                        title="Let us know better by filling out this form"
                        buttonText="Submit"
                        onSubmit={handleSubmit}
                    />
                </div>
            </div>

            {/* Stats bar at bottom */}
            <div className="hero-stats">
                {stats.map((text, index) => (
                    <span key={index} className="stat-text">{text}</span>
                ))}
            </div>
        </section>
    );
}
