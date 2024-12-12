"use client";

import Image from "next/image";
import ArrowIcon from "@/assets/arrow-right.svg";
import CogImage from "@/assets/cog.png";
import CylinderImage from "@/assets/cylinder.png"
import noodleImage from "@/assets/noodle.png"


import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start']
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // useMotionValueEvent(scrollYProgress, 'change', (latestValue)=> (console.log(latestValue)))
  
  return (
    <section ref={heroRef} className="pt-8 pb-20 bg-custom-radial md:pt-5 md:pb-10 overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">Version 2.0 is here</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-transparent mt-6">Pathway to productivity</h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">Enjoy the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successess.</p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button type="button" className="btn btn-primary">Get for Free</button>
              <button type="button" className="btn btn-text gap-1">
                <span>Learn More</span>
                <ArrowIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[640px] md:flex-1 relative">
            <motion.img
              alt="cog image"
              src={CogImage.src}
              className="md:h-full md:max-w-none -left-6 md:absolute lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 3,
                ease: 'easeInOut'
              }}
            />
            <motion.img
              alt="cylinder"
              src={CylinderImage.src}
              width={220}
              height={220}
              className="hidden md:block md:absolute md:-left-32 -top-8"
              style={{
                translateY: translateY
              }}
            />
            <motion.img alt="noodle image" src={noodleImage.src} width={220} className="hidden md:block absolute top-[524px] left-[448px] rotate-30"
              style={{
                translateY: translateY,
                rotate: 30
              }}
            />
          </div>
        </div>
      </div>

    </section>
  )
};
