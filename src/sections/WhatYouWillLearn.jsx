import React from "react";
import Container from "../components/layout/Container";

const blocks = [
  {
    title: "Ignite Fat Burner - 250g",
    // desc: "A carefully formulated blend designed to support fat metabolism and daily energy levels.",
    image: "/assets/images/what-you-get-03.jpeg",
    imageAlt: "Ignite Fat Burner",
    imageOrder: "left",
    points: [
      "Supports calorie burning",
      "Helps reduce stubborn fat",
      "Improves focus and activity levels",
      "Easy to mix and consume",
    ],
  },
  {
    title: "Daily 1-Hour Live Online Exercise Training",
    // desc: "You will get access to daily live sessions conducted online. You can join from home.",
    image: "/assets/images/what-you-get-01.jpeg",
    imageAlt: "Daily Live Training",
    imageOrder: "right",
    points: [
      "Help you stay disciplined",
      "Provide guided exercise",
      "Keep you accountable",
      "Build consistency",
    ],
  },
  {
    title: "Free Fitness Blueprint (Digital E-Book)",
    // desc: "Delivered instantly to your email after purchase. Tells you exactly what to do and how to stay consistent.",
    image: "/assets/images/what-you-get-02.jpeg",
    imageAlt: "Fitness Blueprint E-Book",
    imageOrder: "left",
    points: [
      "Simple fat-loss routine",
      "Home workout guidance",
      "Basic nutrition direction",
      "Habit-building strategy",
      "Easy daily structure",
    ],
  },
];

const WhatYouWillLearn = () => {
  return (
    <section className="bg-white py-14 sm:py-16 lg:-mb-28">
      <Container>
        <h2 className="mb-12 text-center font-heading text-4xl font-extrabold">
          What You <span className="text-[#ff6600]">Get</span>
        </h2>

        <div className="space-y-14 sm:pb-28">
          {blocks.map((block, idx) => (
            <div key={idx} className="grid items-stretch gap-8 lg:grid-cols-2">

              {/* IMAGE */}
              <div
                className={`w-full overflow-hidden rounded-2xl border border-gray-200 bg-slate-50 ${
                  block.imageOrder === "right" ? "order-1 lg:order-2" : ""
                }`}
              >
                <img
                  src={block.image}
                  alt={block.imageAlt}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div
                className={`w-full rounded-2xl border border-gray-200 bg-white p-7 shadow-xl ${
                  block.imageOrder === "right" ? "order-2 lg:order-1" : ""
                }`}
              >
                <h3 className="mb-2 text-2xl font-semibold text-gray-900">
                  {block.title}
                </h3>
                <p className="mb-4 text-gray-500 text-base">{block.desc}</p>
                <ul className="space-y-3">
                  {block.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#FF6600]" />
                      <p className="text-lg text-gray-800">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhatYouWillLearn;