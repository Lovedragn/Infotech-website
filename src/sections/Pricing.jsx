import { Element } from "react-scroll";
import { useState } from "react";
import clsx from "clsx";
import CountUp from "react-countup";
import { plans } from "../constants/index.jsx";
import Button from "../components/Button.jsx";

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);

  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
              Our Achivement's
            </h3>

            <div className="pricing-bg">
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
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>

          {/*  pricing section*/}
          <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)]"
              >
                {index === 1 && (
                  <div className="g4 absolute h-330 left-0 right-0 top-0 z-1 rounded-tl-3xl rounded-tr-3xl" />
                )}

                <div
                  className={clsx(
                    "relative flex flex-col items-center",
                    index === 1 ? "pt-24" : "pt-12",
                  )}
                >


                  <div className="relative z-2 flex items-center justify-center">
                    <div
                      className={clsx(
                        "h-num flex items-start",
                        index === 1 ? "text-p3" : "text-p4",
                      )}
                    >
                      <CountUp
                        start={plan.priceMonthly}
                        end={monthly ? plan.priceMonthly : plan.priceYearly}
                        duration={0.4}
                        useEasing={false}
                        preserveValue
                      />
                    </div>
                  </div>
                </div>

                <div
                  className={clsx(
                    "body-1 relative z-2 mb-10 w-full border-b-s2 pb-9 text-center text-p4",
                    index === 1 && "border-b",
                  )}
                >
                  {plan.caption}
                </div>

                <ul className="mx-auto space-y-4 xl:px-7">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="relative flex items-center gap-5"
                    >
                      <img
                        src={"/images/check.png"}
                        alt="check"
                        className="size-10 object-contain"
                      />
                      <p className="flex-1">{feature}</p>
                    </li>
                  ))}
                </ul>


                {index === 1 && (
                  <p className="small-compact mt-9 text-center text-p3 before:mx-2.5 before:content-['-'] after:mx-2.5 after:content-['-']">
                    Limited time offer
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
