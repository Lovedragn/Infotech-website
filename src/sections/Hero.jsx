import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section className="relative pt-40 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 scale-[90%]">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388 md:mt-20 mt-0">

            <h1 className="mb-7 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Transform your Bussiness To <h1 className="text-[#2ae2ff]">Next Level</h1>
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              Boost your business growth via Digitally 
            </p>
            
            <h1 className="mb-7 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              DESIGN
            </h1>
            
          </div>

          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <img
              src="/images/hero.png"
              className="size-1230 max-lg:h-auto"
              alt="hero"
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
