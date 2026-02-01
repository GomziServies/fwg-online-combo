import React from "react";
import Container from "../components/layout/Container";
import WhoFor from "./WhoFor";

const points = [
  {
    title: "Metabolism Support ",
    desc: " Ingredients that that help your body tap into stored fat. ",
  },
  {
    title: "Energy & Focus",
    desc: " Feel energized for daily activity and workouts. ",
  },
  {
    title: "Tasty & Easy To Use ",
    desc: "Fruit-Punch / Green Apple — mix & sip. ",
  },
];

const BusinessChange = () => {
  return (
    <section className="bg-[#FF6600] py-6 sm:py-24 mt-10 ">
      <Container>
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-extrabold leading-tight lg:text-4xl">
            WHY BUY
            <span className="text-[#fff]"> Ignite Fat Burner</span>
          </h2>
          {/* <span className="block text-xl sm:text-xl font-semibold tracking-widest text-white/80 mt-3">
            ( Quick Proof )
          </span> */}
          <p className="text-center text-white text-xl mt-4">
            Ignite Fat Burner is formulated to support your natural fat-burning pathways,
            increase energy during the day and help you burn stubborn body fat —
            without extreme diets or hundreds of gym hours. Paired with our free
            Fitness Blueprint, it's a simple combo that gets results.{" "}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {points.map((item) => (
            <div
              key={item.title}
              className="
        group
        rounded-xl
        border border-gray-200
        bg-white
        p-3
        sm:p-6
        text-center
        transition-all
        duration-300
        shadow-xl
        hover:shadow-2xl
        ease-out
        shadow-sm
        hover:-translate-y-2
      "
            >
              {/* Accent line */}
              <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[#FF6600]/80 transition group-hover:bg-[#FF6600]" />

              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* What This Ignite Will Help You Achieve */}
      <WhoFor />
    </section>
  );
};

export default BusinessChange;
