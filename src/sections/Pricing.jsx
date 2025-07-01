import {Element} from "react-scroll";
import {useState} from "react";
import clsx from "clsx";
import CountUp from "react-countup";
import {plans} from "../constants/index.jsx";
import AutoSlider from "../components/AutoSlider.jsx";

const sliderItems = [
  {
    image: "/images/testimonials/alicia-barker.png",
    name: "KLean Klub",
    role: "Ceo & Founder",
    text: "The team delivered a clean, user-friendly storefront that perfectly represents our home care brand. Their intuitive admin panel makes managing products, orders, and inventory a breeze. I couldn't be happier with how seamless everything is!"
  },
  {
    image: "/images/testimonials/becky-snider.png",
    name: "Studi06Kovai",
    role: "Studio Owner",
    text: "Studi06 Covai now shines online thanks to their elegant design and efficient booking system. It's significantly boosted our studio's engagement and made client scheduling intuitive. Their hands-on support and prompt follow-up during launch were exceptional."
  },
  {
    image: "/images/testimonials/jessica-saunders.png",
    name: "Aadhithyan Software Solutions",
    role: "Director",
    text: "Our custom B2B software portal was delivered on time with sophisticated search and analytics features that meet our exacting standards. The development team was professional and responsive, delivering a robust web solution that drives our business processes."
  },{
    image: "/images/testimonials/jessica-saunders.png",
    name: "Sai Shankara Fashions",
    role: "Director",
    text: "We needed a fashion-forward website that reflects our brand aesthetic — and they nailed it. The digital storefront is stylish, responsive, and easy to update. Customers keep complimenting how beautifully it looks across devices"
  },{
    image: "/images/testimonials/jessica-saunders.png",
    name: "Riya Connects",
    role: "Founder",
    text: "Our professional services site from Riya Connects is clean, fast, and effectively communicates our value. The site is easy to manage and the onboarding support was excellent. We've seen a noticeable uptick in service inquiries since launch"
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
