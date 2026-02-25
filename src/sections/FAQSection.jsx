import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/layout/Container";
import { Link } from "react-router-dom";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className={`rounded-2xl transition-all duration-300 overflow-hidden ${
        isOpen ? "bg-[#ff6600] shadow-xl" : "border-b border-[#ff6600]/80"
      }`}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-5 sm:p-6 text-left"
      >
        <span
          className={`text-base sm:text-xl font-black transition-all duration-300 ${
            isOpen ? "text-[#fff]" : "text-[#ff6600]"
          }`}
        >
          {question}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ duration: 0.3 }}
          className={`text-2xl sm:text-3xl font-bold leading-none ${
            isOpen ? "text-[#fff]" : "text-[#ff6600]"
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
  q: "When will I get access to the online exercise sessions?",
  a: (
    <>
      You will get access starting from{" "}
      <span className="underline font-semibold">the next day</span>{" "}
      after your purchase. You can join the batch you selected during registration.
    </>
  ),
},
    {
      q: "What are the timings of the online sessions?",
      a: (
        <>
          We currently offer two daily session timings: <br/>Morning: 6:00 AM - 7:00 AM or <br/> Evening: 6:00 PM - 7:00 PM. <br />You can choose any one the batch that fits your schedule.
        </>
      ),
    },
    {
      q: "How will I connect to the online exercise sessions?",
      a: "After your purchase, you will receive an email with your selected batch timing, the session joining details, and instructions about the exercise plan. All information will be clearly shared in your registered email.",
    },
    {
      q: "What exactly is the Fitness Blueprint?",
      a: "A practical 4-week guide with daily routines, simple home workouts, sample meal ideas, and habit trackers — built to work with Ignite Fat Burner to speed up fat-loss when followed consistently.",
    },
    {
      q: "When will I receive the e-book?",
      a: "Immediately after payment — the PDF is sent to your registered email.",
    },
    {
      q: "How long will shipping take?",
      a: "Orders are dispatched within 1-2 Working days. Delivery is expected in under 7 to 14 working days depending on location.",
    },
    {
      q: "Is this suitable for beginners?",
      a: "Yes — the Blueprint is created for all levels. Ignite Fat Burner is a supplement — combine it with the Blueprint and a healthy routine.",
    },
    {
      q: "Any side effects?",
      a: "Ignite Fat Burner contains caffeine. Avoid if you are sensitive to stimulants. If you have health conditions, consult your doctor.",
    },
    {
      q: "How many servings?",
      a: "250g container — approx. 25-35 gm servings depending on scoop size.",
    },
    {
  q: "What if my product is damaged / missing?",
  a: (
    <>
      Contact{" "}
    <a
      
        href="mailto:fitnesswithgomzi@gmail.com"
        className="underline font-semibold  transition"
      >
        fitnesswithgomzi@gmail.com
      </a>{" "}
      within 48 hours with order number and photo. We'll try to resolve issues.
    </>
  ),
},
    {
      q: "Refunds / returns",
      a: (
        <>
          No refunds. For delivery-damage issues{" "}
          <Link to="/privacy-policy" className="text-white underline">
            Privacy & Policy.
          </Link>
        </>
      ),
    },
    {
      q: "Can I buy in bulk / for a gym?",
      a: (
        <>
          For bulk/partner orders, contact{" "}
          <a
            href="mailto:fitnesswithgomzi@gmail.com"
            className="underline font-semibold  transition"
          >
            fitnesswithgomzi@gmail.com
          </a>
        </>
      ),
    },
  ];

  return (
    <section className="bg-[#fff] sm:py-16 py-8 px-4">
      <Container>
        <div className="text-center sm:mb-12 md:mb-8 mb-4">
          <h2 className="text-3xl sm:text-4xl font-black text-black">
            Frequently Asked
            <span className="text-[#ff6600]"> Questions</span>
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