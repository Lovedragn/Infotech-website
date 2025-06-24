import { Element } from "react-scroll";
import { details, features } from "../constants/index.jsx";
import Button from "../components/Button.jsx";

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3 scale-75">
            {/* Feature Cards */}
            {features.map(({ id ,caption, title, text, button }) => (
              <div
                key={id}
                className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
              >
                <div className="w-full flex justify-start items-start">
                  <div className="-ml-3 mb-12 flex items-center justify-center flex-col"></div>
                </div>
                <p className="caption mb-5 max-md:mb-6">{caption}</p>
                <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5">
                  {title}
                </h2>
                <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">{text}</p>
                <Button icon={button.icon}>{button.title}</Button>
              </div>
            ))}

            {/* Desktop: 4 items per row, 2 rows */}
            <ul className="hidden md:flex flex-wrap justify-center gap-6 px-[5%] pt-10 pb-20">
              {details.map(({ id, icon, title }) => (
                <li
                  key={id}
                  className="w-[22%] aspect-square relative hover:bg-blue-950 pt-8 px-4 pb-8 border-2 border-s3 rounded-7xl"
                >
                  <div className="absolute top-8 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />
                  <div className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 w-20 h-20 overflow-hidden">
                    <img
                      src={icon}
                      alt={title}
                      className="w-full h-full object-contain z-20"
                    />
                  </div>
                  <h3 className="relative z-2 max-w-36 mx-auto my-0 base-small text-center uppercase">
                    {title}
                  </h3>
                </li>
              ))}
            </ul>

            {/* Mobile: marquee */}
            <ul className="md:hidden flex items-center gap-6 pt-10 pb-10 animate-marquee ">
              <div className="flex justify-center w-full gap-6">
                {details.map(({ id, icon, title }) => (
                  <li
                    key={id}
                    className="inline-block w-[65vw] aspect-square  pt-4 px-8 pb-4 border-2 border-s3 rounded-3xl"
                  >
                    <div className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 w-20 h-20 overflow-hidden">
                      <img
                        src={icon}
                        alt={title}
                        className="w-full h-full object-contain z-20"
                      />
                    </div>
                    <h3 className="text-center uppercase text-xs">{title}</h3>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
