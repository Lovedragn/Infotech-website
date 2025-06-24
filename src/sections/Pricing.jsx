import {Element} from "react-scroll";
import {useState} from "react";
import clsx from "clsx";
import CountUp from "react-countup";
import {plans} from "../constants/index.jsx";
import Button from "../components/Button.jsx";
import AutoSlider from "../components/AutoSlider.jsx";

const sliderItems = [
  {
    image: "/images/testimonials/alicia-barker.png",
    name: "Alicia Barker",
    role: "Designer",
    text: "Alicia's testimonial goes here."
  },
  {
    image: "/images/testimonials/becky-snider.png",
    name: "Becky Snider",
    role: "Developer",
    text: "Becky's testimonial goes here."
  },
  {
    image: "/images/testimonials/jessica-saunders.png",
    name: "Jessica Saunders",
    role: "Manager",
    text: "Jessica's testimonial goes here."
  },
];

const Pricing = () => {
    const [monthly, setMonthly] = useState(false);

    return (
        <section>
            <Element name="pricing">
                <div className="container ">
                    <div
                        className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-12 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
                        <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm ">
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
                    <div
                        className="scroll-hide relative z-2 -mt-32 flex flex-col md:flex-row items-stretch md:items-start gap-2 md:gap-3 pt-2 md:pt-4 scale-75"
                    >
                        {plans.map((plan, index) => (
                            <div
                                key={plan.id}
                                className={clsx(
                                    "pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-3 sm:p-4 bg-white/5 max-lg:rounded-2xl w-full md:w-[calc(33.33%+2px)] mb-2 md:mb-0",
                                    // Add extra margin for last card on mobile
                                    index === plans.length - 1 ? "mb-0" : ""
                                )}
                            >
                                {index === 1 && (
                                    <div className="mt-2 md:mt-4"/>
                                )}

                                <div
                                    className={clsx(
                                        "relative flex flex-col items-center",
                                        index === 1 ? "pt-6 md:pt-10" : "pt-4 md:pt-6",
                                    )}
                                >
                                    <div className="relative z-2 flex items-center justify-center">
                                        <div
                                            className={clsx(
                                                "h-num flex items-start text-p4",
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
                                        "body-1 relative z-2 mb-4 md:mb-6 w-full border-b-s2 pb-3 md:pb-5 text-center text-p4",
                                        index === 1 && "border-b",
                                    )}
                                >
                                    {plan.caption}
                                </div>

                                {index === 1 && (
                                    <div className="mb-4 md:mb-8"/>
                                )}

                            </div>
                        ))}
                    </div>

                    {/* Auto sliding image carousel under pricing */}
                    <AutoSlider items={sliderItems} />
                </div>
            </Element>
        </section>
    );
};

export default Pricing;
