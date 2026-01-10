import React from "react";
import Container from "../components/layout/Container";

const PromiseSection = () => {
  return (
    <section className="bg-white py-14 sm:py-16">
      <Container className="flex justify-center">
        <div className="max-w-2xl rounded-2xl border border-primary/25 bg-primary-light/60 px-6 py-8 shadow-card">
          <h2 className="text-center text-xl font-bold text-text sm:text-2xl">
            Your 28-Day Transformation Starts Here
          </h2>
          <p className="mt-4 text-sm text-text">
            This program is designed for real results. Follow the workouts,
            stick to the nutrition plan, and use the Ignite supplement as
            directed. Consistency is key to seeing the transformation you want.
          </p>
          <p className="mt-4 text-sm text-text-muted">
            This is not a magic pill. It&apos;s a proven system that works when
            you commit to it. Join thousands who have transformed their bodies
            in just 28 days.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default PromiseSection;
