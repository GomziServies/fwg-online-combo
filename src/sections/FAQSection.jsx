// import React from "react";
// import Container from "../components/layout/Container";
// import FAQItem from "../components/common/FAQItem";

// const faqs = [
//   {
//     q: "When will I get the e-book ?",
//     a: "Immediately after payment in your email.",
//   },
//   {
//     q: "How are live sessions held ?",
//     a: "Zoom + recorded sessions.",
//   },
//   {
//     q: "Do I need a gym ?",
//     a: "No, all workouts are home-based.",
//   },
//   {
//     q: "When will Ignite be shipped ?",
//     a: "Within 1-3 business days.",
//   },
//   {
//     q: "What if I miss a live session ?",
//     a: "Recordings are provided.",
//   },
// ];

// const FAQSection = () => {
//   return (
//     <section className="bg-white py-14 sm:py-16">
//       <Container>

//         <h2 className="mt-4 text-center font-heading text-4xl font-extrabold leading-tight lg:text-4xl">
//           Frequently Asked
//           <span className="text-[#ff6600]"> Questions</span>
//         </h2>
//         <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-800">
//           If you still have a question, you can write to us after going through
//           these FAQs.
//         </p>

//         <div className="mx-auto mt-8 max-w-3xl">
//           {faqs.map((item) => (
//             <FAQItem key={item.q} question={item.q} answer={item.a} />
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default FAQSection;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/layout/Container";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className={`rounded-2xl transition-all duration-300 overflow-hidden ${
        isOpen ? "bg-white shadow-xl" : "border-b border-white/60"
      }`}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-5 sm:p-6 text-left"
      >
        <span
          className={`text-base sm:text-xl font-black transition-all duration-300 ${
            isOpen ? "text-[#ff6600]" : "text-white"
          }`}
        >
          {question}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ duration: 0.3 }}
          className={`text-2xl sm:text-3xl font-bold leading-none ${
            isOpen ? "text-[#ff6600]" : "text-white"
          }`}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 sm:px-6 pb-6">
              <p className="text-sm sm:text-lg text-gray-800 font-bold leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "Is this suitable for beginners?",
      a: "Yes. Designed for all levels, starting from absolute basics.",
    },
    {
      q: "Do I need gym equipment?",
      a: "No. All workouts are 100% home-friendly with zero equipment.",
    },
    {
      q: "What if I miss a live session?",
      a: "You get lifetime access to all recorded sessions instantly.",
    },
    {
      q: "When will I receive the E-Book?",
      a: "Immediately after payment via email and WhatsApp.",
    },
    {
      q: "Ignite Fat Burner delivery time?",
      a: "Usually 3–7 working days across India.",
    },
    {
      q: "Is this program genuine?",
      a: "Transforming 20,000+ lives since 2012 with real science.",
    },
    {
      q: "Are there any refunds?",
      a: "No. We only want serious members committed to results.",
    },
  ];

  return (
    <section className="bg-[#ff6600] py-16 px-4">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-black">
            Frequently Asked
            <span className="text-white"> Questions</span>
          </h2>
        </div>

        <div className="mx-auto max-w-4xl">
          {faqs.map((item, index) => (
            <FAQItem
              key={index}
              question={item.q}
              answer={item.a}
              isOpen={activeIndex === index}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
