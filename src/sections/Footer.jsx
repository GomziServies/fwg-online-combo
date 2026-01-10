import React, { useState, useEffect } from "react";
import Container from "../components/layout/Container";
import BoockBtn from "../components/common/BoockBtn";
import BookingModal from "../components/common/BookingModal";

const Footer = () => {
  const [shouldHide, setShouldHide] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

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

  // When booking modal is open, hide the footer
  useEffect(() => {
    if (isBookingModalOpen) {
      setShouldHide(true); // Hide the footer when modal is open
    }
  }, [isBookingModalOpen]);

  // Also observe if any booking modal is open on the page
  useEffect(() => {
    const handleClassChange = () => {
      if (document.body.classList.contains('booking-modal-open')) {
        setShouldHide(true); // Hide the footer when any modal is open
      }
    };

    const mutationObserver = new MutationObserver(handleClassChange);
    mutationObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => {
      mutationObserver.disconnect();
    };
  }, []);

  const handleOpenBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <>
    <footer
      className={`fixed bottom-0 left-0 right-0 z-[100] bg-[#ff6600] border-t border-white/20 py-3 shadow-[0_-10px_40px_rgba(0,0,0,0.2)] transition-all duration-700 ease-in-out ${
        shouldHide
          ? "translate-y-full opacity-0 pointer-events-none"
          : "translate-y-0 opacity-100"
      }`}
    >
      <Container className="flex items-center justify-between gap-3 sm:gap-4">
        {/* Left Side: Pricing & Info */}
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl xs:text-2xl sm:text-3xl font-white text-white leading-none">
              ₹2499
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-white/60 line-through leading-none">
              ₹4999
            </span>
          </div>
          <p className="text-[9px] sm:text-[11px] uppercase tracking-tight sm:tracking-wider text-white font-extrabold mt-0.5">
            Limited Seats Left
          </p>
        </div>

        {/* Right Side: Button */}
        <div className="flex-1 sm:flex-none max-w-[150px] xs:max-w-[180px] sm:max-w-none">
          <BoockBtn
            btnnamed="Reserve Your Seat Now"
            className="w-full bg-white text-[#FF6600] px-3 sm:px-12 py-2.5 sm:py-3.5 rounded-xl font-black text-[11px] sm:text-sm shadow-xl  transition-all uppercase tracking-tighter sm:tracking-widest"
            onClick={handleOpenBookingModal}
          />
        </div>
      </Container>
    </footer>
    
    <BookingModal 
      isOpen={isBookingModalOpen} 
      onClose={() => setIsBookingModalOpen(false)} 
    />
    </>
  );
};

export default Footer;
