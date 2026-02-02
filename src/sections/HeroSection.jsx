// import React from "react";
// import Container from "../components/layout/Container";

// const HeroSection = () => {
//   return (
//     <section className="bg-[#FFFFFF] text-gray-900">
//       <Container className="flex flex-col gap-10 py-12 md:flex-row md:items-center md:py-10 lg:py-10">
//         <div className="md:w-7/12">
//           <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-gray-900">
//             Transform Your Body In Just 28 Days
//             <span className="block text-gray-700">
//               — Without Gym Equipment!
//             </span>
//           </h1>
//           <p className="mt-4 text-2xl font-medium text-gray-700">
//             Become Leaner, Stronger & More Confident With Our Total Combo
//             Fat-Loss Transformation Program
//           </p>
//           <p className="mt-4 text-2xl font-medium text-gray-900">
//             Online Live Coaching + E-Book + Ignite Fat Burner Fat Burner (250g)
//             <br />
//             Only ₹2499/- (One-Time Price — Limited Seats!)
//           </p>

//           <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
//             <button className="inline-flex items-center justify-center rounded-md bg-[#FF6600] px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#FFAA00]">
//               I Want IN — Reserve My Spot!
//             </button>
//             {/* <div className="text-xs text-gray-600">See Full Details Below</div> */}
//           </div>
//         </div>

//         <div className="md:w-5/12">
//           <div className="relative">
//             <img
//               src="/src/assets/images/logo2.png"
//               alt="Fit people working out with Ignite Fat Burner product visible"
//               className="h-full w-full rounded-2xl object-cover"
//             />
//             <button className="mt-4 inline-flex items-center justify-center rounded-md bg-[#FF6600] px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#FFAA00]">
//               Unleash Your Best Body — Starting Today!
//             </button>
//             {/* <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-black/70 px-4 py-2 text-center">
//               <p className="text-sm font-semibold text-white">

//               </p>

//             </div> */}
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default HeroSection;

import React, { useState } from "react";
import { motion } from "framer-motion";
import Container from "../components/layout/Container";
import CountdownTimer from "../components/common/CountdownTimer";
import BoockBtn from "../components/common/BoockBtn";
import BookingModal from "../components/common/BookingModal";
import Modal from "../components/common/Modal";

const HeroSection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleOpenBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const handleOpenVideo = () => {
    setIsVideoOpen(true);
  };

  const todayDate = new Date().toISOString().split("T")[0];
  const targetTime = `${todayDate}T24:00:00`;

  return (
    <section className="bg-white text-text font-body">
      <Container className="grid items-center gap-4 py-4 md:grid-cols-2 lg:gap-16 lg:py-8">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center md:text-left"
        >
          {/* <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            28-Day Online Fat Loss Program
          </span> */}

          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-snug sm:text-4xl lg:text-4xl">
            Belly Fat Not Reducing
            <span className="mt-1 block text-primary">
              Even After Diet & Workout?
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted md:mx-0">
            Busy routine, weight stuck, motivation gone?{" "}
            <br className="hidden sm:block" />
            <span className="font-semibold text-text">
              This Ignite Fat Burner is built exactly for that.
            </span>
          </p>

          <ul className="mx-auto text-start mt-6 max-w-sm space-y-3 text-lg md:mx-0">
            {/* <li>✓ Weight stuck for months</li>
            <li>✓ No time for gym</li>
            <li>✓ Confusing diet plans</li> */}
            <li>✓ Fusion of metabolism-boosting ingredients</li>
            <li>✓ Delicious Fruit-Punch / Green Apple flavour</li>
            <li>✓ Supports steady fat loss & energy levels </li>
            <li>
              ✓ Free fitness blueprint e-book - <br />
            </li>
            <li className="ml-5 mt-[-10px]"> instantly by email </li>
          </ul>

          <div className="mx-auto mt-6 inline-block rounded-xl border border-primary/20 bg-primary/5 px-6 py-4 md:mx-0">
            <p className="mt-1 text-4xl font-bold text-primary text-center ">
              ₹649/-{" "}
              <span className="text-[20px] font-medium text-text-muted">
                Only
              </span>
            </p>
            <p className="font-semibold mt-2 text-center text-xl">
              Free shipping • Delivery within 7 working days • Secure payment
            </p>
          </div>

          {/* CTA */}
          <BoockBtn
            className="relative mt-4 inline-flex w-[100%] max-w-[100%] items-center justify-center rounded-xl bg-primary px-10 py-4 sm:text-2xl text-sm md:text-xl font-bold text-white shadow-card md:mx-0"
            btnnamed={"Buy Ignite Fat Burner Now — ₹649 "}
            onClick={handleOpenBookingModal}
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-full max-w-md mt-4"
        >
          <div className="relative mx-auto w-full  overflow-hidden rounded-2xl bg-black shadow-card">
            <img
              src="/assets/images/hero-banner.png"
              alt="Program Preview"
            />

            {/* Play Icon */}
            <button
              type="button"
              onClick={handleOpenVideo}
              aria-label="Play video"
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg">
                <span className="ml-1 h-0 w-0 border-y-8 border-y-transparent border-l-[14px] border-l-primary" />
              </span>
            </button>
          </div>

          {/* Countdown */}
          {/* <div className="mx-auto mt-10 max-w-sm rounded-lg bg-primary p-6 text-white md:mt-14">
            <p className="text-xl font-semibold uppercase tracking-wider text-center">
              Next Batch Starts In
            </p>
            <div className="mt-4 text-2xl flex justify-center">
              <CountdownTimer
                targetDate={targetTime}
                size="lg"
                align="center"
              />
            </div>
          </div> */}
        </motion.div>

        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
        />

        <Modal
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          className="w-auto max-w-xs"
          headerless
          contentClassName="p-0"
        >
          <div className="overflow-hidden rounded-xl">
            {isVideoOpen && (
              <video
                className="max-w-full max-h-[90vh] h-auto w-auto"
                src="/assets/videos/hero-banner.mp4"
                autoPlay
                controls
                controlsList="nodownload"
              />
            )}
          </div>
        </Modal>
      </Container>
    </section>
  );
};

export default HeroSection;
