import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BannerImg from "../../assets/testimonialimg.jpg";
import { Pagination, } from "swiper/modules";
import "swiper/css/pagination";



const Testimonial = () => {
  return (
    <section style={{ backgroundImage: `url(${BannerImg})` }}>
      <div className="bg-black/70">
        <div className="md:w-2xl mx-auto container py-16 px-12">
          <h1 className="text-2xl text-yellow-300 text-center pb-5 text-bold uppercase">
            Testimonial
          </h1>
          <Swiper
            modules={[ Pagination,]}
            spaceBetween={50}
            slidesPerView={1}
            pagination = {{clickable:true}}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className="text-center space-y-2 text-white">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <h1 className="text-xl font-bold">Johny Vino</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center space-y-2 text-white">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <h1 className="text-xl font-bold">Johny Vino</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center space-y-2 text-white">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <h1 className="text-xl font-bold">Johny Vino</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="text-center space-y-2 text-white">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <h1 className="text-xl font-bold">Johny Vino</h1>
              </div>
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonial 