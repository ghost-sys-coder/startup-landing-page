"use client";
import { twMerge } from "tailwind-merge";
import CheckIcon from "@/assets/check.svg";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
        <h2 className="section-title">Pricing</h2>
        <p className="section-description mt-5">Forever free. Upgrade for unlimited tasks, better security and exclusive features.</p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, inverse, features }) => (
            <div key={title} className={twMerge("card", inverse === true && "border-black bg-black text-white")}>
              <div className="flex justify-between">
                <h3 className={twMerge("text-lg font-bold text-black/50", inverse === true && "text-white/60")}>{title}</h3>
                {popular === true && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <motion.span
                      animate={{
                        backgroundPositionX: "-100%"
                      }}
                      transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 1,
                        repeatType: 'loop'
                      }}
                      className="bg-custom-rainbow-bg font-medium text-transparent bg-clip-text">Popular</motion.span>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">${monthlyPrice}</span>
                <span className="tracking-tight font-bold text-black/50">/month</span>
              </div>
              <button type="button" className={twMerge("btn btn-primary w-full mt-[30px]", inverse === true && "bg-white text-black")}>{buttonText}</button>
              <ul className="flex flex-col gap-5 mt-8">
                {features.map((feature, index) => (
                  <li key={index} className="text-sm flex items-center gap-4">
                    <CheckIcon className="w-6 h-6" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};
