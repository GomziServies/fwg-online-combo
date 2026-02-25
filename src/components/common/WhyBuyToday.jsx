import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BoockBtn from "./BoockBtn";

// ── Inline SVG Icons (no CDN needed) ──────────────────────────────────────────
const Icons = {
  fire: (
    <svg viewBox="0 0 16 16" fill="currentColor" width="20" height="20">
      <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
    </svg>
  ),
  book: (
    <svg viewBox="0 0 16 16" fill="currentColor" width="20" height="20">
      <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
    </svg>
  ),
  camera: (
    <svg viewBox="0 0 16 16" fill="currentColor" width="20" height="20">
      <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2z"/>
    </svg>
  ),
  truck: (
    <svg viewBox="0 0 16 16" fill="currentColor" width="20" height="20">
      <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
    </svg>
  ),
  tag: (
    <svg viewBox="0 0 16 16" fill="currentColor" width="20" height="20">
      <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
    </svg>
  ),
  check: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <polyline points="2.5,8.5 6,12 13.5,4.5"/>
    </svg>
  ),
  close: (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" width="14" height="14">
      <line x1="2" y1="2" x2="14" y2="14"/>
      <line x1="14" y1="2" x2="2" y2="14"/>
    </svg>
  ),
};

const items = [
  { icon: Icons.fire,   label: "Ignite Fat Burner" },
  { icon: Icons.book,   label: "Free Fitness Blueprint" },
  { icon: Icons.camera, label: "Daily 1-Hour Live Exercise Training" },
  { icon: Icons.truck,  label: "Free Delivery" },
  { icon: Icons.tag,    label: "One Affordable Price of ₹649" },
];

// ── handleOpenBookingModal prop તરીકે pass કરો parent component માંથી ──
const WhyBuyToday = ({ handleOpenBookingModal }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── FLOATING BUTTON ── */}
      <div
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end transition-all duration-300 ${
          open ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <button
          onClick={() => setOpen((p) => !p)}
          className="relative flex items-center gap-2 rounded-l-2xl bg-[#FF6600] border border-white/20 px-3 py-3 shadow-2xl"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          aria-label="Why Buy Today"
        >
          {!open && (
            <span className="absolute -top-1 -left-1 h-3 w-3 rounded-full bg-yellow-300 animate-ping" />
          )}
          <span
            className="text-sm font-black tracking-widest text-white uppercase"
            style={{ writingMode: "vertical-rl", letterSpacing: "0.18em" }}
          >
            Why Buy Today
          </span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-white text-lg font-bold"
            style={{ writingMode: "horizontal-tb" }}
          >
            ▲
          </motion.span>
        </button>
      </div>

      {/* ── SLIDE-IN CARD ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            />

            {/* card */}
            <motion.div
              key="card"
              initial={{ x: "110%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "110%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-14 top-1/2 -translate-y-1/2 z-50 w-[300px] sm:w-[340px]"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_25px_60px_rgba(0,0,0,0.25)] border border-orange-100">

                {/* Header */}
                <div className="bg-[#FF6600] px-6 py-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-orange-100 mb-1">
                    Limited Offer
                  </p>
                  <h3 className="text-2xl font-black text-white leading-tight">
                    Why Buy Today?
                  </h3>
                  <p className="mt-1 text-sm text-orange-100 font-medium">
                    This is not just a product.
                  </p>
                </div>

                {/* You Are Getting */}
                <div className="px-6 pt-5 pb-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                    You Are Getting:
                  </p>
                  <ul className="space-y-3">
                    {items.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 + 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#FF6600]">
                          {item.icon}
                        </span>
                        <span className="text-sm font-semibold text-gray-800">
                          {item.label}
                        </span>
                        <span className="ml-auto text-[#FF6600]">
                          {Icons.check}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Bottom note */}
                {/* <div className="mx-6 mt-4 rounded-2xl bg-orange-50 border border-orange-100 px-4 py-3">
                  <p className="text-xs text-gray-600 font-medium text-center leading-relaxed">
                    It is a{" "}
                    <span className="font-bold text-[#FF6600]">
                      structured starting point
                    </span>{" "}
                    for real change.
                  </p>
                </div> */}

                {/* ── CTA Button ── */}
                <div className="px-6 py-4">
                  <BoockBtn
                    btnnamed="Start Transformation At just ₹649/-"
                    onClick={() => {
                      setOpen(false);
                      handleOpenBookingModal?.();
                    }}
                    className="w-full bg-[#FF6600] text-white py-3 rounded-2xl font-black text-base shadow-xl hover:bg-orange-600 transition-all active:scale-95 text-center"
                  />
                </div>

                {/* Close button */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 transition"
                >
                  {Icons.close}
                </button>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhyBuyToday;