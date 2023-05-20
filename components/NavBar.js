"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuRef = useRef(null);

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!menuRef.current.contains(event.target)) {
        if (!isOpen) return;
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, menuRef]);

  return (
    <div className='fixed top-0 w-full ' style={{ zIndex: 10000 }}>
      {/* Mobile Menu */}{" "}
      <div className='flex justify-start items-center sm:hidden'>
        <div className='flex items-center justify-between w-full py-4 pr-8'>
          <a
            href='/'
            className='text-neutral-100 text-3xl sm:text-6xl font-medium'
          >
            hammerandbolt<span className='text-red-500 animate-pulse'>_</span>
          </a>
          <button
            className='text-white text-xl '
            onClick={() => setIsOpen(true)}
          >
            <Bars2Icon className='h-6 w-6' />
          </button>
        </div>
        <motion.nav
          ref={menuRef}
          variants={sidebarVariants}
          initial='closed'
          animate={isOpen ? "open" : "closed"}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className='fixed top-0 right-0 h-screen w-3/4 pl-4 bg-black overflow-auto flex flex-col justify-between items-start'
        >
          <div>
            <button
              className='text-neutral-100 pt-4 pb-4 flex ietms-center justify-end'
              onClick={closeMenu}
            >
              <XMarkIcon className='h-6 w-6' />
            </button>
            {/* <a
            href='/'
            className='text-neutral-100 text-2xl font-medium group flex mb-2 sm:mb-0 sm:mr-4'
          >
            hammerandbolt<span className='text-red-500 animate-pulse'>_</span>
          </a> */}
            <a
              href='/'
              className='text-neutral-100 text-2xl font-medium group flex mb-2 sm:mb-0 sm:mr-4'
            >
              about
              <span className='text-red-500 group-hover:animate-pulse'>_</span>
            </a>
            <a
              href='/'
              className='text-neutral-100 text-2xl font-medium group flex flex-wrap mb-2 sm:mb-0 sm:mr-4'
            >
              work
              <span className='text-red-500 group-hover:animate-pulse'>_</span>
            </a>
            <a
              href='/'
              className='text-neutral-100 text-2xl font-medium group flex mb-2 sm:mb-0 sm:mr-4'
            >
              expertise
              <span className='text-red-500 group-hover:animate-pulse'>_</span>
            </a>
            <a
              href='/'
              className='text-neutral-100 text-2xl font-medium group flex mb-2 sm:mb-0 sm:mr-4'
            >
              contact
              <span className='text-red-500 group-hover:animate-pulse'>_</span>
            </a>
            <a
              href='/'
              className='text-neutral-100 text-2xl font-medium group flex mb-2 sm:mb-0 sm:mr-4'
            >
              careers
              <span className='text-red-500 group-hover:animate-pulse'>_</span>
            </a>
          </div>
          <div>
            <a
              href='/'
              className='text-neutral-100 text-1xl font-medium group flex mb-2 sm:mb-0 sm:mr-4'
            >
              linkedin
              <span className='text-red-500 group-hover:animate-pulse'>_</span>
            </a>
            <a
              href='/'
              className='text-neutral-100 text-1xl font-medium group flex flex-wrap mb-2 sm:mb-0 sm:mr-4'
            >
              instagram
              <span className='text-red-500 group-hover:animate-pulse'>_</span>
            </a>
            <a
              href='/'
              className='text-neutral-100 text-1xl font-medium group flex mb-2 sm:mb-0 sm:mr-4'
            >
              hello@hammerandbolt.io
              <span className='text-red-500 group-hover:animate-pulse'>_</span>
            </a>
          </div>
        </motion.nav>
      </div>
      {/* Desktop Menu */}
      <div className='hidden sm:block pt-4'>
        <a
          href='/'
          className='text-neutral-100 text-4xl sm:text-6xl font-medium'
        >
          hammerandbolt<span className='text-red-500 animate-pulse'>_</span>
        </a>
        <nav className='flex flex-col sm:flex-col py-4'>
          <a
            href='/'
            className='text-neutral-100 text-3xl font-medium group block mb-2 sm:mb-0 sm:mr-4'
          >
            about
            <span className='text-red-500 group-hover:animate-pulse'>_</span>
          </a>
          <a
            href='/'
            className='text-neutral-100 text-3xl font-medium group block mb-2 sm:mb-0 sm:mr-4'
          >
            work
            <span className='text-red-500 group-hover:animate-pulse'>_</span>
          </a>
          <a
            href='/'
            className='text-neutral-100 text-3xl font-medium group block mb-2 sm:mb-0 sm:mr-4'
          >
            expertise
            <span className='text-red-500 group-hover:animate-pulse'>_</span>
          </a>
          <a
            href='/'
            className='text-neutral-100 text-3xl font-medium group block mb-2 sm:mb-0 sm:mr-4'
          >
            contact
            <span className='text-red-500 group-hover:animate-pulse'>_</span>
          </a>
          <a
            href='/'
            className='text-neutral-100 text-3xl font-medium group block mb-2 sm:mb-0 sm:mr-4'
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
