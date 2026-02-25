import React from "react";
import Container from "../components/layout/Container";

const benefits = [
  {
    title: "Better Fat-Loss Support",
    desc: "Burns fat more efficiently so results actually show",
    icon: "/assets/images/what-this-program-helps-you-achieve-01.svg",
  },
  {
    title: "Improved Energy Levels",
    desc: "Stay active all day without feeling drained",
    icon: "/assets/images/what-this-program-helps-you-achieve-05.svg",
  },
  {
    title: "Structured Daily Routine",
    desc: "A clear plan to follow every single day",
    icon: "/assets/images/what-this-program-helps-you-achieve-03.svg",
  },
  {
    title: "Stronger Consistency",
    desc: "Stay on track even when motivation is low",
    icon: "/assets/images/what-this-program-helps-you-achieve-04.svg",
  },
  {
    title: "More Confidence In Your Body",
    desc: "See real changes and grow your self-belief daily",
    icon: "/assets/images/what-this-program-helps-you-achieve-02.svg",
  },
];

const Benefits = () => {
  return (
    <section className="bg-[#ff6600] sm:py-14 py-6">
      <Container>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <div className="lg:w-5/12 text-white text-center lg:text-left">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black leading-tight text-[#000000]">
               WHAT THIS SYSTEM
              <br />
              <span className="text-white opacity-100">HELPS YOU ACHIEVE</span>
            </h2>
          
            {/* Arrow / Line → desktop only */}
            <div className="hidden lg:block h-2 w-24 bg-white mt-8 rounded-full"></div>

            <p className="lg:mt-8 mt-4 text-white/90 lg:text-xl font-medium max-w-sm mx-auto lg:mx-0">
              Ignite Fat Burner + our Fitness Blueprint helps you fix the basics, stay consistent, and move in the right direction.
            </p>
          </div>

          <div className="lg:w-7/12 grid sm:gap-3 gap-0 ">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="group flex items-center gap-6 p-2 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center rounded-full border-2 border-white bg-transparent text-white text-2xl sm:text-3xl group-hover:bg-white group-hover:text-[#ff6600] transition-all duration-500 shadow-lg">
                  <img
                    src={b.icon}
                    alt=""
                    className="h-[70%] brightness-0 invert  group-hover:invert-0   transition-all duration-500"
                  />
                </div>

                <div className="border-l-2 border-white/30 pl-6 py-2 group-hover:border-white transition-all duration-500">
                  <h3 className="text-2xl sm:text-2xl font-bold text-white mb-1">
                    {b.title}
                  </h3>
                  <p className="text-white/90 text-base sm:text-lg leading-snug">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Benefits;
