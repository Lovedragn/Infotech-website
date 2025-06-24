import React, { useState, useEffect } from "react";

const courseIcons = {
  AWS: (
    <svg viewBox="0 0 32 32" fill="none" className="w-20 h-20 mx-auto mb-4"><ellipse cx="16" cy="16" rx="16" ry="16" fill="#FF9900"/><path d="M10 22l6-12 6 12h-12z" fill="#fff"/></svg>
  ),
  DevOps: (
    <svg viewBox="0 0 32 32" fill="none" className="w-20 h-20 mx-auto mb-4"><circle cx="16" cy="16" r="16" fill="#4B32C3"/><path d="M10 16a6 6 0 1112 0 6 6 0 01-12 0zm6-4v8m-4-4h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
  ),
  Python: (
    <svg viewBox="0 0 32 32" fill="none" className="w-20 h-20 mx-auto mb-4"><rect width="32" height="32" rx="16" fill="#306998"/><path d="M16 8c-4 0-4 2-4 4v2h8V12c0-2 0-4-4-4zm-2 2a1 1 0 112 0 1 1 0 01-2 0zm-4 4v4c0 2 0 4 4 4h2v-4h-6zm2 6a1 1 0 100-2 1 1 0 000 2zm10-6v-2c0-2 0-4-4-4h-2v4h6zm-2-6a1 1 0 100 2 1 1 0 000-2zm4 4v4c0 2 0 4-4 4h-2v-4h6zm-2 6a1 1 0 100-2 1 1 0 000 2z" fill="#FFD43B"/></svg>
  ),
  "Full Stack": (
    <svg viewBox="0 0 32 32" fill="none" className="w-20 h-20 mx-auto mb-4"><rect width="32" height="32" rx="16" fill="#00B8D9"/><rect x="8" y="8" width="16" height="4" rx="2" fill="#fff"/><rect x="8" y="14" width="16" height="4" rx="2" fill="#fff"/><rect x="8" y="20" width="16" height="4" rx="2" fill="#fff"/></svg>
  ),
  Database: (
    <svg viewBox="0 0 32 32" fill="none" className="w-20 h-20 mx-auto mb-4"><ellipse cx="16" cy="10" rx="8" ry="4" fill="#6C63FF"/><rect x="8" y="10" width="16" height="12" rx="8" fill="#6C63FF"/><ellipse cx="16" cy="22" rx="8" ry="4" fill="#6C63FF"/></svg>
  ),
  "Backend Development": (
    <svg viewBox="0 0 32 32" fill="none" className="w-20 h-20 mx-auto mb-4"><rect width="32" height="32" rx="16" fill="#FF5A5F"/><rect x="10" y="10" width="12" height="12" rx="2" fill="#fff"/><path d="M16 10v12" stroke="#FF5A5F" strokeWidth="2"/><path d="M10 16h12" stroke="#FF5A5F" strokeWidth="2"/></svg>
  ),
  "Frontend Development": (
    <svg viewBox="0 0 32 32" fill="none" className="w-20 h-20 mx-auto mb-4"><rect width="32" height="32" rx="16" fill="#00C853"/><rect x="10" y="10" width="12" height="12" rx="2" fill="#fff"/><path d="M10 10l12 12" stroke="#00C853" strokeWidth="2"/><path d="M22 10l-12 12" stroke="#00C853" strokeWidth="2"/></svg>
  ),
  Excel: (
    <svg viewBox="0 0 32 32" fill="none" className="w-20 h-20 mx-auto mb-4"><rect width="32" height="32" rx="16" fill="#217346"/><text x="16" y="22" textAnchor="middle" fontSize="20" fill="#fff" fontFamily="Arial">X</text></svg>
  ),
  PowerBI: (
    <svg viewBox="0 0 32 32" fill="none" className="w-20 h-20 mx-auto mb-4"><rect width="32" height="32" rx="16" fill="#F2C811"/><rect x="10" y="14" width="2" height="8" rx="1" fill="#fff"/><rect x="15" y="10" width="2" height="12" rx="1" fill="#fff"/><rect x="20" y="18" width="2" height="4" rx="1" fill="#fff"/></svg>
  ),
  "Cyber Security": (
    <svg viewBox="0 0 32 32" fill="none" className="w-20 h-20 mx-auto mb-4"><rect width="32" height="32" rx="16" fill="#263238"/><path d="M16 8l8 4v4c0 5.25-3.75 10-8 12-4.25-2-8-6.75-8-12v-4l8-4z" fill="#fff"/><circle cx="16" cy="16" r="3" fill="#263238"/></svg>
  ),
  "UI/UX": (
    <svg viewBox="0 0 32 32" fill="none" className="w-20 h-20 mx-auto mb-4"><rect width="32" height="32" rx="16" fill="#FF4081"/><rect x="10" y="10" width="12" height="12" rx="2" fill="#fff"/><circle cx="16" cy="16" r="3" fill="#FF4081"/></svg>
  ),
};

const courses = [
  { name: "AWS", image: "/images/gallary/gallery-1.png" },
  { name: "DevOps", image: "/images/gallary/gallery-2.png" },
  { name: "Python", image: "/images/gallary/gallery-3.png" },
  { name: "Full Stack", image: "/images/gallary/gallery-4.png" },
  { name: "Database", image: "/images/gallary/gallery-5.png" },
  { name: "Backend Development", image: "/images/gallary/gallery-6.png" },
  { name: "Frontend Development", image: "/images/gallary/gallery-7.png" },
  { name: "Excel", image: "/images/plan-1.png" },
  { name: "PowerBI", image: "/images/plan-2.png" },
  { name: "Cyber Security", image: "/images/plan-3.png" },
  { name: "UI/UX", image: "/images/testimonials/alicia-barker.png" },
];

const quotes = [
  "Empowering the next generation of tech leaders.",
  "Learn. Build. Innovate.",
  "Your journey to tech mastery starts here.",
  "Unlock your potential with our expert-led courses.",
];

const instagramUrl = "https://www.instagram.com/techinta_/";

const Course = () => {
  const [quoteIdx, setQuoteIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIdx((prev) => (prev + 1) % quotes.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-black-100 pt-32 sm:pt-36 pb-16 px-2 sm:px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-p4 text-center mb-4 uppercase tracking-wide">Courses</h1>
        <div className="text-lg text-[#2ae2ff] text-center mb-8 min-h-[32px] transition-all duration-700 animate-fadeIn">
          {quotes[quoteIdx]}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {courses.map((course, idx) => (
            <div
              key={course.name}
              className="w-full aspect-[16/9] rounded-2xl overflow-visible flex flex-col items-center justify-center group relative transition-all duration-500 p-2 sm:p-4"
            >
              {courseIcons[course.name] || (
                <img
                  src={course.image}
                  alt={course.name}
                  className="object-cover w-20 h-20 mx-auto mb-4 rounded-xl"
                  loading="lazy"
                />
              )}
              <div className="text-2xl sm:text-3xl font-bold text-p4 text-center mt-2 uppercase tracking-wide">
                {course.name}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2ae2ff] text-[#12007a] font-bold text-lg shadow-lg hover:bg-[#1bc9e5] transition-colors"
          >
            See more details on Instagram
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <rect width="20" height="20" x="2" y="2" rx="5" stroke="#12007a" strokeWidth="2"/>
              <circle cx="12" cy="12" r="5" stroke="#12007a" strokeWidth="2"/>
              <circle cx="17" cy="7" r="1.5" fill="#12007a"/>
            </svg>
          </a>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
    </section>
  );
};

export default Course; 