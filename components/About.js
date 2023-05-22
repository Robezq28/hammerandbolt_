"use client";
import { useContext } from "react";
import LanguageContext from "@/contexts/LanguageContext";

export default function About() {
  const { language } = useContext(LanguageContext);
  return (
    <>
      {language === "en" ? (
        <div className='flex flex-col md:flex-row items-center justify-center h-screen mb-24'>
          <div className='w-full md:w-1/2 md:sticky top-1/2 transform -translate-y-1/2'>
            <h2 className='text-neutral-300 text-7xl md:text-8xl xl:text-9xl font-medium group mb-2'>
              about<span className='text-red-500 animate-pulse'>_</span>
            </h2>
          </div>
          <div className='w-full md:w-2/3'>
            <p className='text-neutral-300 text-4xl md:text-5xl xl:text-6xl font-medium group mb-2'>
              more than just pretty pixels
              <span className='text-red-500 animate-pulse'>_</span>
            </p>
            <br />
            <p className='text-neutral-300 text-4xl md:text-5xl xl:text-6xl font-medium group mb-2'>
              we build websites that aren<span>&#39;</span>t just good to look
              at - they work like a dream, too.
              <span className='text-red-500 animate-pulse'>_</span>
            </p>
            <br />
            <p className='text-neutral-300 text-4xl md:text-5xl xl:text-6xl font-medium group mb-2'>
              smooth, quick, responsive - it
              <span>&#39;</span>s like they read your mind.
              <span className='text-red-500 animate-pulse'>_</span>
            </p>
            <br />
            <p className='text-neutral-300 text-4xl md:text-5xl xl:text-6xl font-medium group mb-2'>
              get ready to impress your customers and make your competitors
              jealous
              <span className='text-red-500 animate-pulse'>_</span>
            </p>
          </div>
        </div>
      ) : (
        <div className='flex flex-col md:flex-row items-center justify-center h-screen'>
          <div className='w-full md:w-1/2 md:sticky top-1/2 transform -translate-y-1/2'>
            <h2 className='text-neutral-300 text-7xl md:text-8xl xl:text-9xl font-medium group mb-2'>
              acerca<span className='text-red-500 animate-pulse'>_</span>
            </h2>
          </div>
          <div className='w-full md:w-2/3'>
            <p className='text-neutral-300 text-4xl md:text-5xl xl:text-6xl font-medium group mb-2'>
              más que solo pixeles bonitos
              <span className='text-red-500 animate-pulse'>_</span>
            </p>
            <br />
            <p className='text-neutral-300 text-4xl md:text-5xl xl:text-6xl font-medium group mb-2'>
              construimos sitios web que no solo son actractivos - también
              funcionan como en sueño.
              <span className='text-red-500 animate-pulse'>_</span>
            </p>
            <br />
            <p className='text-neutral-300 text-4xl md:text-5xl xl:text-6xl font-medium group mb-2'>
              suaves, rápidos, responsivos - es como si leyeran tu mente.
              <span className='text-red-500 animate-pulse'>_</span>
            </p>
            <br />
            <p className='text-neutral-300 text-4xl md:text-5xl xl:text-6xl font-medium group mb-2'>
              prepárate para impresionar a tus clientes y poner celosos a tus
              competidores
              <span className='text-red-500 animate-pulse'>_</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
