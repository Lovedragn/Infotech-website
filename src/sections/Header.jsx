import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLink = ({ title }) => {
    const path = title.toLowerCase().replace(/\s+/g, "-");

    return (
        <Link
            to={`/${path}`}
            onClick={() => setIsOpen(false)}
            className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
        >
          {title}
        </Link>
    );
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled && "py-2 bg-[#00000f86] backdrop-blur-[16px] md:rounded-full md:scale-[75%]",
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        <Link to="/" className="lg:hidden flex-1 flex items-center gap-2 cursor-pointer z-2">
          <img src="/favicon.png" width={40} height={40} alt="TECHINTA logo" className="brightness-150" />
          <span className="font-extrabold text-xl tracking-widest text-p4">TECHINTA</span>
        </Link>

        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none",
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="Gallery" />
                  <div className="dot" />
                  <NavLink title="Course" />
                </li>

                <li className="nav-logo">
                  <Link to="/"
                    className={clsx(
                      "max-lg:hidden flex items-center gap-2 brightness-150 transition-transform duration-500 cursor-pointer",
                    )}
                  >
                    <img
                      src="/favicon.png"
                      className=""
                      width={48}
                      height={48}
                      alt="TECHINTA logo"
                    />
                    <span className="font-extrabold text-2xl tracking-widest text-p4">TECHINTA</span>
                  </Link>
                </li>

                <li className="nav-li">
                    <NavLink  title="faq" />
                  <div className="dot" />
                  <NavLink title="Contact Us" />
                </li>
              </ul>
            </nav>

            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
