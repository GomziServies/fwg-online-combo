import React from "react";
import Container from "../components/layout/Container";

const benefits = [
  {
    title: "Weight Loss",
    desc: "Lose 4 to 5 Kg",
    icon: "/src/assets/images/what-this-program-helps-you-achieve-01.svg",
  },
  {
    title: "Body Toning",
    desc: "Reduce belly fat & tone the body for a sharper look",
    icon: "/src/assets/images/what-this-program-helps-you-achieve-02.svg",
  },
  {
    title: "Healthy Habits",
    desc: "Build sustainable eating habits that last a lifetime",
    icon: "/src/assets/images/what-this-program-helps-you-achieve-03.svg",
  },
  {
    title: "Confidence",
    desc: "Increase confidence & self-belief in your daily life",
    icon: "/src/assets/images/what-this-program-helps-you-achieve-04.svg",
  },
  {
    title: "Energy Boost",
    desc: "Reduce fatigue and significantly boost your energy levels",
    icon: "/src/assets/images/what-this-program-helps-you-achieve-05.svg",
  },
];

const Benefits = () => {
  return (
    <section className="bg-[#ff6600] sm:py-14 py-6">
      <Container>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <div className="lg:w-5/12 text-white text-center lg:text-left">
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-black leading-tight text-[#000000]">
              What This Ignite Fat Burner
              <br />
              <span className="text-white opacity-100">Helps You Achieve</span>
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
