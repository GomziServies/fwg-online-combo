import React from "react";
import Container from "../components/layout/Container";
import BoockBtn from "../components/common/BoockBtn";

const steps = [
  {
    label: "Join the program",
    desc: "Click the 'Join Now' button and complete payment securely. You'll get instant access to everything.",
    value: "01",
    icon: "fa-user-plus",
  },
  {
    label: "Get the E-Book instantly",
    desc: "Your Fitness Blueprint PDF is auto-delivered to your email instantly. Start reading your meal plans and workout schedule right away.",
    value: "02",
    icon: "fa-book-open",
  },
  {
    label: "Start live coaching + receive Ignite",
    desc: "Attend live Zoom sessions with expert trainers. Receive your Ignite Fat Burner at home within 1-3 days.",
    value: "03",
    icon: "fa-video",
  },
  {
    label: "28 days of transformation & support",
    desc: "Follow the program, track your results, get support from trainers and community. Watch your body transform!",
    value: "04",
    icon: "fa-trophy",
  },
];

const MeetYourCoach = () => {
  return (
    <section className="bg-white py-10 sm:py-16 overflow-hidden">
      <Container>
        {/* Title: Center Aligned */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <h2 className="mb-12 text-center font-heading text-4xl font-extrabold leading-tight lg:text-4xl">
            How It
            <span className="text-[#ff6600]"> Works</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          {/* Vertical Line – Desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 -translate-x-1/2"></div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center md:items-stretch md:flex-row ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* STEP CIRCLE – ALWAYS FIRST ON MOBILE */}
                <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[#FF6600] text-xl font-black text-white shadow-[0_10px_25px_rgba(255,102,0,0.3)] sm:h-16 sm:w-16 sm:text-2xl md:mb-0">
                  {parseInt(step.value)}
                </div>

                {/* CONTENT */}
                <div
                  className={`w-full md:w-1/2 text-center ${
                    index % 2 === 0
                      ? "md:text-right md:pr-16"
                      : "md:text-left md:pl-16"
                  }`}
                >
                  <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#FF6600] md:mx-0">
                    <i className={`fa-solid ${step.icon}`}></i>
                    Step {step.value}
                  </div>

                  <h3 className="mb-3 text-2xl font-extrabold text-gray-800 sm:text-3xl">
                    {step.label}
                  </h3>

                  <p className="mx-auto max-w-md text-base leading-relaxed text-gray-500 sm:text-lg md:mx-0">
                    {step.desc}
                  </p>
                </div>

                {/* EMPTY SPACE – DESKTOP BALANCE ONLY */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Minimal CTA */}
        <div className="mt-14 sm:mt-16 text-center">
          {/* <button className="bg-[#FF6600] text-white px-12 py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-orange-600 transition-all active:scale-95">
            START YOUR JOURNEY NOW
          </button> */}
          <BoockBtn
            className="bg-[#FF6600] text-white px-12 py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-orange-600 transition-all active:scale-95"
            btnnamed={"Reserve Your Seat Now"}
          />
        </div>
      </Container>
    </section>
  );
};

export default MeetYourCoach;
