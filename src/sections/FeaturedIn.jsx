import React from "react";
import Container from "../components/layout/Container";

// Keep structure but can be hidden or repurposed
const logos = ["FG Fitness", "Transformation", "Results", "Success"];

const FeaturedIn = () => {
  return (
    <section className="bg-white py-12">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-text">
          FEATURED IN
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex h-12 min-w-[120px] items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-4 shadow-sm transition hover:shadow-md"
            >
              <span className="text-sm font-semibold text-text">{logo}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedIn;
