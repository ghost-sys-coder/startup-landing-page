import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';

import { Testimonial } from '@/sections/Testimonials'

interface TestimonialColumnProps {
  columnData: Testimonial[];
  className?: string;
  duration?: number
}

const TestimonialsColumn: React.FC<TestimonialColumnProps> = ({ columnData, className, duration }) => {
  return (
    <div className={className}>
      <motion.div
        className="flex flex-col gap-6 pb-6"
        animate={{
          translateY: "-50%"
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          duration: duration || 10
        }}
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {columnData.map(({ text, imageSrc, name, username }, index) => (
              <div className="card" key={index}>
                <div>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image
                    src={imageSrc}
                    alt={name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">{name}</div>
                    <div className="leading-5 tracking-tight">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  )
}

export default TestimonialsColumn