import React, { useState } from "react";
import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../components/layout/Container";

const Slider = SliderImport.default || SliderImport;

const VideoCard = ({ item, index, activeVideo, setActiveVideo }) => {
  const isStarted = activeVideo === index;

  const getYouTubeId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const isInstagram = item.video.includes("instagram.com");
  const videoId = getYouTubeId(item.video);

  const getInstagramEmbed = (url) => {
    const baseUrl = url.split("?")[0];
    const finalUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
    return `${finalUrl}embed`;
  };

  return (
    <div className="px-3">
      <div
        className="relative mx-auto overflow-hidden rounded-[1.5rem] bg-black shadow-2xl 
                      aspect-[9/15] w-[280px] max-w-[250px] 
                      sm:aspect-[9/16] sm:max-w-none border-[4px] sm:border-[6px] border-white group 
                      "
      >
        {!isStarted ? (
          <div
            className="absolute inset-0 z-10 cursor-pointer"
            onClick={() => setActiveVideo(index)}
          >
            <img
              src={item.thumbnail}
              className="h-full w-full object-cover"
              alt="thumbnail"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                <div className="ml-1 border-y-[12px] border-y-transparent border-l-[22px] border-l-[#ff6600]"></div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {isInstagram ? (
              <iframe
                className="w-full h-full"
                src={getInstagramEmbed(item.video)}
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                allow="encrypted-media"
                title="Instagram Reel"
              ></iframe>
            ) : videoId ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1&rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <video
                className="w-full h-full object-cover"
                src={item.video}
                autoPlay
                playsInline
                controls
                loop
              ></video>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "40px",
    beforeChange: () => setActiveVideo(null),
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: { slidesToShow: 2, centerPadding: "30px" },
      // },
      // { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: "15px" } },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "15px",
          arrows: false,
        },
      },
    ],
  };

  const data = [
    {
      video: "/src/assets/videos/reel-01.mp4",
      thumbnail: "/src/assets/images/logo2.png",
    },
    {
      video: "/src/assets/videos/reel-02.mp4",
      thumbnail: "/src/assets/images/logo2.png",
    },
    {
      video: "/src/assets/videos/reel-03.mp4",
      thumbnail: "/src/assets/images/logo2.png",
    },
    {
      video: "/src/assets/videos/reel-04.mp4",
      thumbnail: "/src/assets/images/logo2.png",
    },
    {
      video: "/src/assets/videos/reel-05.mp4",
      thumbnail: "/src/assets/images/logo2.png",
    },
    {
      video: "/src/assets/videos/reel-06.mp4",
      thumbnail: "/src/assets/images/logo2.png",
    },
  ];

  return (
    <section className="bg-[#ff6600] py-16 overflow-hidden">
      <Container className="text-center">
        <h2 className="font-heading text-4xl font-extrabold leading-tight text-white lg:text-4xl">
          Real Results From
          <span className="block text-black"> Real People</span>
        </h2>
        <div className="mt-12">
          <Slider {...settings}>
            {data.map((item, index) => (
              <VideoCard
                key={index}
                index={index}
                item={item}
                activeVideo={activeVideo}
                setActiveVideo={setActiveVideo}
              />
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default VideoSection;
