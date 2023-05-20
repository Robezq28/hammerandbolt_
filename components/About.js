import React from "react";

export default function About() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center h-screen'>
      <div className='w-full md:w-1/2 md:sticky top-1/2 transform -translate-y-1/2'>
        <h2 className='text-neutral-100 text-7xl md:text-8xl xl:text-9xl font-medium group mb-2'>
          about<span className='text-red-500 animate-pulse'>_</span>
        </h2>
      </div>
      <div className='w-full md:w-2/3'>
        <p className='text-neutral-100 text-4xl md:text-5xl xl:text-6xl font-medium group mb-2'>
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
          <span className='text-red-500 animate-pulse'>_</span>
        </p>
      </div>
    </div>
  );
}
