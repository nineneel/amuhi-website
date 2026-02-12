import './AsSeenOn.css';

import idnTimesImage from "../../../assets/as-seen-on/idn-times.png";
import tribunNewsImage from "../../../assets/as-seen-on/tribun-news.png";
import republikaImage from "../../../assets/as-seen-on/republika.png";
import merdekaImage from "../../../assets/as-seen-on/merdeka.png";

import logoDmiTv from "../../../assets/as-seen-on/logo/dmi-tv.png";
import logoIdnTimes from "../../../assets/as-seen-on/logo/idn-times.png";
import logoInilah from "../../../assets/as-seen-on/logo/inilah.webp";
import logoMerdeka from "../../../assets/as-seen-on/logo/merdeka.png";
import logoRepublika from "../../../assets/as-seen-on/logo/republika.png";
import logoTribunNews from "../../../assets/as-seen-on/logo/tribun-news.webp";

const logos = [
    logoDmiTv, logoIdnTimes, logoInilah,
    logoMerdeka, logoRepublika, logoTribunNews,
];

import screenshot1 from "../../../assets/as-seen-on/screenshot-1.png";
import screenshot2 from "../../../assets/as-seen-on/screenshot-2.png";
import screenshot3 from "../../../assets/as-seen-on/screenshot-3.png";
import screenshot4 from "../../../assets/as-seen-on/screenshot-4.png";
import screenshot5 from "../../../assets/as-seen-on/screenshot-5.png";
import screenshot6 from "../../../assets/as-seen-on/screenshot-6.png";
import screenshot7 from "../../../assets/as-seen-on/screenshot-7.png";
import screenshot8 from "../../../assets/as-seen-on/screenshot-8.png";

const articles = [
    {
        image: tribunNewsImage,
        source: 'Tribun News',
        title: 'Standarisasi Kompetensi Lewat Pendidikan Arah Baru Industri Umrah dan Haji',
        description:
            'Pendidikan dan standarisasi kompetensi menjadi arah baru dalam membangun industri umrah dan haji yang profesional dan terpercaya.',
        link: 'https://www.tribunnews.com/haji/7771446/standarisasi-kompetensi-lewat-pendidikan-arah-baru-industri-umrah-dan-haji',
    },
    {
        image: republikaImage,
        source: 'Republika',
        title: 'Transformasi Digital AMUHI: Ekosistem Terpadu untuk Umrah dan Haji',
        description:
            'Industri perjalanan Umrah dan Haji di Indonesia memasuki fase perubahan besar dengan pendekatan digital dan layanan terstandar.',
        link: 'https://khazanah.republika.co.id/berita/t6srpt430/transformasi-digital-amuhi-ekosistem-terpadu-untuk-umrah-dan-haji-%c2%a0',
    },
    {
        image: idnTimesImage,
        source: 'IDN Times',
        title: 'Gen Z dan Milenial Mulai Ikut Ekosistem Haji dan Umrah',
        description:
            'Transformasi digital meluas ke layanan ibadah. Generasi muda dengan literasi digital tinggi membangun platform aman untuk mengatasi masalah lama di industri haji dan umrah.',
        link: 'https://www.idntimes.com/news/indonesia/gen-z-dan-milenial-mulai-ikut-ekosistem-haji-dan-umrah-00-rgfwk-vyj41v',
    },
    {
        image: merdekaImage,
        source: 'Merdeka',
        title: 'Sinergi Lintas Sektor sebagai Fondasi Baru Industri Umrah dan Haji',
        description:
            'Inovasi dan kolaborasi menjadi dorongan utama untuk melahirkan ekosistem perjalanan ibadah yang efisien dan terpercaya.',
        link: 'https://www.merdeka.com/peristiwa/sinergi-lintas-sektor-sebagai-fondasi-baru-industri-umrah-dan-haji-indonesia-508548-mvk.html',
    },
    {
        image: screenshot1,
        source: 'YouTube',
        title: 'Indonesia Strengthens Cross-Border Synergy: Umrah and Hajj Cooperation',
        description:
            'Indonesia akan menggelar Haj and Umrah International Travel Market atau HUITM 2026. Direncanakan berlangsung di 6 negara.',
        link: 'https://youtu.be/6h1vtxrXF3Y',
    },
    {
        image: screenshot2,
        source: 'Instagram',
        title: 'Indonesia Perkuat Kerja Sama Internasional Sektor Umrah dan Haji',
        description:
            'Indonesia akan menggelar Haj and Umrah International Travel Market atau HUITM 2026 di 6 negara, seperti Malaysia, Uzbekistan, serta Maroko.',
        link: 'https://www.instagram.com/reel/DT-c2xhklUP/?igsh=MWl6bnp1andrdTFwaw==',
    },
    {
        image: screenshot3,
        source: 'DMI TV',
        title: 'Sinergi Lintas Negara Dorong Umrah–Haji Plus Pariwisata, Indonesia Siap Jadi Poros',
        description:
            'Indonesia kian memantapkan perannya sebagai salah satu poros utama pengembangan program umrah dan haji plus berbasis pariwisata.',
        link: 'https://dmitv.id/sinergi-lintas-negara-dorong-umrah-haji-plus-pariwisata-indonesia-siap-jadi-poros-di-musim-low-season/',
    },
    {
        image: screenshot4,
        source: 'YouTube',
        title: 'Indonesia-Uzbekistan Perkuat Kerja Sama Umrah dan Pariwisata',
        description:
            'Pemerintah Uzbekistan memberikan subsidi khusus bagi wisatawan asal Indonesia melalui program Umrah Plus.',
        link: 'https://youtu.be/HrfJhID3f9Q?si=HycqprpszGG9WmKI',
    },
    {
        image: screenshot5,
        source: 'Inilah.com',
        title: 'HUITM 2026: Indonesia-Uzbekistan Sepakati Penerbangan Langsung Jakarta-Tashkent',
        description:
            'Indonesia dan Uzbekistan sepakati penerbangan langsung Jakarta-Tashkent dalam ajang HUITM 2026 untuk permudah akses jamaah.',
        link: 'https://mozaik.inilah.com/haji-dan-umroh/huitm-2026-indonesia-uzbekistan-sepakati-penerbangan-langsung-jakarta-tashkent',
    },
    {
        image: screenshot6,
        source: 'Inilah.com',
        title: 'Gus Irfan: Perputaran Uang Haji dan Umrah Indonesia Capai Rp50 Triliun per Tahun',
        description:
            'Perputaran uang dalam ekosistem haji dan umrah Indonesia tercatat mencapai angka fantastis Rp50 triliun per tahun.',
        link: 'https://mozaik.inilah.com/haji-dan-umroh/gus-irfan-perputaran-uang-haji-dan-umrah-indonesia-capai-rp50-triliun-per-tahu',
    },
    {
        image: screenshot7,
        source: 'Inilah.com',
        title: 'AMUHI Tancap Gas Gelar Pemasaran Travel Haji dan Umrah di 6 Negara',
        description:
            'AMUHI gencar melakukan pemasaran travel haji dan umrah di 6 negara termasuk Uzbekistan yang siap buka penerbangan langsung dari Jakarta.',
        link: 'https://mozaik.inilah.com/haji-dan-umroh/amuhi-tancap-gas-gelar-pemasaran-travel-haji-and-umrah-6-negara-uzbekistan-siap-buka-penerbangan-langsung-dari-jakarta',
    },
    {
        image: screenshot8,
        source: 'YouTube',
        title: 'Indonesia Perkuat Kerja Sama Umrah Plus Dengan Uzbekistan',
        description:
            'Pemerintah Uzbekistan resmi memberikan subsidi khusus bagi wisatawan asal Indonesia melalui program Umrah Plus.',
        link: 'https://youtu.be/mrv4AWt1vac?si=4V5jqbslorvI-xnq',
    },
];

export default function AsSeenOn() {
    return (
        <section id="as-seen-on" className="as-seen-on section">
            <div className="as-seen-on-marquee">
                <div className="as-seen-on-marquee-track">
                    {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                        <img key={index} src={logo} alt="" className="as-seen-on-marquee-logo" />
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="as-seen-on-wrapper">
                    <div className="as-seen-on-header">
                        <h2 className="as-seen-on-title">
                            AMUHI di
                            <br />
                            Media Nasional
                        </h2>
                        <p className="as-seen-on-subtitle">
                            Liputan dan berita terkini tentang langkah AMUHI dalam mentransformasi
                            industri Umrah dan Haji Indonesia.
                        </p>
                    </div>

                    <div className="as-seen-on-articles">
                        {articles.map((article, index) => (
                            <article key={index} className="article-card">
                                <div className="article-image">
                                    <img src={article.image} alt={article.title} />
                                </div>
                                <div className="article-content">
                                    <span className="article-source">{article.source}</span>
                                    <h3 className="article-title">{article.title}</h3>
                                    <p className="article-description">{article.description}</p>
                                    <a
                                        href={article.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="article-link"
                                    >
                                        Baca selengkapnya
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
