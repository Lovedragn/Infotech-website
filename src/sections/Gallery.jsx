import React from "react";
import { projects } from "../constants/index.jsx";

const Gallery = () => {
  return (
    <section className="min-h-screen bg-black-100 pt-32 sm:pt-36 pb-16 px-2 sm:px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-p4 text-center mb-4 uppercase tracking-wide">Gallery</h1>
        <p className="text-lg text-[#2ae2ff] text-center mb-12">Projects we have done</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item, idx) => (
            <div
              key={item.id}
              className="w-full aspect-[16/9] bg-s2 rounded-2xl overflow-hidden shadow-xl flex items-center justify-center group relative transition-all duration-500"
            >
              <img
                src={item.images}
                alt={`Gallery project ${idx + 1}`}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110 group-hover:shadow-2xl opacity-0 group-hover:opacity-100 animate-fancyFadeIn"
                loading="lazy"
                style={{ aspectRatio: '16/9' }}
              />
              {/* Overlay for fancy effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            </div>
          ))}
        </div>
      </div>
      {/* Fancy fade-in animation keyframes */}
      <style>{`
        @keyframes fancyFadeIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fancyFadeIn {
          animation: fancyFadeIn 1s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
    </section>
  );
};

export default Gallery; 