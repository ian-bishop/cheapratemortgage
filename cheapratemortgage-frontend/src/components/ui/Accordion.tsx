'use client';

import { useState } from 'react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="divide-y divide-[var(--color-paper-darker)]">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className="accordion-trigger"
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span>{item.question}</span>
            <svg
              className={`w-5 h-5 text-[var(--color-ink-muted)] transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="accordion-content">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
