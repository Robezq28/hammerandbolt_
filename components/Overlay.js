// Overlay.js
import React from "react";

export default function Overlay() {
  return (
    <div
      className='absolute inset-0 flex items-center justify-center'
      style={{ zIndex: 5000 }}
    >
      <div className=''>
        <h2 className='text-neutral-100 text-7xl md:text-8xl xl:text-9xl  font-medium group flex mb-2'>
          ELEVATE<span className='text-red-500 animate-pulse'>_</span>
        </h2>
        <h2 className='text-neutral-100 text-5xl md:text-6xl xl:text-7xl font-medium group flex mb-2 sm:mb-0 sm:mr-4'>
          design<span className='text-red-500 animate-pulse'>_</span>
        </h2>
      </div>
    </div>
  );
}
