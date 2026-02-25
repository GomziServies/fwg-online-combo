import React from "react";
import Container from "../components/layout/Container";
import WhoFor from "./WhoFor";

const points = [
  {
    title: "Ignite Fat Burner",
    desc: "Enhances metabolism and energy to accelerate natural fat burning.",
  },
  {
    title: "Free Fitness Blueprint",
    desc: "Instant email access to a clear, step-by-step fat loss roadmap.",
  },
  {
    title: "Daily Live Training",
    desc: "Daily 1-hour live coaching to ensure consistency, accountability, and real results.",
  },
];

const BusinessChange = () => {
  return (
    <section className="bg-[#FF6600] py-6 sm:py-24 mt-10 ">
      <Container>
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-extrabold leading-tight lg:text-4xl">
            Introducing 
            <span className="text-[#fff]"> The Complete System </span>
          </h2>
          <span className="block text-lg sm:text-xl font-semibold tracking-widest text-white/80 mb-3 uppercase">
           One Product. One Blueprint. One Daily Routine.
          </span>
          {/* <p className="text-center text-white text-xl mt-4 max-w-2xl mx-auto">
            When you purchase Ignite, you are not just buying a supplement.
          </p> */}


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