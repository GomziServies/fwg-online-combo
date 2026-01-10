import React from "react";
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

const App = () => {
  return (
    <div className="bg-white text-text">
      <AnnouncementBar />
      <HeroSection />
      <BusinessChange />
      <WhatYouWillLearn />
      <Benefits />
      <MeetYourCoach />
      <Testimonials />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default App;