import React from "react";

export default function Hero() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <h2 className=' text-neutral-300 text-6xl md:text-8xl xl:text-9xl  font-medium group flex mb-2'>
        From coffee
      </h2>
      <h2 className=' text-neutral-300 text-6xl md:text-8xl xl:text-9xl  font-medium group flex mb-2'>
        sips
        <span className='text-red-500'>...</span>
      </h2>
      <h2 className=' text-neutral-300 text-6xl md:text-8xl xl:text-9xl font-medium group flex mb-2 sm:mb-0 sm:mr-4'>
        to website
      </h2>
      <h2 className=' text-neutral-300 text-6xl md:text-8xl xl:text-9xl font-medium group flex mb-2 sm:mb-0 sm:mr-4'>
        hits
        <span className='text-red-500 animate-pulse'>_</span>
      </h2>
    </div>
  );
}
