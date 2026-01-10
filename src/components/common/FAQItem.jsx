import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-4 last:border-b-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="font-medium text-text">{question}</span>
        <span className="ml-4 flex-shrink-0 text-2xl text-primary">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && <div className="mt-3 text-sm text-text-muted">{answer}</div>}
    </div>
  );
};

export default FAQItem;
