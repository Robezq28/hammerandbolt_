import React from "react";

export default function About() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center h-screen'>
      <div className='w-full md:w-1/2 md:sticky top-1/2 transform -translate-y-1/2'>
        <h2 className='text-neutral-300 text-7xl md:text-8xl xl:text-9xl font-medium group mb-2'>
          about<span className='text-red-500 animate-pulse'>_</span>
        </h2>
      </div>
      <div className='w-full md:w-2/3'>
        <p className='text-neutral-300 text-4xl md:text-5xl xl:text-6xl font-medium group mb-2'>
          we&aposre more than coders, we&aposre digital bolders
          <span className='text-red-500 animate-pulse'>_</span>
        </p>
        <br />
        <p className='text-neutral-300 text-4xl md:text-5xl xl:text-6xl font-medium group mb-2'>
          we rock the latest tech like{" "}
          <span className='underline decoration-red-500'>react.js</span> and{" "}
          <span className='underline decoration-red-500'>next.js</span> to craft
          custom, powerful websites that blow minds and exceed expectations
          <span className='text-red-500 animate-pulse'>_</span>
        </p>
      </div>
    </div>
  );
}
