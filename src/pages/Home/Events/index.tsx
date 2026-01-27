import forumImg from '../../../assets/events/forum.png';
import fairImg from '../../../assets/events/fair.jpg';
import consortiumImg from '../../../assets/events/consortium.jpg';
import kempinski from '../../../assets/events/kempinski.jpeg';
import EventCarousel from '../../../components/common/EventCarousel';
import './Events.css';

const events = [
    {
        image: kempinski,
        title: 'Mukernas 1 - AMUHI 2026',
        description: 'Profesionalisme, Kolaborasi, dan Inovasi di Era Digital',
        isCommingSoon: false,
    },
    {
        image: forumImg,
        title: 'AMUHI International Umrah Hajj Forum (Tech & Future)',
        description: 'Forum global berbasis teknologi & inovasi.',
        isCommingSoon: true,
    },
    {
        image: fairImg,
        title: 'AMUHI International Umrah Hajj Fair',
        description: 'Pameran lintas negara industri travel & supplier.',
        isCommingSoon: true,
    },
    {
        image: consortiumImg,
        title: 'AMUHI Konsorsium Umrah & Haji',
        description: 'Kolaborasi antar travel untuk efisiensi & skala bisnis.',
        isCommingSoon: true,
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
