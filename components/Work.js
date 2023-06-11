import Image from "next/image";
import React from "react";

const proyectItems = [
  {
    name: "honeymed.",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    image: "/images/honey-med.png",
    link: "https://honey-med.vercel.app/",
  },
  {
    name: "dcatalá",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    image: "/images/dcatala.png",
    link: "https://dc-next-app.vercel.app/",
  },
];

export default function Work() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 h-auto items-start md:items-center'>
      <div className='w-full md:w-1/2 md:sticky top-1/2 transform -translate-y-1/2'>
        <h2 className='text-neutral-100 text-7xl md:text-8xl xl:text-9xl font-medium group mb-2'>
          work<span className='text-red-500 animate-pulse'>_</span>
        </h2>
      </div>
      <div className='grid grid-cols-1 gap-4 md:col-span-2 w-full items-start justify-items-center'>
        {/* Repeat this div for each item of work you want to showcase */}
        {proyectItems.map((item) => (
          <>
            <div className='w-full'>
              <a href={item.link}>
                <div className='aspect-w-16 aspect-h-9 overflow-hidden'>
                  <Image
                    src={item.image}
                    alt='/* Description of your work */'
                    className='object-cover h-full w-full'
                    fill
                  />
                </div>
                <h2 className='text-neutral-100 text-2xl md:text-4xl xl:text-5xl font-medium group flex my-4 max-w-full'>
                  {item.name}
                  <span className='text-red-500 animate-pulse inline-block'>
                    _
                  </span>
                </h2>
                <p className='text-neutral-100 text-2xl md:text-3xl xl:text-3xl font-medium group flex my-4 max-w-full'>
                  {item.description}
                  <span className='text-red-500 animate-pulse'>_</span>
                </p>
              </a>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
