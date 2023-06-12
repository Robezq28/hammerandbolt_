"use client";
import LanguageContext from "@/contexts/LanguageContext";
import Link from "next/link";
import { useContext } from "react";

export default function Intro() {
  const { language } = useContext(LanguageContext);

  return (
    <>
      {language === "en" ? (
        <div className='flex flex-col md:flex-row items-center justify-center h-screen px-4'>
          <div className='w-full md:w-1/2 md:sticky top-1/2 transform -translate-y-1/2'>
            <h2 className='text-neutral-300 text-7xl md:text-8xl xl:text-9xl font-medium group mb-2'>
              intro<span className='text-red-500 animate-pulse'>_</span>
            </h2>
          </div>
          <div className='w-full md:w-2/3'>
            <p className='text-neutral-300 text-4xl md:text-5xl xl:text-6xl font-medium group mb-2'>
              We are not just web designers;{" "}
              <span className='underline decoration-green-500'>
                we are web developers.
              </span>
            </p>
            <br />
            <p className='text-neutral-300 text-4xl md:text-5xl xl:text-6xl font-medium group mb-2'>
              Whats the difference? A{" "}
              <span className='text-pink-500'>designer decorates</span> the
              house; a{" "}
              <span className='text-blue-600'>developer builds it</span> from
              the ground up.
            </p>
            <br />
            <p className='text-neutral-300 text-4xl md:text-5xl xl:text-6xl font-medium group mb-2'>
              We do both—with style 🤘.
            </p>
            <br />
            <Link
              href={"/intro"}
              className='text-neutral-300 text-4xl md:text-5xl xl:text-6xl font-medium group border-4 p-2 border-purple-600 hover:border-red-500 '
            >
              more info
            </Link>
          </div>
        </div>
      ) : (
        <div className='flex flex-col md:flex-row items-center justify-center h-screen'>
          <div className='w-full md:w-1/2 md:sticky top-1/2 transform -translate-y-1/2'>
            <h2 className='text-neutral-300 text-7xl md:text-8xl xl:text-9xl font-medium group mb-2'>
              intro<span className='text-red-500 animate-pulse'>_</span>
            </h2>
          </div>
          <div className='w-full md:w-2/3'>
            <p className='text-neutral-300 text-4xl md:text-5xl xl:text-6xl font-medium group mb-2'>
              quieres subir de nivel tu{" "}
              <span className='underline decoration-red-500'>presencia</span> en
              línea?
            </p>
            <br />
            <p className='text-neutral-300 text-4xl md:text-5xl xl:text-6xl font-medium group mb-2'>
              transformamos sitios web básicos y aburridos en experiencias
              digitales envolventes
              <span className='text-red-500 animate-pulse'>_</span>
            </p>
            <br />
            <p className='text-neutral-300 text-4xl md:text-5xl xl:text-6xl font-medium group mb-2'>
              dile adiós 👋 a los tiempos de carga y hola a la navegación
              ultra-rápida <span className='text-red-500 animate-pulse'>_</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
