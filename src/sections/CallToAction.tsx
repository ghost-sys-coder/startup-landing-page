"use client";
import Image from "next/image";
import React, { useRef } from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import { motion, useScroll, useTransform } from "framer-motion";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const translateY = useTransform(scrollYProgress, [1, 0], [150, -150]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">Celebrate the joy of accomplishment with an app designed to track your progress.</p>
          <motion.img 
          src={starImage.src} 
          alt="star" 
          width={360} 
          className="absolute -top-[167px] -left-[360px]"
          style={{
            translateY: translateY
          }}
          />
          <motion.img 
          src={springImage.src} 
          alt="star" 
          width={360} 
          className="absolute -top-[19px] -right-[331px]"
          style={{
            translateY: translateY
          }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button type="button" className="btn btn-primary">Get for free</button>
          <button type="button" className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
};
