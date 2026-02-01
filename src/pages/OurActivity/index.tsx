import './OurActivity.css';
import SEO from '../../components/common/SEO';

const HERO_IMAGE = '/og-images/activity-hero.webp';

type Activity = {
  date: string;
  month: string;
  year: string;
  title: string;
  description?: string;
  status: 'completed' | 'upcoming';
};

const activities: Activity[] = [
  {
    date: '08',
    month: 'Feb',
    year: '2025',
    title: 'Penipuan Tiket',
    description: 'Webinar edukasi gratis membahas secara mendalam tentang berbagai modus operandi penipuan tiket umrah dan haji, bagaimana mengidentifikasi travel agent palsu, serta langkah-langkah preventif untuk melindungi diri dan keluarga dari praktik penipuan.',
    status: 'completed',
  },
  {
    date: '08',
    month: 'Mar',
    year: '2025',
    title: 'Mukernas 1 Topics',
    description: 'Musyawarah Kerja Nasional perdana yang membahas roadmap strategis AMUHI, evaluasi program tahun berjalan, serta merumuskan kebijakan dan inisiatif baru untuk meningkatkan kualitas layanan industri umrah dan haji Indonesia.',
    status: 'completed',
  },
  {
    date: '08',
    month: 'Apr',
    year: '2025',
    title: 'Haji 1448H',
    description: 'Sesi persiapan komprehensif untuk jamaah haji tahun 1448H mencakup panduan teknis keberangkatan, tips kesehatan dan kesiapan fisik, manajemen keuangan selama di tanah suci, serta pembahasan regulasi terbaru dari Kementerian Agama.',
    status: 'completed',
  },
  {
    date: '08',
    month: 'May',
    year: '2025',
    title: 'Tantangan New Season',
    description: 'Dialog interaktif membahas dinamika dan tantangan terkini dalam industri umrah dan haji, peluang pengembangan bisnis di era digital, strategi menghadapi kompetisi global, serta inovasi layanan yang dapat meningkatkan kepuasan jamaah.',
    status: 'upcoming',
  },
  {
    date: '08',
    month: 'Jun',
    year: '2025',
    title: 'Umrah Uzbekistan',
    description: 'Program paket umrah plus wisata religi ke Uzbekistan, menelusuri jejak peradaban Islam di Asia Tengah, mengunjungi situs-situs bersejarah seperti Samarkand dan Bukhara, serta mengenal khazanah budaya dan arsitektur Islam yang megah.',
    status: 'upcoming',
  },
  {
    date: '08',
    month: 'Jul',
    year: '2025',
    title: 'Coming Soon',
    description: 'Program dan aktivitas bulan ini sedang dalam tahap perencanaan. Informasi lengkap akan segera diumumkan melalui kanal resmi AMUHI.',
    status: 'upcoming',
  },
  {
    date: '08',
    month: 'Aug',
    year: '2025',
    title: 'Coming Soon',
    description: 'Program dan aktivitas bulan ini sedang dalam tahap perencanaan. Informasi lengkap akan segera diumumkan melalui kanal resmi AMUHI.',
    status: 'upcoming',
  },
  {
    date: '08',
    month: 'Sep',
    year: '2025',
    title: 'Coming Soon',
    description: 'Program dan aktivitas bulan ini sedang dalam tahap perencanaan. Informasi lengkap akan segera diumumkan melalui kanal resmi AMUHI.',
    status: 'upcoming',
  },
  {
    date: '08',
    month: 'Oct',
    year: '2025',
    title: 'Coming Soon',
    description: 'Program dan aktivitas bulan ini sedang dalam tahap perencanaan. Informasi lengkap akan segera diumumkan melalui kanal resmi AMUHI.',
    status: 'upcoming',
  },
  {
    date: '08',
    month: 'Nov',
    year: '2025',
    title: 'Coming Soon',
    description: 'Program dan aktivitas bulan ini sedang dalam tahap perencanaan. Informasi lengkap akan segera diumumkan melalui kanal resmi AMUHI.',
    status: 'upcoming',
  },
  {
    date: '08',
    month: 'Dec',
    year: '2025',
    title: 'Coming Soon',
    description: 'Program dan aktivitas bulan ini sedang dalam tahap perencanaan. Informasi lengkap akan segera diumumkan melalui kanal resmi AMUHI.',
    status: 'upcoming',
  },
  {
    date: '08',
    month: 'Jan',
    year: '2027',
    title: 'Coming Soon',
    description: 'Program dan aktivitas bulan ini sedang dalam tahap perencanaan. Informasi lengkap akan segera diumumkan melalui kanal resmi AMUHI.',
    status: 'upcoming',
  },
];

export default function OurActivityPage() {
  return (
    <div className="activity-page">
      <SEO
        title="Our Activity - AMUHI"
        description="Timeline aktivitas dan kegiatan AMUHI - Free Webinar setiap tanggal 8"
        image={HERO_IMAGE}
        url="/activity"
      />

      <section className="activity-hero">
        <div className="container">
          <div className="activity-hero__content">
            <div className="activity-hero__badge">
              <span className="news-hero__badge-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="16" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M7 8h6M7 12h10M7 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <span>Timeline</span>
            </div>

            <h1 className="activity-hero__title">
              Our Activity
            </h1>

            <p className="activity-hero__lead">
              Ikuti rangkaian kegiatan dan program AMUHI yang dirancang untuk meningkatkan pengetahuan, profesionalisme, dan kolaborasi dalam industri umrah dan haji. Setiap tanggal 8, kami menghadirkan webinar edukasi gratis, workshop, dan diskusi interaktif bersama para ahli dan praktisi terpercaya untuk memberikan wawasan terkini dan solusi atas tantangan yang dihadapi pelaku industri.
            </p>
          </div>
        </div>
      </section>

      <section className="activity-timeline">
        <div className="container">
          <div className="timeline">
            {activities.map((activity, index) => (
              <div
                key={`${activity.month}-${activity.year}`}
                className={`timeline-item ${activity.status}`}
              >
                <div className="timeline-dot"></div>
                {index < activities.length - 1 && <div className="timeline-line"></div>}

                <div className="timeline-content">
                  <div className="timeline-date">
                    <span className="timeline-date__day">{activity.date}</span>
                    <span className="timeline-date__month-year">{activity.month}, {activity.year}</span>
                  </div>

                  <div className="timeline-details">
                    <h3 className="timeline-title">{activity.title}</h3>
                    {activity.description && (
                      <p className="timeline-description">{activity.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
