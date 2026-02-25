import Container from "../components/layout/Container";
import { useState } from "react";
import BoockBtn from "../components/common/BoockBtn";
import BookingModal from "../components/common/BookingModal";

const DetailedProductBlock = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const handleOpenBookingModal = () => {
    setIsBookingModalOpen(true);
  };
  return (
    <>
      {/* SECTION TITLE */}
      <section className="bg-white py-10 sm:py-16 overflow-hidden">
        <Container>
          {/* Mobile */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="sm:mb-10 mb-5 font-heading text-3xl font-extrabold leading-tight lg:text-4xl">
              Your Daily Energy &{" "}
              <span className="text-[#ff6600]">Metabolism Companion</span>
            </h2>
          </div>
          {/* Description */}
          <p className="mx-auto mt-4 mb-12 text-center text-lg leading-relaxed ">
            Introducing Ignite Fat Burner a harmonious blend of thoughtfully selected
            natural extracts, caffeine, and amino precursors. This balanced
            formula supports your body's natural metabolism, thermogenesis (fat
            utilization), and delivers smooth, all-day energy without harsh
            stimulants.
          </p>

          <h2 className="sm:mb-10 mb-5 font-heading text-3xl text-center font-extrabold leading-tight lg:text-4xl">
            <span className="text-[#ff6600]">Key Benefits</span>
          </h2>
          <div className="grid grid-cols-1 sm:gap-8 gap-4 sm:grid-cols-2 lg:grid-cols-3 text-left">
            {/* Benefit 1 */}
            <div className="rounded-xl border border-gray-200 sm:p-6 p-2 text-center sm:shadow-xl shadow-lg">
              {/* Accent line */}
              <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[#FF6600]/80 transition group-hover:bg-[#FF6600]" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Fat Utilization
              </h4>
              <p className="text-gray-600">
                Ingredient A helps you effectively mobilize stubborn stored fat
                and convert it into energy.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="rounded-xl border border-gray-200 sm:p-6 p-2 text-center sm:shadow-xl shadow-lg">
              {/* Accent line */}
              <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[#FF6600]/80 transition group-hover:bg-[#FF6600]" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Sustained Energy
              </h4>
              <p className="text-gray-600">
                Ingredient B naturally boosts your energy and mental alertness
                without the jitters or "crash."
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="rounded-xl border border-gray-200 sm:p-6 p-2 text-center sm:shadow-xl shadow-lg">
              {/* Accent line */}
              <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-[#FF6600]/80 transition group-hover:bg-[#FF6600]" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Metabolism & Recovery
              </h4>
              <p className="text-gray-600">
                Ingredient C supports your healthy metabolism in faster
                recovery after workouts.
              </p>
            </div>
          </div>

          <div className="mt-6 md:mt-8 sm:mt-16 text-center">
            <BoockBtn
              className="rounded-full bg-[#ff6600] px-10 py-3 text-lg font-semibold text-white transition hover:bg-orange-600 shadow-md"
              btnnamed={"Start Transformation At just ₹649/-"}
              onClick={handleOpenBookingModal}
            />
          </div>
        </Container>
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
        />
      </section>
    </>
  );
};

export default DetailedProductBlock;
