import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import VideoSection from "./Videos";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Container from "../components/layout/Container";

import img1 from "../assets/images/img-1.jpeg";
import img2 from "../assets/images/img-2.jpeg";
import img3 from "../assets/images/img-3.jpeg";
import img4 from "../assets/images/img-4.jpeg";
import img5 from "../assets/images/img-5.jpeg";
import img6 from "../assets/images/img-6.jpeg";
import img7 from "../assets/images/img-7.jpeg";
import img8 from "../assets/images/img-8.jpeg";

const data = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
  { image: img6 },
  { image: img7 },
  { image: img8 },
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
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            navigation
            pagination={{
              clickable: true,
            }}
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

      {/* Testimonials videos */}
      <VideoSection />
    </section>
  );
};

export default Testimonials;
