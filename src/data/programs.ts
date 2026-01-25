import type { ProgramData } from '../types/program';

import academyIcon from '../assets/programs/icon-academy.png';
import checkIcon from '../assets/programs/icon-check.png';
import protectIcon from '../assets/programs/icon-protect.png';
import careIcon from '../assets/programs/icon-care.png';
import networkIcon from '../assets/programs/icon-network.png';
import digitalIcon from '../assets/programs/icon-digital.png';

// Hero images (Program-1.webp)
import academicHero from '../assets/programs/images/Academic-1.webp';
import checkHero from '../assets/programs/images/Check-1.webp';
import protectHero from '../assets/programs/images/Protect-1.webp';
import careHero from '../assets/programs/images/Care-1.webp';
import networkHero from '../assets/programs/images/Network-1.webp';
import digitalHero from '../assets/programs/images/Digital-1.webp';

// Main images (Program-2.webp)
import academicMain from '../assets/programs/images/Academic-2.webp';
import checkMain from '../assets/programs/images/Check-2.webp';
import protectMain from '../assets/programs/images/Protect-2.webp';
import careMain from '../assets/programs/images/Care-2.webp';
import networkMain from '../assets/programs/images/Network-2.webp';
import digitalMain from '../assets/programs/images/Digital-2.webp';

export const programs: ProgramData[] = [
  {
    id: 'academy',
    name: 'AMUHI Academy',
    slug: 'academy',
    tagline: 'Learning & Certification Hub for the Umrah & Hajj Industry',
    shortDescription: 'Pusat edukasi, pelatihan, dan sertifikasi profesional bagi para pelaku industri Umrah & Haji — mulai dari staf operasional hingga pemilik travel.',
    longDescription: 'AMUHI Academy adalah wadah pengembangan kompetensi industri ibadah berbasis digital. Melalui sistem pelatihan modern (online & onsite), workshop, dan sertifikasi kompetensi, unit ini membantu anggota meningkatkan profesionalisme, literasi teknologi, serta standar pelayanan sesuai regulasi terbaru.',
    icon: academyIcon,
    heroImage: academicHero,
    detail: {
      mainFunction: 'Menjadi pusat edukasi, pelatihan, dan sertifikasi profesional bagi para pelaku industri Umrah & Haji — mulai dari staf operasional hingga pemilik travel.',
      mainImage: academicMain,
      valueCreated: [
        'Meningkatkan kapasitas dan kredibilitas SDM pelaku industri.',
        'Membangun standardisasi kompetensi nasional.',
        'Menjadi center of excellence dalam knowledge & leadership haji-umrah.',
      ],
      highlights: [
        { title: '8 Weeks', subtitle: 'Duration', icon: 'clock' },
        { title: 'Hybrid', subtitle: 'Online & Onsite', icon: 'globe' },
        { title: 'Certified', subtitle: 'Nationally Recognized', icon: 'check' },
        { title: 'Live Mentoring', subtitle: 'Weekly Clinics', icon: 'chat' },
      ],
      curriculum: {
        title: 'Program Pillars',
        pillarLabel: 'PILLAR',
        description: 'Pilar pengembangan kompetensi untuk mencetak SDM berstandar nasional.',
        pillars: [
          {
            label: 'PILLAR 1',
            title: 'Kapasitas & Kredibilitas SDM',
            description: 'Membangun skill praktis dan kredibilitas profesional bagi pelaku industri.',
          },
          {
            label: 'PILLAR 2',
            title: 'Standarisasi Kompetensi',
            description: 'Menyelaraskan kompetensi dengan standar nasional melalui pelatihan dan sertifikasi.',
          },
          {
            label: 'PILLAR 3',
            title: 'Center of Excellence',
            description: 'Menjadi pusat rujukan knowledge & leadership bagi ekosistem haji-umrah.',
          },
        ],
        benefits: [
          'Pelatihan online & onsite dengan mentor industri',
          'Sertifikasi kompetensi yang diakui',
          'Materi kurasi sesuai regulasi terbaru',
        ],
      },
      testimonials: [
        {
          text: 'Kurikulumnya relevan dan langsung bisa diterapkan untuk meningkatkan pelayanan jamaah.',
          name: 'Arif Ramadhan',
          role: 'Owner travel umrah',
        },
        {
          text: 'Mentornya praktisi, jadi setiap sesi banyak contoh kasus nyata yang membuka wawasan saya.',
          name: 'Nabila Putri',
          role: 'Head of Operations',
        },
        {
          text: 'Programnya membantu tim kami lulus audit dan mendapatkan sertifikasi lebih cepat.',
          name: 'Rizky Hidayat',
          role: 'Compliance Manager',
        },
      ],
      registrationFeatures: [
        { title: 'Coach Clinic', description: 'Sesi klinik bersama mentor untuk studi kasus travel Anda.', icon: 'chat' },
        { title: 'Certification Support', description: 'Pendampingan hingga proses sertifikasi selesai.', icon: 'shield' },
      ],
    },
    overview: {
      about: 'AMUHI Academy adalah pusat pembelajaran dan sertifikasi profesional yang didedikasikan untuk meningkatkan kualitas dan kompetensi pelaku industri Umrah dan Haji di Indonesia. Kami menyediakan berbagai program pelatihan yang dirancang khusus untuk memenuhi kebutuhan industri.',
      vision: 'Menjadi pusat excellence dalam pendidikan dan pelatihan industri Umrah dan Haji di Indonesia.',
      mission: 'Menciptakan pelaku industri yang profesional, berintegritas, dan berkualitas tinggi melalui program edukasi yang komprehensif dan tersertifikasi.',
    },
    features: [
      {
        title: 'Kapasitas & Kredibilitas SDM',
        description: 'Meningkatkan kapasitas dan kredibilitas SDM pelaku industri.',
      },
      {
        title: 'Standarisasi Kompetensi',
        description: 'Membangun standardisasi kompetensi nasional bagi pelaku haji-umrah.',
      },
      {
        title: 'Center of Excellence',
        description: 'Menjadi pusat rujukan knowledge dan leadership haji-umrah.',
      },
    ],
    benefits: [
      { title: 'Pelatihan Modern', description: 'Pelatihan online & onsite dengan mentor industri.' },
      { title: 'Sertifikasi Kompetensi', description: 'Standar kompetensi yang diakui secara nasional.' },
      { title: 'Standar Layanan', description: 'Panduan dan praktik terbaik sesuai regulasi terbaru.' },
    ],
    howItWorks: [
      { step: 1, title: 'Registrasi', description: 'Daftar untuk akses ke pelatihan dan sertifikasi.' },
      { step: 2, title: 'Ikuti Pelatihan', description: 'Jalani sesi online & onsite sesuai kurasi program.' },
      { step: 3, title: 'Raih Sertifikasi', description: 'Lengkapi asesmen dan dapatkan pengakuan kompetensi.' },
    ],
    targetAudience: {
      title: 'Siapa yang Cocok untuk Program Ini?',
      segments: [
        'Travel agent owners & managers',
        'Tour leaders dan pembimbing Umrah',
        'Staff travel yang ingin upgrade skill',
        'Fresh graduate yang ingin masuk industri',
        'Entrepreneur di bidang Umrah & Haji',
      ],
    },
    faqs: [
      { question: 'Bagaimana cara mendaftar program pelatihan?', answer: 'Anda dapat mendaftar melalui website kami atau menghubungi tim kami untuk konsultasi program yang sesuai dengan kebutuhan Anda.' },
      { question: 'Berapa biaya pelatihan?', answer: 'Biaya bervariasi tergantung program yang dipilih. Kami juga menyediakan opsi cicilan dan beasiswa untuk peserta tertentu.' },
      { question: 'Apakah sertifikat diakui secara nasional?', answer: 'Ya, sertifikat kami diakui secara nasional dan diakui oleh asosiasi industri Umrah dan Haji.' },
      { question: 'Berapa lama durasi pelatihan?', answer: 'Durasi bervariasi mulai dari 1 hari untuk workshop singkat hingga 3 bulan untuk program sertifikasi lengkap.' },
      { question: 'Apakah ada pelatihan online?', answer: 'Ya, kami menyediakan opsi pelatihan online untuk fleksibilitas peserta yang tidak dapat hadir secara langsung.' },
    ],
    cta: {
      primary: { text: 'Daftar Sekarang', action: '#register' },
      secondary: { text: 'Lihat Jadwal Pelatihan', action: '#schedule' },
      tertiary: { text: 'Hubungi Kami', action: '#contact' },
    },
    relatedPrograms: ['check', 'network'],
  },
  {
    id: 'check',
    name: 'AMUHI Check',
    slug: 'check',
    tagline: 'Digital Verification & Compliance System',
    shortDescription: 'Menyediakan sistem verifikasi digital bagi travel anggota untuk memastikan keabsahan izin, legalitas, dan kredibilitas perusahaan.',
    longDescription: 'AMUHI Check adalah sistem berbasis teknologi yang dirancang untuk membangun transparansi industri. Setiap anggota yang terdaftar dapat diverifikasi secara real-time melalui portal atau aplikasi AMUHI. Sistem ini membantu publik membedakan travel resmi dari yang tidak terdaftar, sekaligus menjaga kepercayaan terhadap asosiasi dan anggotanya.',
    icon: checkIcon,
    heroImage: checkHero,
    ctaTitle: 'Siap Bergabung dengan AMUHI Check?',
    detail: {
      mainFunction: 'Menyediakan sistem verifikasi digital bagi travel anggota untuk memastikan keabsahan izin, legalitas, dan kredibilitas perusahaan.',
      mainImage: checkMain,
      valueCreated: [
        'Meningkatkan trust publik terhadap travel anggota.',
        'Mendorong transparansi dan kepatuhan industri.',
        'Menjadi alat validasi utama bagi jamaah dan regulator.',
      ],
      highlights: [
        { title: 'Real-time', subtitle: 'Verification Speed', icon: 'clock' },
        { title: 'Nationwide Data', subtitle: 'Synced with Kemenag', icon: 'globe' },
        { title: 'Fraud Alerts', subtitle: 'Warning System', icon: 'shield' },
        { title: 'API Ready', subtitle: 'Embed & Integrate', icon: 'download' },
      ],
      curriculum: {
        title: 'Program Pillars',
        pillarLabel: 'PILLAR',
        description: 'Pilar transparansi digital untuk travel resmi.',
        pillars: [
          {
            label: 'PILLAR 1',
            title: 'Trust Publik',
            description: 'Verifikasi izin dan kredibilitas untuk meningkatkan kepercayaan jamaah.',
          },
          {
            label: 'PILLAR 2',
            title: 'Transparansi & Kepatuhan',
            description: 'Mendorong kepatuhan industri melalui data legal yang terbuka.',
          },
          {
            label: 'PILLAR 3',
            title: 'Validasi Jamaah & Regulator',
            description: 'Menjadi alat validasi utama yang dapat diakses publik dan regulator.',
          },
        ],
        benefits: [
          'Status legalitas tampil real-time',
          'Badge verifikasi untuk kampanye marketing',
          'Alat validasi bagi jamaah dan regulator',
        ],
      },
      testimonials: [
        {
          text: 'Publik bisa cek legalitas kami dalam hitungan detik sehingga membantu closing lebih cepat.',
          name: 'Linda Mahendra',
          role: 'CEO travel umrah',
        },
        {
          text: 'Fitur alert membantu kami menenangkan jamaah ketika ada rumor yang tidak jelas sumbernya.',
          name: 'Bimo Prasetyo',
          role: 'Customer Experience Lead',
        },
        {
          text: 'Integrasi API-nya mudah sehingga badge verifikasi langsung muncul di website kami.',
          name: 'Sari Wulandari',
          role: 'Product Manager',
        },
      ],
      registrationFeatures: [
        { title: 'Compliance Playbook', description: 'Checklist regulasi dan dokumen yang harus diperbarui secara berkala.', icon: 'book' },
        { title: 'Fraud Monitoring', description: 'Akses dashboard peringatan dan tim respon cepat AMUHI.', icon: 'shield' },
      ],
    },
    overview: {
      about: 'AMUHI Check adalah platform verifikasi digital yang memungkinkan calon jamaah untuk memverifikasi legalitas dan kredibilitas travel Umrah dan Haji sebelum melakukan pendaftaran. Sistem ini terintegrasi dengan database resmi untuk memberikan informasi yang akurat.',
      vision: 'Menciptakan ekosistem industri Umrah dan Haji yang aman dan terpercaya bagi seluruh jamaah Indonesia.',
      mission: 'Memberikan kemudahan akses informasi legalitas dan kredibilitas travel agent untuk melindungi jamaah dari praktik penipuan.',
    },
    features: [
      {
        title: 'Trust Publik',
        description: 'Meningkatkan kepercayaan publik terhadap travel anggota.',
      },
      {
        title: 'Transparansi & Kepatuhan',
        description: 'Mendorong transparansi dan kepatuhan industri melalui verifikasi digital.',
      },
      {
        title: 'Validasi Jamaah & Regulator',
        description: 'Menjadi alat validasi utama bagi jamaah dan regulator.',
      },
    ],
    benefits: [
      { title: 'Kepercayaan', description: 'Meningkatkan trust publik terhadap travel anggota.' },
      { title: 'Transparansi', description: 'Transparansi dan kepatuhan industri yang dapat diakses publik.' },
      { title: 'Validasi', description: 'Alat validasi utama bagi jamaah dan regulator.' },
    ],
    howItWorks: [
      { step: 1, title: 'Masukkan Data', description: 'Cari nama atau nomor izin travel anggota.' },
      { step: 2, title: 'Lihat Status', description: 'Periksa hasil verifikasi legalitas secara real-time.' },
      { step: 3, title: 'Validasi & Laporkan', description: 'Gunakan status sebagai bukti ke jamaah atau regulator; laporkan bila tidak resmi.' },
    ],
    targetAudience: {
      title: 'Siapa yang Membutuhkan AMUHI Check?',
      segments: [
        'Calon jamaah Umrah dan Haji',
        'Keluarga yang mencari travel terpercaya',
        'Komunitas masjid dan pengajian',
        'Corporate untuk program Umrah karyawan',
        'Agent yang ingin bergabung dengan travel resmi',
      ],
    },
    faqs: [
      { question: 'Bagaimana cara mengecek legalitas travel?', answer: 'Cukup masukkan nama travel atau nomor izin di kolom pencarian, sistem akan menampilkan status legalitas secara real-time.' },
      { question: 'Apakah AMUHI Check gratis?', answer: 'Ya, layanan verifikasi dasar gratis untuk semua pengguna. Fitur premium tersedia untuk kebutuhan khusus.' },
      { question: 'Data dari mana saja yang digunakan?', answer: 'Data kami terintegrasi dengan database Kementerian Agama dan asosiasi travel resmi.' },
      { question: 'Seberapa sering database di-update?', answer: 'Database kami diupdate secara berkala, minimal setiap minggu untuk memastikan akurasi informasi.' },
      { question: 'Apa yang harus dilakukan jika travel tidak terdaftar?', answer: 'Sebaiknya hindari travel tersebut dan laporkan ke pihak berwenang. Anda juga dapat menghubungi AMUHI Protect untuk bantuan lebih lanjut.' },
    ],
    cta: {
      primary: { text: 'Cek Travel Sekarang', action: '#verify' },
      secondary: { text: 'Download Panduan', action: '#guide' },
      tertiary: { text: 'Laporkan Travel Ilegal', action: '#report' },
    },
    relatedPrograms: ['protect', 'academy'],
  },
  {
    id: 'protect',
    name: 'AMUHI Protect',
    slug: 'protect',
    tagline: 'Member Protection & Anti-Fraud Platform',
    shortDescription: 'Menjadi sistem perlindungan dan advokasi bagi anggota serta jamaah dari ancaman penipuan (scam) dan fraud di industri Umrah & Haji.',
    longDescription: 'AMUHI Protect bertugas sebagai "tameng digital" asosiasi. Dengan sistem pelaporan cepat, mekanisme advokasi hukum, dan monitoring digital, AMUHI Protect memastikan anggota terhindar dari kerugian akibat oknum tidak bertanggung jawab. Selain itu, unit ini juga mengedukasi publik tentang cara beribadah dengan aman dan terverifikasi.',
    icon: protectIcon,
    heroImage: protectHero,
    detail: {
      mainFunction: 'Menjadi sistem perlindungan dan advokasi bagi anggota serta jamaah dari ancaman penipuan (scam) dan fraud di industri Umrah & Haji.',
      mainImage: protectMain,
      valueCreated: [
        'Memberikan rasa aman dan kepercayaan kepada anggota & jamaah.',
        'Meningkatkan reputasi AMUHI sebagai asosiasi terpercaya.',
        'Menjadi benteng moral & hukum bagi industri.',
      ],
      highlights: [
        { title: '24/7 Support', subtitle: 'Emergency Hotline', icon: 'clock' },
        { title: 'Legal Desk', subtitle: 'Advocacy & Mediation', icon: 'shield' },
        { title: 'National Coverage', subtitle: 'Across Indonesia', icon: 'globe' },
        { title: 'Case Tracking', subtitle: 'Transparent Updates', icon: 'bars' },
      ],
      curriculum: {
        title: 'Program Pillars',
        pillarLabel: 'PILLAR',
        description: 'Pilar perlindungan yang menjaga rasa aman dan reputasi anggota.',
        pillars: [
          {
            label: 'PILLAR 1',
            title: 'Rasa Aman & Kepercayaan',
            description: 'Menangani laporan dengan cepat agar anggota dan jamaah merasa terlindungi.',
          },
          {
            label: 'PILLAR 2',
            title: 'Reputasi Asosiasi',
            description: 'Advokasi hukum dan mediasi untuk menjaga nama baik anggota dan asosiasi.',
          },
          {
            label: 'PILLAR 3',
            title: 'Benteng Moral & Hukum',
            description: 'Pendampingan hukum dan edukasi moral agar industri tetap terverifikasi dan etis.',
          },
        ],
        benefits: [
          'Respons cepat dan advokasi hukum',
          'Edukasi pencegahan fraud untuk jamaah',
          'Pendampingan hingga kasus terselesaikan',
        ],
      },
      testimonials: [
        {
          text: 'Prosesnya cepat, laporan kami langsung direspons dan diarahkan langkah hukumnya.',
          name: 'Rina Oktaviani',
          role: 'Korban travel ilegal',
        },
        {
          text: 'Tim legal membantu mediasi tanpa menimbulkan konflik yang lebih besar dengan jamaah.',
          name: 'Hafidz Sutanto',
          role: 'Direktur operasional travel',
        },
        {
          text: 'Selain pendampingan, kami mendapat edukasi pencegahan sehingga tim lebih siap menghadapi risiko.',
          name: 'Samsul Arifin',
          role: 'Community representative',
        },
      ],
      registrationFeatures: [
        { title: 'Rapid Response', description: 'Tim siap menindaklanjuti laporan dalam 24 jam.', icon: 'shield' },
        { title: 'Case Companion', description: 'Pendamping kasus dengan update berkala kepada pelapor.', icon: 'chat' },
      ],
    },
    overview: {
      about: 'AMUHI Protect adalah platform perlindungan konsumen yang berfokus pada advokasi hukum dan penanganan kasus penipuan di industri Umrah dan Haji. Kami menyediakan layanan konsultasi hukum, mediasi, dan pendampingan untuk korban penipuan.',
      vision: 'Industri Umrah dan Haji yang bebas dari praktik penipuan dan melindungi hak-hak konsumen.',
      mission: 'Melindungi hak-hak konsumen dan memberikan akses bantuan hukum yang mudah dan terjangkau bagi korban penipuan.',
    },
    features: [
      {
        title: 'Rasa Aman & Kepercayaan',
        description: 'Memberikan perlindungan dan advokasi agar anggota & jamaah merasa aman.',
      },
      {
        title: 'Reputasi Asosiasi',
        description: 'Menjaga reputasi AMUHI sebagai asosiasi terpercaya melalui advokasi hukum.',
      },
      {
        title: 'Benteng Moral & Hukum',
        description: 'Berperan sebagai benteng moral dan hukum bagi industri haji-umrah.',
      },
    ],
    benefits: [
      { title: 'Kepercayaan', description: 'Rasa aman dan kepercayaan untuk anggota & jamaah.' },
      { title: 'Reputasi', description: 'Reputasi asosiasi terjaga melalui pendampingan kasus.' },
      { title: 'Perlindungan', description: 'Benteng moral dan hukum bagi industri haji-umrah.' },
    ],
    howItWorks: [
      { step: 1, title: 'Laporkan', description: 'Sampaikan kasus scam atau fraud yang terjadi.' },
      { step: 2, title: 'Tindakan Cepat', description: 'Tim melakukan verifikasi dan memberi arahan langkah hukum/mediasi.' },
      { step: 3, title: 'Pendampingan', description: 'Didampingi hingga kasus selesai dan reputasi pulih.' },
    ],
    targetAudience: {
      title: 'Siapa yang Dapat Kami Bantu?',
      segments: [
        'Jamaah yang mengalami penipuan',
        'Konsumen dengan sengketa travel',
        'Keluarga korban travel ilegal',
        'Komunitas yang ingin preventif action',
        'Travel agent yang ingin compliance support',
      ],
    },
    faqs: [
      { question: 'Bagaimana cara melaporkan penipuan?', answer: 'Anda dapat melaporkan melalui hotline 24/7 kami, website, atau datang langsung ke kantor kami dengan membawa bukti-bukti yang relevan.' },
      { question: 'Apakah layanan konsultasi hukum gratis?', answer: 'Ya, konsultasi hukum awal gratis untuk semua korban penipuan. Biaya tambahan mungkin berlaku untuk pendampingan hukum intensif.' },
      { question: 'Berapa lama proses penanganan kasus?', answer: 'Tergantung kompleksitas kasus, biasanya 2-4 minggu untuk mediasi. Proses hukum dapat memakan waktu lebih lama.' },
      { question: 'Apa saja yang ditangani AMUHI Protect?', answer: 'Kami menangani kasus penipuan travel, pembatalan sepihak, tidak sesuai janji, dan berbagai sengketa konsumen lainnya.' },
      { question: 'Apakah ada biaya untuk mediasi?', answer: 'Mediasi dasar gratis. Untuk kasus kompleks yang memerlukan proses hukum, biaya akan diinformasikan di awal.' },
    ],
    cta: {
      primary: { text: 'Laporkan Masalah', action: '#report' },
      secondary: { text: 'Konsultasi Gratis', action: '#consult' },
      tertiary: { text: 'Hotline 24/7', action: 'tel:+6281234567890' },
    },
    relatedPrograms: ['check', 'care'],
  },
  {
    id: 'care',
    name: 'AMUHI Care',
    slug: 'care',
    tagline: 'Social Impact & Advocacy Program',
    shortDescription: 'Menjadi divisi sosial dan advokasi yang memperkuat peran kemanusiaan dan tanggung jawab sosial AMUHI di tengah masyarakat.',
    longDescription: 'AMUHI Care fokus pada kegiatan berbasis nilai Islami seperti bantuan jamaah, program sosial untuk masyarakat terdampak, serta kampanye edukatif mengenai ibadah yang aman. Selain itu, unit ini menjadi jembatan advokasi antara jamaah, travel, dan regulator — terutama ketika terjadi kasus sosial, hukum, atau moral di lapangan.',
    icon: careIcon,
    heroImage: careHero,
    detail: {
      mainFunction: 'Menjadi divisi sosial dan advokasi yang memperkuat peran kemanusiaan dan tanggung jawab sosial AMUHI di tengah masyarakat.',
      mainImage: careMain,
      valueCreated: [
        'Menguatkan citra sosial dan nilai moral asosiasi.',
        'Menumbuhkan solidaritas & empati kolektif.',
        'Menciptakan hubungan harmonis antara industri & umat.',
      ],
      highlights: [
        { title: 'Social Impact', subtitle: 'Scholarships & Aid', icon: 'check' },
        { title: '40+ Regions', subtitle: 'National Outreach', icon: 'globe' },
        { title: 'Partnerships', subtitle: 'NGO & Corporate', icon: 'users' },
        { title: 'Transparent', subtitle: 'Impact Reporting', icon: 'bars' },
      ],
      curriculum: {
        title: 'Program Pillars',
        pillarLabel: 'PILLAR',
        description: 'Pilar dampak sosial dan advokasi yang menjaga nilai moral asosiasi.',
        pillars: [
          {
            label: 'PILLAR 1',
            title: 'Citra Sosial & Moral',
            description: 'Memperkuat nilai moral asosiasi melalui program bantuan dan edukasi.',
          },
          {
            label: 'PILLAR 2',
            title: 'Solidaritas & Empati',
            description: 'Mendorong solidaritas dan empati kolektif lewat kolaborasi komunitas.',
          },
          {
            label: 'PILLAR 3',
            title: 'Harmoni Industri & Umat',
            description: 'Menjadi jembatan advokasi agar hubungan industri dan umat tetap harmonis.',
          },
        ],
        benefits: [
          'Program sosial berbasis nilai Islami',
          'Advokasi untuk kasus sosial dan moral',
          'Pelaporan dampak yang transparan',
        ],
      },
      testimonials: [
        {
          text: 'Distribusi bantuan AMUHI Care terukur dan cepat; laporan dampaknya jelas.',
          name: 'Ustadz M. Rasyid',
          role: 'Pembina yayasan daerah',
        },
        {
          text: 'Program CSR kami jadi lebih bermakna karena kurasi penerima dan eksekusi di lapangan rapi.',
          name: 'Dewi Lestari',
          role: 'CSR Manager',
        },
        {
          text: 'Pendampingan advokasi membuat jamaah terlindungi ketika ada kasus sosial atau hukum.',
          name: 'Yusuf Rahman',
          role: 'Travel owner',
        },
      ],
      registrationFeatures: [
        { title: 'Partnership Desk', description: 'Tim khusus untuk kolaborasi CSR dan donasi strategis.', icon: 'users' },
        { title: 'Impact Tracker', description: 'Akses laporan perkembangan program secara berkala.', icon: 'bars' },
      ],
    },
    overview: {
      about: 'AMUHI Care adalah inisiatif sosial yang berfokus pada memberikan dampak positif bagi masyarakat melalui program beasiswa Umrah, bantuan sosial, dan advokasi kebijakan. Kami percaya industri Umrah dan Haji harus memberikan manfaat bagi semua lapisan masyarakat.',
      vision: 'Industri Umrah dan Haji yang peduli dan berdampak sosial positif bagi seluruh masyarakat Indonesia.',
      mission: 'Menciptakan ekosistem industri yang tidak hanya profit-oriented tapi juga people-oriented melalui program sosial yang berkelanjutan.',
    },
    features: [
      {
        title: 'Citra Sosial & Nilai Moral',
        description: 'Menguatkan citra sosial dan nilai moral asosiasi.',
      },
      {
        title: 'Solidaritas & Empati',
        description: 'Menumbuhkan solidaritas dan empati kolektif lewat program sosial.',
      },
      {
        title: 'Harmoni Industri & Umat',
        description: 'Menciptakan hubungan harmonis antara industri & umat.',
      },
    ],
    benefits: [
      { title: 'Citra Sosial', description: 'Nilai moral asosiasi yang kuat dan terlihat.' },
      { title: 'Solidaritas', description: 'Solidaritas dan empati kolektif yang tumbuh.' },
      { title: 'Harmoni', description: 'Hubungan harmonis antara industri dan umat.' },
    ],
    howItWorks: [
      { step: 1, title: 'Identifikasi Dampak', description: 'Tentukan kebutuhan sosial yang ingin dijawab.' },
      { step: 2, title: 'Kolaborasi Program', description: 'Bangun solidaritas melalui program bantuan dan advokasi.' },
      { step: 3, title: 'Laporan Dampak', description: 'Pastikan transparansi dan harmoni dengan pelaporan dampak.' },
    ],
    targetAudience: {
      title: 'Siapa yang Dapat Berpartisipasi?',
      segments: [
        'Calon jamaah kurang mampu',
        'Yayasan dan NGO sosial',
        'Travel agent yang ingin CSR programs',
        'Corporate untuk program charity',
        'Donatur yang ingin berkontribusi',
      ],
    },
    faqs: [
      { question: 'Bagaimana cara apply beasiswa Umrah?', answer: 'Anda dapat mengajukan beasiswa melalui website kami dengan melengkapi formulir dan dokumen pendukung yang diperlukan.' },
      { question: 'Siapa yang bisa mendapat bantuan?', answer: 'Bantuan ditujukan untuk masyarakat kurang mampu yang memenuhi kriteria yang telah ditetapkan.' },
      { question: 'Bagaimana cara donasi untuk program ini?', answer: 'Donasi dapat dilakukan melalui transfer bank, platform crowdfunding, atau langsung ke kantor kami.' },
      { question: 'Apakah ada program untuk corporate CSR?', answer: 'Ya, kami menyediakan program partnership CSR untuk perusahaan yang ingin berkontribusi.' },
      { question: 'Bagaimana transparansi penggunaan dana?', answer: 'Kami menerbitkan laporan penggunaan dana secara berkala dan dapat diakses oleh publik.' },
    ],
    cta: {
      primary: { text: 'Apply Beasiswa', action: '#apply' },
      secondary: { text: 'Donasi Sekarang', action: '#donate' },
      tertiary: { text: 'Join as Partner', action: '#partner' },
    },
    relatedPrograms: ['protect', 'network'],
  },
  {
    id: 'network',
    name: 'AMUHI Network',
    slug: 'network',
    tagline: 'Digital Business Hub & Collaboration Space',
    shortDescription: 'Menjadi wadah koneksi, kolaborasi, dan pertukaran peluang bisnis antar pelaku industri Umrah & Haji — baik nasional maupun internasional.',
    longDescription: 'AMUHI Network berfungsi layaknya "LinkedIn"-nya pelaku industri Umrah & Haji. Unit ini mempertemukan para owner, supplier, maskapai, hotel, dan penyedia jasa pendukung lainnya dalam satu ruang digital terintegrasi. Tujuannya: menciptakan kolaborasi lintas sektor yang saling menguntungkan dan mempercepat pertumbuhan industri secara kolektif.',
    icon: networkIcon,
    heroImage: networkHero,
    detail: {
      mainFunction: 'Menjadi wadah koneksi, kolaborasi, dan pertukaran peluang bisnis antar pelaku industri Umrah & Haji — baik nasional maupun internasional.',
      mainImage: networkMain,
      valueCreated: [
        'Memperluas jejaring bisnis global.',
        'Menumbuhkan kolaborasi antar anggota.',
        'Menjadi platform pertumbuhan dan inovasi bersama.',
      ],
      highlights: [
        { title: 'B2B Hub', subtitle: 'Marketplace & Matching', icon: 'users' },
        { title: 'International', subtitle: 'Multi-country Partners', icon: 'globe' },
        { title: 'Verified', subtitle: 'Member-only Deals', icon: 'shield' },
        { title: 'Growth', subtitle: 'Leads & JV Pipeline', icon: 'bars' },
      ],
      curriculum: {
        title: 'Program Pillars',
        pillarLabel: 'PILLAR',
        description: 'Pilar kolaborasi digital yang memperluas peluang bisnis global.',
        pillars: [
          {
            label: 'PILLAR 1',
            title: 'Jejaring Bisnis Global',
            description: 'Memperluas koneksi lintas negara untuk travel dan mitra pendukung.',
          },
          {
            label: 'PILLAR 2',
            title: 'Kolaborasi Anggota',
            description: 'Memfasilitasi kolaborasi dan pertukaran peluang antar anggota.',
          },
          {
            label: 'PILLAR 3',
            title: 'Pertumbuhan & Inovasi',
            description: 'Menjadi platform pertumbuhan bisnis dan inovasi bersama.',
          },
        ],
        benefits: [
          'Direktori partner terkurasi',
          'Business matching dan deal room',
          'Pendampingan eksekusi partnership',
        ],
      },
      testimonials: [
        {
          text: 'Kami menemukan vendor hotel baru di Mekah lewat matchmaking dan langsung mendapat harga kompetitif.',
          name: 'Zulfikar Ahmad',
          role: 'Travel Director',
        },
        {
          text: 'Event eksklusifnya efektif; dalam satu hari kami bertemu puluhan calon partner potensial.',
          name: 'Nadia Salma',
          role: 'Partnership Lead',
        },
        {
          text: 'Deal room mempermudah negosiasi karena dokumen dan kontak partner sudah siap.',
          name: 'Imam Suryono',
          role: 'Vendor Manager',
        },
      ],
      registrationFeatures: [
        { title: 'Deal Desk', description: 'Tim membantu kurasi partner dan follow-up leads.', icon: 'chat' },
        { title: 'Event Access', description: 'Priority pass ke forum bisnis dan trade show.', icon: 'check' },
      ],
    },
    overview: {
      about: 'AMUHI Network adalah platform bisnis digital yang memfasilitasi koneksi dan kolaborasi antara pelaku industri Umrah dan Haji. Kami menyediakan ruang untuk networking, business matching, dan berbagai event eksklusif.',
      vision: 'Ekosistem bisnis yang kolaboratif dan saling menguntungkan bagi seluruh stakeholder industri.',
      mission: 'Memfasilitasi pertumbuhan bisnis melalui networking, partnership strategis, dan kolaborasi yang berkelanjutan.',
    },
    features: [
      {
        title: 'Jejaring Bisnis Global',
        description: 'Memperluas jaringan bisnis lintas negara.',
      },
      {
        title: 'Kolaborasi Anggota',
        description: 'Menumbuhkan kolaborasi antar anggota.',
      },
      {
        title: 'Pertumbuhan & Inovasi',
        description: 'Platform pertumbuhan dan inovasi bersama.',
      },
    ],
    benefits: [
      { title: 'Jejaring Global', description: 'Memperluas jejaring bisnis global anggota.' },
      { title: 'Kolaborasi', description: 'Mendorong kolaborasi antar anggota dan mitra.' },
      { title: 'Pertumbuhan', description: 'Menjadi platform pertumbuhan dan inovasi bersama.' },
    ],
    howItWorks: [
      { step: 1, title: 'Join Network', description: 'Gabung sebagai member untuk akses jejaring.' },
      { step: 2, title: 'Temukan Partner', description: 'Cari peluang kolaborasi dan pertukaran bisnis.' },
      { step: 3, title: 'Bangun Kolaborasi', description: 'Eksekusi pertumbuhan dan inovasi bersama.' },
    ],
    targetAudience: {
      title: 'Siapa yang Cocok Bergabung?',
      segments: [
        'Travel agent owners',
        'Vendor dan supplier (hotel, transport, catering)',
        'Technology providers',
        'Financial institutions',
        'Investors dan business developers',
      ],
    },
    faqs: [
      { question: 'Bagaimana cara join AMUHI Network?', answer: 'Anda dapat mendaftar melalui website kami dan mengisi formulir pendaftaran member.' },
      { question: 'Apakah ada membership fee?', answer: 'Ya, ada biaya membership tahunan dengan berbagai tier sesuai kebutuhan bisnis Anda.' },
      { question: 'Apa benefit exclusive untuk members?', answer: 'Member mendapat akses ke direktori bisnis, event eksklusif, business matching, dan berbagai privilege lainnya.' },
      { question: 'Bagaimana cara find business partners?', answer: 'Gunakan fitur business matching kami untuk menemukan partner yang sesuai dengan kebutuhan bisnis Anda.' },
      { question: 'Apakah ada events rutin?', answer: 'Ya, kami menyelenggarakan networking events, seminar, dan gathering secara rutin setiap bulan.' },
    ],
    cta: {
      primary: { text: 'Daftar Membership', action: '#join' },
      secondary: { text: 'Lihat Event Mendatang', action: '#events' },
      tertiary: { text: 'Browse Members', action: '#members' },
    },
    relatedPrograms: ['academy', 'digital'],
  },
  {
    id: 'digital',
    name: 'AMUHI Digital',
    slug: 'digital',
    tagline: 'Media, Communication, & Tech Channel',
    shortDescription: 'Menjadi pusat komunikasi digital, branding, dan engagement publik melalui berbagai kanal media dan aplikasi AMUHI.',
    longDescription: 'AMUHI Digital adalah "wajah publik" asosiasi. Unit ini mengelola AMUHI News Update, AMUHI Podcast, AMUHI Social Media, dan AMUHI Apps, yang berfungsi untuk memperkuat narasi, membangun awareness, serta menyebarkan insight industri Umrah & Haji yang aman. Selain itu, AMUHI Digital menjadi ruang bagi sponsor dan mitra untuk melakukan kolaborasi kampanye dan co-branding.',
    icon: digitalIcon,
    heroImage: digitalHero,
    detail: {
      mainFunction: 'Menjadi pusat komunikasi digital, branding, dan engagement publik melalui berbagai kanal media dan aplikasi AMUHI.',
      mainImage: digitalMain,
      valueCreated: [
        'Meningkatkan brand awareness & digital presence.',
        'Menciptakan engagement antara anggota & publik.',
        'Menjadi channel promosi & partnership yang kredibel.',
      ],
      highlights: [
        { title: 'Multi-channel', subtitle: 'News, Podcast, Apps', icon: 'globe' },
        { title: 'Creative Studio', subtitle: 'Video & Audio', icon: 'book' },
        { title: 'Campaign Ready', subtitle: 'Paid & Organic', icon: 'check' },
        { title: 'Analytics', subtitle: 'Live Dashboard', icon: 'bars' },
      ],
      curriculum: {
        title: 'Program Pillars',
        pillarLabel: 'PILLAR',
        description: 'Pilar komunikasi digital yang membangun awareness dan engagement.',
        pillars: [
          {
            label: 'PILLAR 1',
            title: 'Brand Awareness & Presence',
            description: 'Memperkuat brand awareness melalui narasi digital yang konsisten.',
          },
          {
            label: 'PILLAR 2',
            title: 'Engagement Anggota & Publik',
            description: 'Membangun interaksi antara anggota dan publik lewat konten multi-kanal.',
          },
          {
            label: 'PILLAR 3',
            title: 'Promosi & Partnership',
            description: 'Menjadi kanal promosi dan kolaborasi kampanye yang kredibel.',
          },
        ],
        benefits: [
          'Akses kanal resmi AMUHI',
          'Produksi konten untuk awareness dan edukasi',
          'Kolaborasi kampanye dan co-branding',
        ],
      },
      testimonials: [
        {
          text: 'Tampil di podcast AMUHI membuat brand kami lebih dipercaya jamaah dan partner.',
          name: 'Fikri Maulana',
          role: 'CMO travel umrah',
        },
        {
          text: 'Kampanye digitalnya rapi, CTA jelas, dan kami melihat lonjakan lead berkualitas.',
          name: 'Sofia Azzahra',
          role: 'Head of Marketing',
        },
        {
          text: 'Tim editorial memastikan pesan kami sesuai regulasi sehingga aman untuk publikasi.',
          name: 'Ari Wibowo',
          role: 'Corporate Communications',
        },
      ],
      registrationFeatures: [
        { title: 'Content Strategy Call', description: 'Sesi kurasi angle dan CTA untuk brand Anda.', icon: 'chat' },
        { title: 'Performance Reporting', description: 'Laporan reach, engagement, dan leads.', icon: 'bars' },
      ],
    },
    overview: {
      about: 'AMUHI Digital adalah platform media digital yang menyediakan saluran komunikasi strategis untuk industri Umrah dan Haji. Kami memproduksi konten berkualitas tinggi untuk edukasi pasar dan meningkatkan brand awareness.',
      vision: 'Menjadi media digital terdepan untuk industri Umrah dan Haji di Indonesia.',
      mission: 'Menyebarkan informasi berkualitas dan edukasi kepada masyarakat luas tentang industri Umrah dan Haji.',
    },
    features: [
      {
        title: 'Brand Awareness',
        description: 'Meningkatkan brand awareness dan digital presence.',
      },
      {
        title: 'Engagement',
        description: 'Menciptakan engagement antara anggota & publik.',
      },
      {
        title: 'Promosi & Partnership',
        description: 'Channel promosi dan partnership yang kredibel.',
      },
    ],
    benefits: [
      { title: 'Awareness', description: 'Brand awareness dan digital presence meningkat.' },
      { title: 'Engagement', description: 'Interaksi yang lebih kuat antara anggota dan publik.' },
      { title: 'Promosi', description: 'Channel promosi & partnership yang kredibel.' },
    ],
    howItWorks: [
      { step: 1, title: 'Rancang Pesan', description: 'Susun pesan brand dan konten kunci.' },
      { step: 2, title: 'Publikasi Multi-Kanal', description: 'Sebarkan melalui media AMUHI (news, podcast, social, app).' },
      { step: 3, title: 'Engage & Ukur', description: 'Bangun engagement lalu ukur kinerja kampanye.' },
    ],
    targetAudience: {
      title: 'Siapa yang Dapat Memanfaatkan AMUHI Digital?',
      segments: [
        'Travel agent yang ingin brand exposure',
        'Content creators di industri Umrah',
        'Marketing teams',
        'Influencers dan thought leaders',
        'Media partners',
      ],
    },
    faqs: [
      { question: 'Bagaimana cara submit artikel?', answer: 'Anda dapat mengirimkan artikel melalui form submission di website kami atau email ke redaksi.' },
      { question: 'Apakah ada biaya untuk publikasi?', answer: 'Publikasi organik gratis. Untuk sponsored content dan advertising, terdapat paket dengan biaya tertentu.' },
      { question: 'Berapa lama proses review konten?', answer: 'Review membutuhkan waktu 3-5 hari kerja. Konten urgent dapat diproses lebih cepat.' },
      { question: 'Channel apa saja yang digunakan?', answer: 'Kami menggunakan website, social media (Instagram, Facebook, YouTube, TikTok), newsletter, dan podcast.' },
      { question: 'Bagaimana cara track performance?', answer: 'Kami menyediakan dashboard analytics untuk partner yang dapat diakses secara real-time.' },
    ],
    cta: {
      primary: { text: 'Submit Konten', action: '#submit' },
      secondary: { text: 'Subscribe Newsletter', action: '#subscribe' },
      tertiary: { text: 'Partnership Inquiries', action: '#partner' },
    },
    relatedPrograms: ['network', 'academy'],
  },
];

export function getProgramBySlug(slug: string): ProgramData | undefined {
  return programs.find((p) => p.slug === slug);
}

export function getRelatedPrograms(programId: string): ProgramData[] {
  const program = programs.find((p) => p.id === programId);
  if (!program || !program.relatedPrograms) return [];
  return programs.filter((p) => program.relatedPrograms?.includes(p.id));
}
