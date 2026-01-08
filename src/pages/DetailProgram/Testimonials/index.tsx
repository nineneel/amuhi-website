import type { ProgramTestimonial } from '../../../types/program';
import TestimonialCarousel from '../../../components/common/TestimonialCarousel';
import './Testimonials.css';

type TestimonialsProps = {
  testimonials?: ProgramTestimonial[];
};

const defaultTestimonials: ProgramTestimonial[] = [
  {
    text: 'Asosiasi yang istimewa. Memberikan arah perubahan yang signifikan bagi haji dan umrah masa depan.',
    name: 'Mochamad Irfan Yusuf',
    role: 'Menteri Haji & Umrah RI',
  },
  {
    text: 'Bukan sekadar asosiasi, ini adalah sebuah movement masa depan Haji dan Umrah.',
    name: 'Dahnil Simanjuntak',
    role: 'Wakil Menteri Haji',
  },
  {
    text: 'Inilah asosiasi yang modern, profesional, transparan, dan terpercaya.',
    name: 'Siti Husniaty S. Sos. I',
    role: 'Ketua Fahmi Ummi DKI',
  },
];

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const items = testimonials?.length ? testimonials : defaultTestimonials;

  return (
    <section className="program-testimonials" id="testimonials">
      <div className="container">
        <h2>What Our Alumni Say</h2>
        <TestimonialCarousel testimonials={items} />
      </div>
    </section>
  );
}
