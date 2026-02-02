import React from "react";
import Container from "../components/layout/Container";

const items = [
  "Lose 4 to 5 kg ",
  "Reduce belly fat & tone the body",
  "Build healthy eating habits",
  "Increase confidence & energy",
];

const WhoFor = () => {
  return (
    <section className="bg-[#ff6600] py-6 sm:py-6 lg:mt-6">
      <Container>
        <div className="mt-8 text-center">
          <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight lg:text-4xl">
            What This Ignite Fat Burner Will
            <span className="text-[#fff]"> Help You Achieve</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
          {items.map((item) => (
            <div
              key={item}
              className="
          group
          flex
          items-center
          gap-4
          rounded-xl
          border border-gray-200
          bg-white
          p-4 sm:p-6
          shadow-xl
          transition
          duration-300
          hover:shadow-2xl
          hover:-translate-y-1
        "
            >
              {/* Icon - Left, Centered */}
              <span
                className="
            inline-flex
            h-7 w-7
            flex-shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#FF6600]
            text-xs
            font-bold
            text-white
            shadow
            transition
            group-hover:scale-110
          "
              >
                ✓
              </span>

              {/* Text - Right, Centered */}
              <p className="text-[16px] leading-snug text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhoFor;
