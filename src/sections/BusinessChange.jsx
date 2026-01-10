import React from "react";
import Container from "../components/layout/Container";
import WhoFor from "./WhoFor";

const points = [
  {
    title: "Live Coaching Support",
    desc: "Trainer-led sessions + recorded access",
  },
  {
    title: "Proven System",
    desc: "Fat loss blueprint you follow like a roadmap",
  },
  {
    title: "Included Nutrition + Supplement",
    desc: "Blueprint + Ignite Fat Burner — all-in-one combo",
  },
];

const BusinessChange = () => {
  return (
    <section className="bg-[#FF6600] py-6 sm:py-24 mt-10 ">
      <Container>
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-heading text-4xl font-extrabold leading-tight lg:text-4xl">
            Why This Program
            <span className="text-[#fff]"> Actually Works</span>
          </h2>
          <span className="block text-xl sm:text-xl font-semibold tracking-widest text-white/80 mt-3">
            ( Quick Proof )
          </span>
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
        p-6
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

      {/* 4. Benefits */}
      <WhoFor />
    </section>
  );
};

export default BusinessChange;
