"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

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
      <div className='block sm:hidden'>
        <h1 className='text-neutral-100 text-4xl sm:text-6xl font-medium pt-4'>
          hammerandbolt<span className='text-red-500 animate-pulse'>_</span>
        </h1>
        <div className='flex items-center justify-end'>
          <button
            className='text-white text-xl '
            onClick={() => setIsOpen(true)}
          >
            Open
          </button>
        </div>
        <motion.nav
          variants={sidebarVariants}
          initial='closed'
          animate={isOpen ? "open" : "closed"}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className='fixed top-0 left-0 h-screen w-64 pl-4 bg-black overflow-auto'
        >
          <button className='text-neutral-100 p-4' onClick={closeMenu}>
            Close Menu
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
