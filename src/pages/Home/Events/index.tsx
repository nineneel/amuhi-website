import forumImg from '../../../assets/events/forum.jpg';
import fairImg from '../../../assets/events/fair.jpg';
import consortiumImg from '../../../assets/events/consortium.jpg';
import EventCarousel from '../../../components/common/EventCarousel';
import './Events.css';

const events = [
    {
        image: forumImg,
        title: 'AMUHI International Umrah Hajj Forum (Tech & Future)',
        description: 'Forum global berbasis teknologi & inovasi.',
        impact: 'Menarik sponsor & mitra internasional (maskapai, fintech, hotel).',
    },
    {
        image: fairImg,
        title: 'AMUHI International Umrah Hajj Fair',
        description: 'Pameran lintas negara industri travel & supplier.',
        impact: 'Menjadi event flagship sponsor & networking premium.',
    },
    {
        image: consortiumImg,
        title: 'AMUHI Konsorsium Umrah & Haji',
        description: 'Kolaborasi antar travel untuk efisiensi & skala bisnis.',
        impact: 'Meningkatkan daya saing & peluang investasi anggota.',
    },
    {
        image: consortiumImg,
        title: 'AMUHI Protect Program',
        description: 'Perlindungan anggota & jamaah dengan sistem digital.',
        impact: 'Meningkatkan kepercayaan publik & positioning asosiasi.',
    },
];

export default function Events() {
    return (
        <section id="events" className="events-section section">
            <div className="container">
                <h2 className="section-title">OUR EVENTS</h2>
                <EventCarousel events={events} />
            </div>
        </section>
    );
}
