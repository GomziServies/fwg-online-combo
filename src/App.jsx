import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AnnouncementBar from "./sections/AnnouncementBar";
import HeroSection from "./sections/HeroSection";
import BusinessChange from "./sections/BusinessChange";
import WhatYouWillLearn from "./sections/WhatYouWillLearn";
import Testimonials from "./sections/Testimonials";
import MeetYourCoach from "./sections/MeetYourCoach";
import FAQSection from "./sections/FAQSection";
import FinalCTASection from "./sections/FinalCTASection";
import Footer from "./sections/Footer";
import Benefits from "./sections/Benefits";
import ExperienceSection from "./sections/Aboutus";
import DetailedProductBlock from "./sections/DetailedProductBlock";
import PrivacyPolicy from "./sections/PrivacyPolicy";
import WhyBuyToday from "./components/common/WhyBuyToday";
import BookingModal from "./components/common/BookingModal";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const LandingPage = () => {
  return (
        <div className="bg-white text-text">
      {/* Top-logo */}
      <AnnouncementBar />

      {/* Belly Fat Not Reducing Even After Diet & Workout? */}
      <HeroSection />

      {/* WHY BUY IGNITE + What This Ignite Will Help You Achieve */}
      <BusinessChange />

      {/* What You Get */}
      <WhatYouWillLearn />

      {/* What This Ignite Helps You Achieve */}
      <Benefits />

      {/* HOW IGNITE WORKS */}
      <MeetYourCoach />

      {/* Testimonials = Real Results From Real People images + videos */}
      <Testimonials />

      {/* Your Daily Energy & Metabolism Companion */}
      <DetailedProductBlock />

      {/* Real Experience Real Transformation. */}
      <ExperienceSection />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* footer Today's Price: ₹649/- Only */}
      <FinalCTASection />

      {/* sticky footer */}
      <Footer />

      {/* <PrivacyPolicy /> */}
    </div>
  );
};

const App = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBookingModal  = () => setIsBookingModalOpen(true);
  const handleCloseBookingModal = () => setIsBookingModalOpen(false);

  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* ── WhyBuyToday button click → BookingModal open ── */}
      <WhyBuyToday handleOpenBookingModal={handleOpenBookingModal} />

      {/* ── BookingModal globally mounted ── */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBookingModal}
      />

      <Routes>
        <Route
          path="/"
          element={<LandingPage handleOpenBookingModal={handleOpenBookingModal} />}
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;