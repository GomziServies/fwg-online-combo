import React from "react";
import Container from "../components/layout/Container";

const block1 = [
  "4 weeks of live coaching",
  "Structured fat-loss workouts",
  "Learn perfect form",
  "Motivation & accountability",
];

const block2 = [
  "Daily workout schedules",
  "Meal plans that burn fat",
  "Step-by-step nutrition & schedule",
  "Progress tracker",
];

const block3 = [
  "Boost metabolism",
  "Burn stubborn fat faster",
  "Tastes great (Fruit Punch)",
  "Delivered to your door",
];

const WhatYouWillLearn = () => {
  return (
    <section className="bg-white py-14 sm:py-16">
      <Container>
        {/* Heading */}
       
         <h2 className="mb-12 text-center font-heading text-4xl font-extrabold leading-tight lg:text-4xl">
             What You 
            <span className="text-[#ff6600]"> Get</span>
          </h2>

        <div className="space-y-14">
          {/* BLOCK 1 */}
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border w-[340px] lg:w-[98%] border-gray-200 bg-slate-50">
              <img
                src="/src/assets/images/logo2.png"
                alt="Live Coaching"
                className="w-full object-cover"
              />
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-xl">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                Live & Recorded Workout Sessions
              </h3>
              <ul className="space-y-3">
                {block1.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#FF6600]" />
                    <p className="text-lg text-gray-800">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* BLOCK 2 */}
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="order-2 lg:order-1 rounded-2xl border border-gray-200 bg-white p-7 shadow-xl">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                Fitness Blueprint E-Book
              </h3>
              <ul className="space-y-3">
                {block2.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#FF6600]" />
                    <p className="text-lg text-gray-800">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 w-[340px] lg:w-[98%] lg:order-2 overflow-hidden rounded-2xl border border-gray-200 bg-slate-50">
              <img
                src="/src/assets/images/logo2.png"
                alt="E-book"
                className="w-[93%] object-cover"
              />
            </div>
          </div>

          {/* BLOCK 3 */}
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="overflow-hidden w-[340px] lg:w-[98%] rounded-2xl border border-gray-200 bg-slate-50 ">
              <img
                src="/src/assets/images/logo2.png"
                alt="Ignite Fat Burner"
                className="w-[93%] object-cover"
              />
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-xl">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                Ignite Fat Burner — 250g
              </h3>
              <ul className="space-y-3">
                {block3.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#FF6600]" />
                    <p className="text-lg text-gray-800">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhatYouWillLearn;
