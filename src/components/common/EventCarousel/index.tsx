import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './EventCarousel.css';

interface EventItem {
    image: string;
    title: string;
    description: string;
    impact?: string;
}

interface EventCarouselProps {
    events: EventItem[];
}

export default function EventCarousel({ events }: EventCarouselProps) {
    return (
        <div className="event-carousel-wrapper">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1200: { slidesPerView: 3 },
                }}
                className="event-swiper"
            >
                {events.map((event, index) => (
                    <SwiperSlide key={index}>
                        <article className="event-card">
                            <div className="event-card-background" style={{ backgroundImage: `url(${event.image})` }} />
                            <div className="event-card-overlay" />
                            <div className="event-content">
                                <h3 className="event-title">{event.title}</h3>
                                <p className="event-description">{event.description}</p>
                                {event.impact && (
                                    <p className="event-impact">
                                        <strong>Impact:</strong> {event.impact}
                                    </p>
                                )}
                                <div className="event-spacer" />
                                <a href="#" className="event-cta">
                                    LEARN MORE
                                </a>
                            </div>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
