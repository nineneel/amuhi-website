import type { ProgramTestimonial } from '../../../types/program';
import TestimonialCarousel from '../../../components/common/TestimonialCarousel';
import './Testimonials.css';

type TestimonialsProps = {
  testimonials?: ProgramTestimonial[];
};

const defaultTestimonials: ProgramTestimonial[] = [
  {
    text: 'Membangun Harapan, Menebar Keberkahan: Kesan Mendalam dari Pertemuan Anggota AMUHI',
    name: 'Neng Nurul Fajriyani',
    role: 'Perwakilan El Fajrie Cahaya Berkah / Anggota AMUHI',
    videoUrl: 'https://www.youtube.com/embed/VOrP8Mo6-7U',
  },
  {
    text: 'Bersama AMUHI, Makin Jaya',
    name: 'Novi Ani Zaini',
    role: 'Perwakilan Ajib Tours / Anggota AMUHI',
    videoUrl: 'https://www.youtube.com/embed/9RwFfmJ_uN4',
  },
  {
    text: 'Berhimpun dalam Kebaikan: Mengenal AMUHI sebagai Pusat Sinergi Pengusaha Travel Muda',
    name: 'Ahmad Bugis',
    role: 'Founder Ziarah Tour',
    videoUrl: 'https://www.youtube.com/embed/dqJDY__NzsY',
  },
  {
    text: 'Makin Jaya, Makin Berdaya',
    name: 'Dwita Syahranu',
    role: 'Founder Widarin Vacation',
    videoUrl: 'https://www.youtube.com/embed/DzqcjK-vPpU',
  },
  {
    text: 'AMUHI: Wadah Kolaborasi bagi Milenial Visioner untuk Memajukan Industri Umrah & Haji Indonesia',
    name: 'Ustadz Kasif Heer',
    role: 'Founder Safaroh Travel',
    videoUrl: 'https://www.youtube.com/embed/-Lat33SxCTs',
  },
  {
    text: 'Bukan Sekadar Asosiasi, AMUHI Hadir untuk Mengubah Industri',
    name: 'Ari Chandra Kurniawan',
    role: 'Founder MANSA (Majelis Negarawan & Saudagar)',
    videoUrl: 'https://www.youtube.com/embed/6V-kKDIi9K4',
  },
  {
    text: 'Dampak Nyata: Bagaimana AMUHI Mempersiapkan Masa Depan Haji & Umrah Indonesia',
    name: 'Habib Haquib Al Attas',
    role: 'CMO Rania Almatumayizah Travel',
    videoUrl: 'https://www.youtube.com/embed/X1YE1itm3XI',
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
