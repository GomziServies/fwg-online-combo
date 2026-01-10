import React, { useState, useEffect } from "react";
import Container from "../components/layout/Container";
import BoockBtn from "../components/common/BoockBtn";

const Footer = () => {
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShouldHide(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px 0px 50px 0px" }
    );

    const target = document.getElementById("final-cta");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <footer
      className={`fixed bottom-0 left-0 right-0 z-[100] bg-[#ff6600] border-t border-gray-200 py-3 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] transition-all duration-700 ease-in-out ${
        shouldHide ? "translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
    >
      <Container className="flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-2xl font-black text-gray-900">₹2499</span>
            <span className="text-xs font-bold text-gray-400 line-through">₹4999</span>
          </div>
          <p className="text-[10px] uppercase tracking-wider text-[#ff6600] font-bold">
            Limited Seats Left
          </p>
        </div>
        <div className="flex-1 sm:flex-none max-w-[180px] sm:max-w-none">
          <BoockBtn 
            btnnamed="Join Now"
            className="w-full bg-white text-white px-6 sm:px-10 py-3 rounded-xl font-black text-xs sm:text-sm shadow-xl hover:bg-orange-600 transition-all uppercase"
          />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;