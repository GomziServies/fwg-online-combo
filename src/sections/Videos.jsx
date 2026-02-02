import React, { useState } from "react";
import Container from "../components/layout/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// VideoCard Component
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

  return (
    <div className="px-2 outline-none">
      <div className="relative mx-auto overflow-hidden rounded-[2rem] bg-black shadow-2xl aspect-[9/16] w-full max-w-[260px] sm:max-w-[280px] border-[5px] border-white group">
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
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/40 transition-all">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                <div className="ml-1 border-y-[10px] border-y-transparent border-l-[18px] border-l-[#ff6600]"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full" key={`video-${index}`}>
            {isInstagram ? (
              <iframe
                className="w-full h-full"
                src={`${item.video.split("?")[0]}${
                  item.video.endsWith("/") ? "" : "/"
                }embed`}
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                allow="encrypted-media"
                title="Instagram Reel"
              ></iframe>
            ) : videoId ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
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
                onPause={() => setActiveVideo(null)}
              ></video>
            )}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveVideo(null);
              }}
              className="absolute top-4 right-4 z-30 bg-black/60 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black transition-colors"
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Main VideoSection
const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      video: "/assets/videos/reel-01.mp4",
      thumbnail: "/assets/images/reel-img-01.png",
    },
    {
      video: "/assets/videos/reel-02.mp4",
      thumbnail: "/assets/images/reel-img-02.png",
    },
    {
      video: "/assets/videos/reel-03.mp4",
      thumbnail: "/assets/images/reel-img-03.png",
    },
    {
      video: "/assets/videos/reel-04.mp4",
      thumbnail: "/assets/images/reel-img-04.png",
    },
    {
      video: "/assets/videos/reel-05.mp4",
      thumbnail: "/assets/images/reel-img-06.png",
    },
    {
      video: "/assets/videos/reel-06.mp4",
      thumbnail: "/assets/images/reel-img-06.png",
    },
  ];

  return (
    <section className="bg-[#ff6600] py-14 lg:-mb-30 -mb-20">
      <Container className="text-center">
        <h2 className="mt-4 font-heading text-4xl font-extrabold leading-tight lg:text-4xl">
          Real Results From
          <span className="text-white"> Real People</span>
        </h2>

        <div className="mt-12 overflow-visible">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={700}
            breakpoints={{
              0: { slidesPerView: 1.4, centeredSlides: true },
              768: { slidesPerView: 2, centeredSlides: false },
              1280: { slidesPerView: 3, centeredSlides: false },
            }}
          >
            {videos.map((item, index) => (
              <SwiperSlide key={index}>
                <VideoCard
                  index={index}
                  item={item}
                  activeVideo={activeVideo}
                  setActiveVideo={setActiveVideo}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default VideoSection;
