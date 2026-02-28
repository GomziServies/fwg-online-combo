import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/layout/Container";
import BoockBtn from "../components/common/BoockBtn";
import BookingModal from "../components/common/BookingModal";

const FinalCTASection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <section
      id="final-cta"
      className="bg-[#ff6600] text-gray-900 md:py-8 py-5 sm:py-14 px-4 overflow-hidden border-t border-gray-100"
    >
      <Container className="text-center">
        <div className="mb-5 sm:mb-10">
          {/* <p className="text-base sm:text-lg text-gray-400 line-through mb-1 font-bold">
            Original Value: ₹4999/-
          </p> */}
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Today&apos;s Price: <span className="text-[#fff]">₹649/- Only</span>
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-white font-bold sm:mt-5 mx-auto">
            Free shipping • Delivery within 7 to 14 working days • Secure payment
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 justify-center items-center">
          <BoockBtn
            className="w-full max-w-[320px] sm:max-w-sm inline-flex items-center justify-center rounded-xl bg-[#fff] px-6 py-1 sm:py-4 text-base sm:text-lg text-md font-black text-[#ff6600] shadow-xl active:scale-95"
            btnnamed="Start Transformation At just ₹649/-"
            onClick={handleOpenBookingModal}
          />
        </div>
        <div className="mt-6 flex flex-col gap-2 text-sm sm:text-base text-white font-medium">
          {/* Email */}
          <a
            href="mailto:fitnesswithgomzi@gmail.com"
            className="hover:underline"
          >
            fitnesswithgomzi@gmail.com
          </a>

          {/* Brand name */}
          <span className="opacity-90">Fitness With Gomzi</span>

          {/* Policy links */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <Link to="/privacy-policy" className="hover:underline">
              Privacy & Policy
            </Link>
          </div>
        </div>
      </Container>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
};

export default FinalCTASection;
