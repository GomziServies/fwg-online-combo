import React from "react";
import Container from "../components/layout/Container";
import BoockBtn from "../components/common/BoockBtn";

const FinalCTASection = () => {
  return (
    <section
      id="final-cta"
      className="bg-white text-gray-900 py-12 sm:py-20 px-4 overflow-hidden border-t border-gray-100"
    >
      <Container className="text-center">
        <div className="mb-10 sm:mb-14">
          <p className="text-base sm:text-lg text-gray-400 line-through mb-1 font-bold">
            Original Value: ₹6999/-
          </p>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Today&apos;s Price:{" "}
            <span className="text-[#FF6600]">₹2499/- Only</span>
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-gray-600 font-bold max-w-xl mx-auto">
            Seats limited — first come, first serve. Join the transformation
            today!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 justify-center items-center">
          <BoockBtn
            className="w-full max-w-[320px] sm:max-w-sm inline-flex items-center justify-center rounded-xl bg-[#FF6600] px-6 py-4 text-base sm:text-lg font-black text-white shadow-2xl shadow-orange-200 transition hover:bg-orange-600 active:scale-95"
            btnnamed="Reserve Your Seat Now"
          />

          <BoockBtn
            className="w-full max-w-[320px] sm:max-w-sm inline-flex items-center justify-center rounded-xl border-2 border-[#FF6600] px-6 py-4 text-base sm:text-lg font-black text-[#FF6600] shadow-sm transition hover:bg-orange-50 active:scale-95"
            btnnamed="Yes! I Want This"
          />
        </div>
      </Container>
    </section>
  );
};

export default FinalCTASection;
