import React from "react";
import Container from "../components/layout/Container";
import CountdownTimer from "../components/common/CountdownTimer";
import BoockBtn from "../components/common/BoockBtn";

const UrgencyTimerSection = () => {
  const targetDate = "2026-01-31T18:00:00";

  return (
    <section className="bg-primary text-white py-12 px-4">
      <Container className="text-center">
        <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-white/80">
          Limited seats · Live online coaching
        </p>
        
        <h2 className="mt-4 text-2xl sm:text-4xl font-black leading-tight">
          Next batch starts in:
        </h2>

        <div className="mt-8 flex justify-center">
          <div className="inline-block rounded-[2.5rem] border-2 border-white/20 bg-white/10 px-8 py-6 backdrop-blur-md shadow-2xl">
            <CountdownTimer targetDate={targetDate} size="lg" showDays={false} />
          </div>
        </div>

        <p className="mt-6 text-sm sm:text-lg text-white/90 font-bold italic">
          Seats limited — first come, first serve.
        </p>

        <div className="mt-8">
          <BoockBtn
            className="inline-flex w-full max-w-md items-center justify-center rounded-2xl bg-white px-10 py-5 text-xl font-black text-primary shadow-xl hover:bg-gray-100 transition-all uppercase tracking-wider"
            btnnamed="I Want IN - Reserve My Slot!"
          />
        </div>
      </Container>
    </section>
  );
};

export default UrgencyTimerSection;