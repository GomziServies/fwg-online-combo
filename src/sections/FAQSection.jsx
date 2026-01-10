import React from "react";
import Container from "../components/layout/Container";
import FAQItem from "../components/common/FAQItem";

const faqs = [
  {
    q: "When will I get the e-book?",
    a: "Immediately after payment in your email.",
  },
  {
    q: "How are live sessions held?",
    a: "Zoom + recorded sessions.",
  },
  {
    q: "Do I need a gym?",
    a: "No, all workouts are home-based.",
  },
  {
    q: "When will Ignite be shipped?",
    a: "Within 1–3 business days.",
  },
  {
    q: "What if I miss a live session?",
    a: "Recordings are provided.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-white py-14 sm:py-16">
      <Container>
        <h2 className="text-center text-2xl font-bold text-text sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-text-muted">
          If you still have a question, you can write to us after going through
          these FAQs.
        </p>

        <div className="mx-auto mt-8 max-w-2xl">
          {faqs.map((item) => (
            <FAQItem key={item.q} question={item.q} answer={item.a} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
