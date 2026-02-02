import React from "react";
import { motion } from "framer-motion";
import Container from "../components/layout/Container";
import {
  HiCheckCircle,
  HiUsers,
  HiLightningBolt,
  HiBadgeCheck,
  HiCalendar,
} from "react-icons/hi";

const ExperienceSection = () => {
  const stats = [
    {
      icon: <HiCalendar className="text-white w-6 h-6" />,
      label: "Established In",
      value: "2012",
    },
    {
      icon: <HiUsers className="text-white w-6 h-6" />,
      label: "Happy Clients",
      value: "20,000+",
    },
    {
      icon: <HiBadgeCheck className="text-white w-6 h-6" />,
      label: "Experience",
      value: "15+ Years",
    },
    {
      icon: <HiLightningBolt className="text-white w-6 h-6" />,
      label: "Approach",
      value: "Result Oriented",
    },
  ];

  const highlights = [
    "Established in 2012",
    "20,000+ happy transformations",
    "15+ years of experience",
    "Practical, result-oriented approach",
    "Trusted by real people, real stories",
  ];

  return (
    <section className="sm:py-20 md:py-16 py-10 bg-[#ff6600] overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row  gap-12">
          {/* Left Side: Content */}
          <div className="flex-1  lg:text-left items-center">
            <span className="text-white text-center font-black uppercase tracking-[0.2em] text-sm mb-4 block">
              Our Experience & Journey
            </span>

            <h2 className="text-3xl text-center lg:text-left sm:text-5xl font-black text-gray-900 sm:mb-6 mb-3 leading-tight">
              Real Experience. <br className="hidden sm:block" />
              <span className="text-white">Real Transformation.</span>
            </h2>

            <p className="text-lg text-white mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We started our fitness and transformation journey in 2012 with a
              simple mission —
              <span className="font-bold text-white">
                {" "}
                to help people live healthier, fit and more confident lives.
              </span>
            </p>

            <div className="space-y-4 mb-10">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 justify-start justify-start"
                >
                  <HiCheckCircle className="text-[#fff] w-6 h-6 flex-shrink-0" />
                  <span className="text-white font-bold text-lg">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-white italic border-l-4 border-[#fff] pl-4 py-2 rounded-r-lg shadow-xl">
              Today, with 15+ years of hands-on experience, we are recognised as
              experts in fat-loss, body transformation and lifestyle correction.
            </p>
          </div>

          {/* Right Side: Stats Grid */}
          <div className="flex-1 w-full max-w-lg sm:mt-9 md:mt-4 mt-1">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="shadow-xl p-6 sm:p-8 bg-white rounded-[2rem] border-2 border border-[#ff6600] transition-all shadow-sm text-center cursor-default"
                >
                  <div className="bg-[#ff6600] w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-200">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExperienceSection;
