import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let newTimeLeft = {};

      if (difference > 0) {
        newTimeLeft = {
    
          hours: Math.floor(difference / (1000 * 60 * 60)),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        newTimeLeft = { hours: 0, minutes: 0, seconds: 0 };
      }
      return newTimeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timerItems = [
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 sm:gap-8 items-center justify-center">
      {timerItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {item.value.toString().padStart(2, "0")}
          </div>
          <div className="text-[10px] sm:text-xs font-bold text-white/70 mt-1 uppercase tracking-widest">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
