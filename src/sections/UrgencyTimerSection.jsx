import React from "react";
import Container from "../components/layout/Container";
import CountdownTimer from "../components/common/CountdownTimer";

const UrgencyTimerSection = () => {
  const targetDate = "2026-01-31T18:00:00";

  return (
    <section className="bg-primary text-white py-12">
      <Container className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
          Limited seats · Live online coaching
        </p>
        <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
          Next batch starts in: Days • Hours • Minutes • Seconds
        </h2>
        <p className="mt-2 text-sm text-white/85">
          Seats limited — first come, first serve.
        </p>

        <div className="mt-6 flex justify-center">
          <div className="inline-block rounded-2xl border border-white/30 bg-white/10 px-6 py-4 backdrop-blur-sm">
            <CountdownTimer targetDate={targetDate} size="lg" />
          </div>
        </div>

        <button className="mt-6 inline-flex items-center justify-center rounded-md bg-white px-7 py-3 text-sm font-semibold text-primary-dark shadow-md transition hover:bg-slate-50">
          Reserve My Spot Now
        </button>
      </Container>
    </section>
  );
};

export default UrgencyTimerSection;
