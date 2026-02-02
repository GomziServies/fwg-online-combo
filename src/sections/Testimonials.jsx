import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import VideoSection from "./Videos";
import "swiper/css";

import Container from "../components/layout/Container";

const data = [
  { image: "/assets/images/img-1.jpeg" },
  { image: "/assets/images/img-2.jpeg" },
  { image: "/assets/images/img-3.jpeg" },
  { image: "/assets/images/img-4.jpeg" },
  { image: "/assets/images/img-5.jpeg" },
  { image: "/assets/images/img-6.jpeg" },
  { image: "/assets/images/img-7.jpeg" },
  { image: "/assets/images/img-8.jpeg" },
];

const Testimonials = () => {
  return (
    <section className="bg-[#ff6600] sm:py-14 py-8">
      <Container className="text-center">
        <h2 className="sm:mt-4 font-heading text-4xl font-extrabold leading-tight lg:text-4xl">
          Real Results From
          <span className="text-white"> Real People</span>
        </h2>

        <div className="mt-10 absalute overflow-visible">
          <Swiper
          className="sm:mb-[-60px] lg:mb-[-70px] mb-[-120px]"
            modules={[Autoplay]}
            spaceBetween={24}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={700}
            breakpoints={{
              0: { slidesPerView: 1.2, centeredSlides: true }, // mobile: thodu side preview
              768: { slidesPerView: 2, centeredSlides: false }, // tablet: exactly 2 slides, no half
              1280: { slidesPerView: 3, centeredSlides: false }, // desktop: 3 slides
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="
                    mx-auto relative rounded-2xl bg-white shadow-lg 
                    flex items-center justify-center
                    w-full h-[380px]
                    sm:max-w-[320px] sm:h-[440px]
                    md:h-[440px]
                  "
                >
                  <img
                    src={item.image}
                    alt={`Image ${index + 1}`}
                    className="h-full w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
