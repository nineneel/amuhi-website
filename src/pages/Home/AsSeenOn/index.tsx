import './AsSeenOn.css';

import idnTimesImage from "../../../assets/as-seen-on/idn-times.png";
import tribunNewsImage from "../../../assets/as-seen-on/tribun-news.png";
import republikaImage from "../../../assets/as-seen-on/republika.png";
import merdekaImage from "../../../assets/as-seen-on/merdeka.png";

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
];

export default function AsSeenOn() {
    return (
        <section id="as-seen-on" className="as-seen-on section">
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
