const AboutFooter = () => {
  return (
    <section className="text-white pt-8 pb-4 mt-12">
      <div className="container mx-auto bg-[#080d20] rounded-4xl px-2 py-6 sm:px-4 sm:py-10">
        <div className="flex flex-col gap-8 sm:gap-10 md:flex-row md:justify-between md:gap-0">
          {/* About */}
          <div className="md:w-1/4 mb-6 md:mb-0">
            <h2 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4">TECHINTA</h2>
            <p className="mb-1 sm:mb-2 flex items-center gap-2 text-sm sm:text-base">
              {/* Location SVG */}
              <span className="inline-block w-4 h-4 sm:w-5 sm:h-5">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-[#2ae2ff]"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 10.5c0 7-7.5 11-7.5 11s-7.5-4-7.5-11a7.5 7.5 0 1115 0z" /></svg>
              </span>
              Ruby School Road
            </p>
            <p className="mb-1 sm:mb-2 flex items-center gap-2 text-sm sm:text-base">
              Saravanampatti, coimbatore
            </p>
            <p className="mb-1 sm:mb-2 flex items-center gap-2 text-sm sm:text-base">
              {/* Call SVG */}
              <span className="inline-block w-4 h-4 sm:w-5 sm:h-5">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-[#2ae2ff]"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.3 1.2a2 2 0 01-.45 1.95l-.7.7a16.001 16.001 0 006.36 6.36l.7-.7a2 2 0 011.95-.45l1.2.3A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C7.82 23 1 16.18 1 8V7a2 2 0 012-2z" /></svg>
              </span>
              <span className="font-bold">Phone:</span> +91 9363538468
            </p>
            <p className="mb-1 sm:mb-2 flex items-center gap-2 text-sm sm:text-base">
              {/* Email SVG */}
              <span className="inline-block w-4 h-4 sm:w-5 sm:h-5">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-[#2ae2ff]"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v4" /></svg>
              </span>
              <span className="font-bold">Email:</span> info@techinta.com
            </p>
          </div>

          {/* Useful Links */}
          <div className="md:w-1/5 mb-6 md:mb-0">
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Useful Links</h3>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Terms of service</a></li>
              <li><a href="#" className="hover:underline">Privacy policy</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="md:w-1/5 mb-6 md:mb-0">
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Our Services</h3>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Product Management</li>
              <li>Marketing</li>
              <li>Graphic Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFooter; 