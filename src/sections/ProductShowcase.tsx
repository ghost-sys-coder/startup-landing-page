"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ProductImage from "@/assets/product-image.png";
import PyramidImage from "@/assets/pyramid.png"
import TubeImage from "@/assets/tube.png"

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
        <div className="flex items-center justify-center">
        <div className="tag">Boost your productivity</div>
        </div>
        <h2 className="section-title">A more effective way to track progress</h2>
        <p className="section-description mt-5">Effortlessly turn your ideas into a fully functional, responsive SAAS website in just minutes. </p>
        </div>
        <div className="relative">
        <Image alt="product image" src={ProductImage} className="mt-10" />
          <motion.img alt="pyramid image" src={PyramidImage.src} className="absolute -right-28 -top-32 hidden md:block" width={262} height={262}
            style={{
              translateY: translateY
            }}
          />
          <motion.img alt="tube image" src={TubeImage.src} height={242} width={242} className="absolute bottom-24 -left-36 hidden md:block"
            style={{
              translateY: translateY
            }}
          />
        </div>
      </div>
    </section>
  )
};
