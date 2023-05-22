"use client";
import React from "react";
import { useSpring, animated } from "@react-spring/web";
import EmojiConfetti from "./ScrollConfetti";

export default function Hero() {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  const config = {
    angle: 180,
    spread: 460,
    startVelocity: 40,
    elementCount: 300,
    dragFriction: 0.12,
    duration: 30000,
    stagger: 5,
    width: "10px",
    height: "10px",
    perspective: "900px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  return (
    <>
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
            hits <EmojiConfetti triggerHeight={100} config={config} />
          </h2>
        </div>
      </animated.div>
    </>
  );
}
