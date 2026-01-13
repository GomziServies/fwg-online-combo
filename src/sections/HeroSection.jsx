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
//             Online Live Coaching + E-Book + Ignite Fat Burner (250g)
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
//               alt="Fit people working out with Ignite product visible"
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

const HeroSection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBookingModal = () => {
    setIsBookingModalOpen(true);
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
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            28-Day Online Fat Loss Program
          </span>

          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-snug sm:text-4xl lg:text-4xl">
            Belly Fat Not Reducing
            <span className="mt-1 block text-primary">
              Even After Diet & Workout?
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted md:mx-0">
            Busy routine, weight stuck, motivation gone?
            <br className="hidden sm:block" />
            <span className="font-semibold text-text">
              This program is built exactly for that.
            </span>
          </p>

          <ul className="mx-auto mt-6 max-w-sm space-y-3 text-lg md:mx-0">
            <li>✓ Weight stuck for months</li>
            <li>✓ No time for gym</li>
            <li>✓ Confusing diet plans</li>
          </ul>

          <div className="mx-auto mt-6 inline-block rounded-xl border border-primary/20 bg-primary/5 px-6 py-4 md:mx-0">
            <p className="font-semibold">
              Live Coaching + E-Book + Fat Burner (250g)
            </p>
            <p className="mt-1 text-2xl font-bold text-primary">
              ₹2499/-{" "}
              <span className="text-sm font-medium text-text-muted">Only</span>
            </p>
          </div>

          {/* CTA */}
          <BoockBtn className="relative mt-4 inline-flex w-full max-w-sm items-center justify-center rounded-xl bg-primary px-10 py-2 text-lg font-bold text-white shadow-card md:mx-0" btnnamed={"I Want To Reserve My Slot!"} onClick={handleOpenBookingModal} />
        </motion.div>
        
        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-full max-w-md mt-4"
        >
          <div className="relative mx-auto w-full max-w-[550px]  overflow-hidden rounded-2xl bg-black shadow-card">
            <img
              src="/src/assets/images/logo2.png"
              alt="Program Preview"
              className="h-[260px] object-cover sm:h-[360px] lg:h-[280px]"
            />
        
            {/* Play Icon */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90">
                <div className="ml-1 h-0 w-0 border-y-8 border-y-transparent border-l-[14px] border-l-primary" />
              </div>
            </div>
          </div>
        
          {/* Countdown */}
          <div className="mx-auto mt-10 max-w-sm rounded-lg bg-primary p-6 text-white md:mt-14">
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
          </div>
        </motion.div>
            
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </Container>
    </section>
  );
};

export default HeroSection;
