import React from "react";
import Container from "../components/layout/Container";

const AnnouncementBar = () => {
  return (
    <div className="bg-[#ffffff] text-white text-xs sm:text-sm">
      <Container className="flex justify-center pt-8 sm:pt-4 pb-2">
        <div className="flex justify-center">
          <img
            src="/assets/images/logo2.png"
            alt="Gomzi logo"
            className="h-20 mx-auto"
          />
        </div>
      </Container>
    </div>
  );
};

export default AnnouncementBar;
