import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-300 py-4 last:border-b-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-left"
      >
        <h2 className="font-medium text-xl">{question}</h2>
        <p className="ml-4 flex-shrink-0 text-2xl text-primary">
          {open ? "-" : "+"}
        </p>
      </button>
      {open && <div className="mt-3 text-lg text-gray-800">{answer}</div>}
    </div>
  );
};

export default FAQItem;
