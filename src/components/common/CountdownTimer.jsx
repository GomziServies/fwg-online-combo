import React, { useEffect, useState } from "react";

const getTimeRemaining = (targetDate) => {
  const total = Date.parse(targetDate) - Date.now();
  const seconds = Math.max(0, Math.floor((total / 1000) % 60));
  const minutes = Math.max(0, Math.floor((total / 1000 / 60) % 60));
  const hours = Math.max(0, Math.floor((total / (1000 * 60 * 60)) % 24));
  const days = Math.max(0, Math.floor(total / (1000 * 60 * 60 * 24)));
  return { total, days, hours, minutes, seconds };
};

const CountdownTimer = ({ targetDate, size = "sm", align = "center" }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const wrapperAlign =
    align === "left"
      ? "justify-start"
      : align === "right"
      ? "justify-end"
      : "justify-center";

  const boxSize =
    size === "lg"
      ? "px-4 py-3 text-lg"
      : size === "md"
      ? "px-3 py-2 text-base"
      : "px-2 py-1 text-xs";

  return (
    <div className={`flex ${wrapperAlign} gap-2`}>
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <div
          key={unit}
          className={`flex flex-col items-center rounded-md bg-white/10 text-white ${boxSize}`}
        >
          <span className="font-semibold leading-none">
            {String(timeLeft[unit]).padStart(2, "0")}
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-wide text-white/80">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
