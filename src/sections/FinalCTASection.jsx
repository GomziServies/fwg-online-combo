import React from "react";
import Container from "../components/layout/Container";
import BoockBtn from "../components/common/BoockBtn";

const FinalCTASection = () => {
  return (
    <section id="final-cta" className="bg-[#FF6600] text-white py-8 sm:py-16 px-4 overflow-hidden ">
      <Container className="text-center">
        
        <div className="mb-10 sm:mb-14">
          <p className="text-base sm:text-lg text-white/80 line-through mb-1">
            Original Value: ₹6999/-
          </p>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-black mb-4 tracking-tight">
            Today&apos;s Price: <span className="text-white">₹2499/- Only</span> 
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto">
            Seats limited — first come, first serve. Join the transformation today!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-8 justify-center items-center">
          <BoockBtn
            className="w-full max-w-[320px] sm:max-w-sm inline-flex items-center justify-center rounded-xl bg-white px-6 py-4 text-base sm:text-lg font-bold text-[#FF6600] shadow-2xl transition hover:bg-gray-100"
            btnnamed="Reserve Your Seat Now"
          />
          
          <BoockBtn
            className="w-full max-w-[320px] sm:max-w-sm inline-flex items-center justify-center rounded-xl border-2 border-white px-6 py-4 text-base sm:text-lg font-bold text-white shadow-xl transition hover:bg-white/10"
            btnnamed="Yes! I Want This"
          />
        </div>

      </Container>
    </section>
  );
};

export default FinalCTASection;