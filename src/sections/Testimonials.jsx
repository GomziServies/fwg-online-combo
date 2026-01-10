import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../components/layout/Container";
const Slider = SliderImport.default || SliderImport;
import VideoSection from "../sections/Videos";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // desktop
    slidesToScroll: 1,
    centerMode: true, // important for peek
    centerPadding: "40px", // peek width
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "30px",
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
          arrows: false,
        },
      },
    ],
  };

  const data = [
    { image: "/src/assets/images/img-1.jpeg" },
    { image: "/src/assets/images/img-2.jpeg" },
    { image: "/src/assets/images/img-3.jpeg" },
    { image: "/src/assets/images/img-4.jpeg" },
    { image: "/src/assets/images/img-5.jpeg" },
    { image: "/src/assets/images/img-6.jpeg" },
    { image: "/src/assets/images/img-7.jpeg" },
    { image: "/src/assets/images/img-8.jpeg" },
  ];

  return (
    <section className="bg-[#ff6600] py-14">
      <Container className="text-center">
        <h2 className="mt-4 font-heading text-4xl font-extrabold leading-tight lg:text-4xl">
          Real Results From
          <span className="text-[#fff]"> Real People</span>
        </h2>

        <div className="mt-12">
          <Slider {...settings}>
            {data.map((item, index) => (
              <div key={index} className="px-2">
                <div
                  className="mx-auto rounded-2xl bg-white shadow-lg flex items-center justify-center 
                w-full max-w-[280px] h-[380px] 
                sm:max-w-[320px] sm:h-[440px] 
                md:max-w-none md:w-80 md:h-110"
                >
                  <img
                    src={item.image}
                    alt={`Image ${index + 1}`}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>

      <VideoSection />
    </section>
  );
};

export default Testimonials;
