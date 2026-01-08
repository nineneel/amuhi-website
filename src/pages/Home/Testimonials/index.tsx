import TestimonialCarousel from '../../../components/common/TestimonialCarousel';
import './Testimonials.css';

const testimonials = [
    {
        text: 'Asosiasi yang istimewa Memberikan arah perubahan yang signicant haji dan umrah masa depan',
        name: 'Mochamad Irfan Yusuf',
        role: 'Menteri Haji & Umrah Republik Indonesia',
    },
    {
        text: 'Bukan sekedar asosiasi, ini adalah sebuah movement masa depan Haji dan Umrah',
        name: 'Dahnil Simanjuntak',
        role: 'Wakil Menteri Haji & Umrah Republik Indonesia',
    },
    {
        text: 'Inilah asosiasi yang modern, profesional, transparent dan terpercaya',
        name: 'Siti Husniaty S. Sos. I',
        role: 'Ketua Fahmi Ummi DKI',
    },
    {
        text: 'Penggerak perubahan yang sangat dinantikan oleh industri Haji & Umrah di Indonesia',
        name: 'Ahmad Faisal',
        role: 'Sekjen Asosiasi Umrah',
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="testimonials section">
            <div className="container">
                <h2 className="section-title">WHAT OUR NETWORK & PARTNER SAY</h2>
                <TestimonialCarousel testimonials={testimonials} />
            </div>
        </section>
    );
}
