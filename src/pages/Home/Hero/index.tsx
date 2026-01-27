import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import LeadForm, { type LeadFormData } from '../../../components/common/LeadForm';
import hero1 from '../../../assets/home-hero/hero-1.jpg';
import hero2 from '../../../assets/home-hero/hero-2.webp';
import hero3 from '../../../assets/home-hero/hero-3.webp';
import './Hero.css';

const heroSlides = [
    {
        image: hero1,
        title: ['Building', 'Better Future'],
        description: '“We’re not just an association — we’re a movement shaping the future of Umrah & Hajj.”',
    },
    {
        image: hero2,
        title: ['Modern &', 'Professional'],
        description: 'Asosiasi yang mengutamakan teknologi dan inovasi untuk kemajuan industri Haji & Umrah Indonesia.',
    },
    {
        image: hero3,
        title: ['Trusted', 'Network'],
        description: 'Jaringan kolaborasi terpercaya yang menghubungkan travel, mitra, dan jamaah di seluruh Indonesia.',
    },
];

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
            {/* Hero Slider Background */}
            <div className="hero-slider">
                <Swiper
                    modules={[Pagination, Autoplay, EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    className="hero-swiper"
                >
                    {heroSlides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="hero-slide">
                                <div className="hero-slide-bg">
                                    <img src={slide.image} alt={slide.title.join(' ')} />
                                </div>
                                <div className="hero-slide-content">
                                    <h1 className="hero-title">
                                        {slide.title.map((line, i) => (
                                            <span key={i}>{line}</span>
                                        ))}
                                    </h1>
                                    <p className="hero-description">{slide.description}</p>
                                    <button
                                        className="hero-cta-button"
                                        onClick={() => setIsModalOpen(true)}
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="hero-logo">
                <img src="/logo.png" alt="AMUHI Logo" />
            </div>

            <div className="hero-container">
                {/* Stats bar with marquee */}
                <div className="hero-stats">
                    <div className="stats-track">
                        {/* Render stats multiple times for seamless loop */}
                        {[...stats, ...stats, ...stats, ...stats].map((stat, index) => (
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
