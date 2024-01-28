import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

const TestimonialSlier = () => {
  return (
    <Swiper
      spaceBetween={50}
      //   slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="testimonial-card">
          <h1>
            <i class="fa-solid fa-quote-left"></i>
          </h1>
          <h4>
            When I cannot fall asleep, I turn on this app and am out within 5
            minutes.
          </h4>
          <p>Brandy from Houston</p>
          <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial-card">
          <h1>
            <i class="fa-solid fa-quote-left"></i>
          </h1>
          <h4>
            When I cannot fall asleep, I turn on this app and am out within 5
            minutes.
          </h4>
          <p>Brandy from Houston</p>
          <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial-card">
          <h1>
            <i class="fa-solid fa-quote-left"></i>
          </h1>
          <h4>
            When I cannot fall asleep, I turn on this app and am out within 5
            minutes.
          </h4>
          <p>Brandy from Houston</p>
          <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="testimonial-card">
          <h1>
            <i class="fa-solid fa-quote-left"></i>
          </h1>
          <h4>
            When I cannot fall asleep, I turn on this app and am out within 5
            minutes.
          </h4>
          <p>Brandy from Houston</p>
          <div>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default TestimonialSlier
