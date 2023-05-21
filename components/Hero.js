"use client";
import React from "react";
import { useSpring, animated } from "@react-spring/web";

export default function Hero() {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1000 });

  return (
    <animated.div
      style={fadeIn}
      className='flex items-center justify-center h-screen flex-col'
    >
      <div>
        <h2 className='text-neutral-300 text-6xl md:text-8xl xl:text-9xl font-medium mb-2'>
          From coffee
        </h2>
        <h2 className='text-neutral-300 text-6xl md:text-8xl xl:text-9xl font-medium mb-2'>
          sips
          <span className='text-red-500'>...</span>
        </h2>
        <h2 className='text-neutral-300 text-6xl md:text-8xl xl:text-9xl font-medium mb-2 sm:mb-0 sm:mr-4'>
          to website
        </h2>
        <h2 className='text-neutral-300 text-6xl md:text-8xl xl:text-9xl font-medium mb-2 sm:mb-0 sm:mr-4'>
          hits
          <span className='text-red-500 animate-pulse'>_</span>
        </h2>
      </div>
    </animated.div>
  );
}
