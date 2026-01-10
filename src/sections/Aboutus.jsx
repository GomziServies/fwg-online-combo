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
    <section className="py-20 bg-white overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side: Content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="text-[#ff6600] font-black uppercase tracking-[0.2em] text-sm mb-4 block">
              Our Experience & Journey
            </span>

            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Real Experience. <br className="hidden sm:block" />
              <span className="text-[#ff6600]">Real Transformation.</span>
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We started our fitness and transformation journey in 2012 with a
              simple mission —
              <span className="font-bold text-gray-900">
                {" "}
                to help people live healthier, fitter and more confident lives.
              </span>
            </p>

            <div className="space-y-4 mb-10">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 justify-center lg:justify-start"
                >
                  <HiCheckCircle className="text-[#ff6600] w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-800 font-bold text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-gray-800 italic border-l-4 border-[#ff6600] pl-4 py-2 bg-gray-50 rounded-r-lg">
              Today, with 15+ years of hands-on experience, we are recognised as
              experts in fat-loss, body transformation and lifestyle correction.
            </p>
          </div>

          {/* Right Side: Stats Grid */}
          <div className="flex-1 w-full max-w-lg">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="shadow-xl p-6 sm:p-8 rounded-[2rem] border-2 border border-[#ff6600] transition-all shadow-sm text-center cursor-default"
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
