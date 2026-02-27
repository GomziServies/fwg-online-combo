import React, { useState } from "react";
import Container from "../components/layout/Container";
import BoockBtn from "../components/common/BoockBtn";
import BookingModal from "../components/common/BookingModal";

const steps = [
  {
    label: "Place Your Order",
    desc: "Complete your payment securely.",
    value: "01",
    icon: "fa-user-plus",
  },
  {
    label: "Receive the Blueprint",
    desc: "The Fitness Blueprint is sent instantly to your email.",
    value: "02",
    icon: "fa-book-open",
  },
  {
    label: "Join Daily Live Sessions",
    desc: "Start attending the daily 1-hour online training.",
    value: "03",
    icon: "fa-video",
  },
  {
    label: "Receive Ignite",
    desc: "Ignite Fat Burner is shipped to your address and delivered within 7-14 working days.",
    value: "04",
    icon: "fa-box",
  },
  {
    label: "Get Your Personalized Diet Plan on the App",
    desc: "Access a tailored diet plan right on your phone easy to follow, designed to boost your results and keep you on track.",
    value: "05",
    icon: "fa-trophy",
  },
];

const MeetYourCoach = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <section className="bg-white py-8 sm:py-16 overflow-hidden">
      <Container>
        {/* Title: Center Aligned */}
        <div className="text-center max-w-4xl mx-auto md:mb-8 sm:mb-12">
          <h2 className="sm:mb-12 mb-6 text-center font-heading text-4xl font-extrabold leading-tight lg:text-4xl">
            <span className="text-[#ff6600]">How It Works</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          {/* Vertical Line - Desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 -translate-x-1/2"></div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center md:items-stretch md:flex-row ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* STEP CIRCLE */}
                <div className="relative z-10 sm:mb-6 mb-2 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-[#FF6600] text-xl font-black text-white shadow-[0_10px_25px_rgba(255,102,0,0.3)] sm:h-16 sm:w-16 sm:text-2xl md:mb-0">
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
                  <div className="mx-auto sm:mb-4 mb-2 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#FF6600] md:mx-0">
                    <i className={`fa-solid ${step.icon}`}></i>
                    Step {step.value}
                  </div>

                  <h3 className="sm:mb-3 mb-1 text-2xl font-extrabold text-gray-800 sm:text-3xl">
                    {step.label}
                  </h3>

                  <p className="mx-auto max-w-md text-base leading-relaxed text-gray-500 sm:text-lg md:mx-0">
                    {step.desc}
                  </p>
                </div>

                {/* EMPTY SPACE - DESKTOP BALANCE ONLY */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="sm:mt-10 mt-6 text-center">
          <BoockBtn
            className="bg-[#FF6600] text-white px-12 sm:py-5 py-2 rounded-2xl font-black sm:text-xl text-lg shadow-xl hover:bg-orange-600 transition-all active:scale-95"
            btnnamed={"Start Transformation At just ₹649/-"}
            onClick={handleOpenBookingModal}
          />
        </div>
      </Container>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
};

export default MeetYourCoach;