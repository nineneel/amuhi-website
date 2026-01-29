import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./EventCarousel.css";

interface EventItem {
  image: string;
  title: string;
  description: string;
  impact?: string;
  isCommingSoon?: boolean;
}

interface EventCarouselProps {
  events: EventItem[];
}

export default function EventCarousel({ events }: EventCarouselProps) {
  return (
    <div className="event-carousel-wrapper">
      <Swiper
        modules={[Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        className="event-swiper"
      >
        {events.map((event, index) => (
          <SwiperSlide key={index}>
            <article className="event-card">
              <div
                className="event-card-background"
                style={{ backgroundImage: `url(${event.image})` }}
              />
              <div className="event-card-overlay" />
              <div className="event-content">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                <div className="event-spacer" />
                {!event.isCommingSoon && (
                  <a href="#" className="event-cta">
                    I'm Interest
                  </a>
                )}
                {event.isCommingSoon && (
                  <div className="event-cta event-cta-secondary">
                    Comming Soon
                  </div>
                )}
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
