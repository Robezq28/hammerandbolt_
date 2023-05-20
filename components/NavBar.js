"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  return (
    <div className='fixed top-0 w-full z-50'>
      {/* Mobile Menu */}{" "}
      <div className='flex justify-start items-center sm:hidden'>
        <div className='flex items-center justify-around w-full py-4'>
          <h1 className='text-neutral-100 text-3xl sm:text-6xl font-medium'>
            hammerandbolt<span className='text-red-500 animate-pulse'>_</span>
          </h1>
          <button
            className='text-white text-xl '
            onClick={() => setIsOpen(true)}
          >
            <Bars2Icon className='h-6 w-6' />
          </button>
        </div>
        <motion.nav
          variants={sidebarVariants}
          initial='closed'
          animate={isOpen ? "open" : "closed"}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className='fixed top-0 left-0 h-screen w-64 pl-4 bg-black overflow-auto'
        >
          b
          <button
            className='text-neutral-100 pb-4 flex ietms-center justify-start'
            onClick={closeMenu}
          >
            <XMarkIcon className='h-6 w-6' />
          </button>
          <a
            href='/'
            className='text-neutral-100 text-2xl font-medium group block mb-2 sm:mb-0 sm:mr-4'
          >
            about
            <span className='text-red-500 group-hover:animate-pulse'>_</span>
          </a>
          <a
            href='/'
            className='text-neutral-100 text-2xl font-medium group block mb-2 sm:mb-0 sm:mr-4'
          >
            work
            <span className='text-red-500 group-hover:animate-pulse'>_</span>
          </a>
          <a
            href='/'
            className='text-neutral-100 text-2xl font-medium group block mb-2 sm:mb-0 sm:mr-4'
          >
            expertise
            <span className='text-red-500 group-hover:animate-pulse'>_</span>
          </a>
          <a
            href='/'
            className='text-neutral-100 text-2xl font-medium group block mb-2 sm:mb-0 sm:mr-4'
          >
            contact
            <span className='text-red-500 group-hover:animate-pulse'>_</span>
          </a>
          <a
            href='/'
            className='text-neutral-100 text-2xl font-medium group block mb-2 sm:mb-0 sm:mr-4'
          >
            careers
            <span className='text-red-500 group-hover:animate-pulse'>_</span>
          </a>
          {/* Add your mobile links here */}
        </motion.nav>
      </div>
      {/* Desktop Menu */}
      <div className='hidden sm:block'>
        <h1 className='text-neutral-100 text-4xl sm:text-6xl font-medium pt-4'>
          hammerandbolt<span className='text-red-500 animate-pulse'>_</span>
        </h1>
        <nav className='flex flex-col sm:flex-col py-4'>
          <a
            href='/'
            className='text-neutral-100 text-2xl font-medium group block mb-2 sm:mb-0 sm:mr-4'
          >
            about
            <span className='text-red-500 group-hover:animate-pulse'>_</span>
          </a>
          <a
            href='/'
            className='text-neutral-100 text-2xl font-medium group block mb-2 sm:mb-0 sm:mr-4'
          >
            work
            <span className='text-red-500 group-hover:animate-pulse'>_</span>
          </a>
          <a
            href='/'
            className='text-neutral-100 text-2xl font-medium group block mb-2 sm:mb-0 sm:mr-4'
          >
            expertise
            <span className='text-red-500 group-hover:animate-pulse'>_</span>
          </a>
          <a
            href='/'
            className='text-neutral-100 text-2xl font-medium group block mb-2 sm:mb-0 sm:mr-4'
          >
            contact
            <span className='text-red-500 group-hover:animate-pulse'>_</span>
          </a>
          <a
            href='/'
            className='text-neutral-100 text-2xl font-medium group block mb-2 sm:mb-0 sm:mr-4'
          >
            careers
            <span className='text-red-500 group-hover:animate-pulse'>_</span>
          </a>

          {/* Add the rest of your desktop links here */}
        </nav>
      </div>
    </div>
  );
}
