import React from "react";
import Container from "../components/layout/Container";

const bonuses = [
  {
    title: "Live & Recorded Workout Sessions",
    desc: "4 weeks of live coaching with structured fat-loss workouts, perfect form guidance, and motivation & accountability.",
    value: "₹2,000",
  },
  {
    title: "Fitness Blueprint E-Book",
    desc: "Daily workout schedules, fat-burning meal plans, step-by-step nutrition guide, and progress tracker.",
    value: "₹1,500",
  },
  {
    title: "Ignite Fat Burner — 250g",
    desc: "Boost metabolism, burn stubborn fat faster, Fruit Punch flavor, free home delivery.",
    value: "₹999",
  },
];

const Bonuses = () => {
  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <Container>
        <h2 className="text-center text-2xl font-bold text-text sm:text-3xl">
          What You Get In This Total Combo
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-text-muted">
          Everything you need for a complete 28-day transformation — all
          included.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {bonuses.map((bonus) => (
            <div
              key={bonus.title}
              className="flex flex-col rounded-xl border border-primary/15 bg-white p-5 shadow-card"
            >
              <h3 className="text-lg font-semibold text-text">{bonus.title}</h3>
              <p className="mt-3 flex-1 text-sm text-text-muted">
                {bonus.desc}
              </p>

              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="text-xs text-text-muted">Value</p>
                  <p className="text-base font-semibold text-text line-through">
                    {bonus.value}
                  </p>
                </div>
                <div className="rounded-full bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-md">
                  Free today
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-text-muted">
          Total bonus value worth more than the workshop fee - included when you
          register now.
        </p>
      </Container>
    </section>
  );
};

export default Bonuses;
