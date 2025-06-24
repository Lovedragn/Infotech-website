import React, { useEffect, useState } from "react";

// Example items: [{ image: '/images/testimonials/alicia-barker.png', name: 'Alicia Barker', role: 'Designer' }]
const AutoSlider = ({ items, interval = 3000 }) => {
  const [current, setCurrent] = useState(0);
  const length = items.length;

  useEffect(() => {
    const slide = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, interval);
    return () => clearInterval(slide);
  }, [length, interval]);

  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <div className="w-full flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white/10 rounded-2xl shadow-lg flex flex-col items-center p-6">
        <img
          src={items[current].image}
          alt={items[current].name || `slide-${current}`}
          className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-[#2ae2ff] bg-white"
        />
        {items[current].name && (
          <div className="text-p4 font-bold text-lg mb-1">{items[current].name}</div>
        )}
        {items[current].role && (
          <div className="text-s4 text-sm mb-2">{items[current].role}</div>
        )}
        {items[current].text && (
          <div className="text-center text-white/90 text-base">{items[current].text}</div>
        )}
      </div>
      {/* Dots */}
      <div className="flex gap-2 mt-4">
        {items.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-[#2ae2ff]' : 'bg-s4/40'} transition-colors`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlider; 