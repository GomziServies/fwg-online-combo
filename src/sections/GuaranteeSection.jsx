import React from "react";
import Container from "../components/layout/Container";

const GuaranteeSection = () => {
  return (
    <section className="bg-primary-light py-14 sm:py-16">
      <Container className="text-center">
        <div className="mx-auto inline-flex h-20 w-20 items-center justify-center rounded-full border-4 border-primary-dark bg-white shadow-card">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary-dark">
            100%
            <br />
            Guarantee
          </span>
        </div>
        <h2 className="mt-5 text-2xl font-bold text-text sm:text-3xl">
          100% Value Guarantee
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-text-muted">
          Complete the 28-day program, follow the workouts and nutrition plan,
          and if you don&apos;t see results, contact us for a full refund. No
          questions asked.
        </p>
      </Container>
    </section>
  );
};

export default GuaranteeSection;
