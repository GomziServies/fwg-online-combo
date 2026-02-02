import React from "react";
import Container from "../components/layout/Container";

// const block1 = [
//   "4 weeks of live coaching",
//   "Structured fat-loss workouts",
//   "Learn perfect form",
//   "Motivation & accountability",
// ];

const block2 = [
  "Daily workout schedules",
  "Meal plans that burn fat",
  "Step-by-step nutrition & schedule",
  "Progress tracker",
];

// const block3 = [
//   "Boost metabolism",
//   "Burn stubborn fat faster",
//   "Tastes great (Fruit Punch)",
//   "Delivered to your door",
// ];

const block1 = [
  "Fruit Punch or Green Apple",
  "25-30 gm servings approx.",
  "Mix with water ",
  "Boost metabolism",
];

const WhatYouWillLearn = () => {
  return (
    <section className="bg-white py-14 sm:py-16 lg:-mb-28">
      <Container>
        <h2 className="mb-12 text-center font-heading text-4xl font-extrabold">
          What You <span className="text-[#ff6600]">Get</span>
        </h2>

        <div className="space-y-14 sm:pb-28">
          {/* BLOCK 1 */}
          <div className="grid items-stretch gap-8 lg:grid-cols-2">
            <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-slate-50">
              <img
                src="/src/assets/images/what-you-get-03.jpeg"
                alt="Live Coaching"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="w-full rounded-2xl border border-gray-200 bg-white p-7 shadow-xl lg:h-[300px]">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                Ignite Fat Burner 250g
              </h3>
              <ul className="space-y-3">
                {block1.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#FF6600]" />
                    <p className="text-lg text-gray-800">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* BLOCK 2 */}
          <div className="grid items-stretch gap-8 lg:grid-cols-2">
            {/* Content */}
            <div className="order-2 lg:order-1 w-full rounded-2xl border border-gray-200 bg-white p-7 shadow-xl lg:h-[300px]">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                + Free Fitness Blueprint E-Book
              </h3>
              <ul className="space-y-3">
                {block2.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#FF6600]" />
                    <p className="text-lg text-gray-800">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 w-full  overflow-hidden rounded-2xl border border-gray-200 bg-slate-50">
              <img
                src="/src/assets/images/what-you-get-02.jpeg"
                alt="E-book"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* BLOCK 3 */}
          {/* <div className="grid items-stretch gap-8 lg:grid-cols-2">
          
            <div className="w-full lg:h-[66%] overflow-hidden rounded-2xl border border-gray-200 bg-slate-50">
              <img
                src="/src/assets/images/what-you-get-03.jpeg"
                alt="Live Coaching"
                className="h-full w-full object-cover"
              />
            </div>

          
            <div className="w-full rounded-2xl border border-gray-200 bg-white p-7 shadow-xl lg:h-[300px]">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                Ignite Fat Burner — 250g
              </h3>
              <ul className="space-y-3">
                {block3.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#FF6600]" />
                    <p className="text-lg text-gray-800">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
        </div>
      </Container>
    </section>
  );
};

export default WhatYouWillLearn;
