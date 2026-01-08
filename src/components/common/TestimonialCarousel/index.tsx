import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './TestimonialCarousel.css';

interface Testimonial {
    text: string;
    name: string;
    role: string;
}

interface TestimonialCarouselProps {
    testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
    return (
        <div className="testimonial-carousel-wrapper">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className="testimonial-swiper"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <article className="testimonial-card">
                            <div className="testimonial-quote-icon">
                                <svg width="28" height="20" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 17.1429V0H14.2857V17.1429L8.57143 30H0L5.71429 17.1429H0ZM22.8571 17.1429V0H37.1429V17.1429L31.4286 30H22.8571L28.5714 17.1429H22.8571Z" fill="currentColor" />
                                </svg>
                            </div>
                            <p className="testimonial-text">{testimonial.text}</p>
                            <div className="testimonial-separator"></div>
                            <div className="testimonial-info">
                                <h4 className="testimonial-name">{testimonial.name}</h4>
                                <p className="testimonial-role">{testimonial.role}</p>
                            </div>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
