"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated, useTrail } from "@react-spring/web";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";

// This is the NavBar component
export default function NavBar() {
  // States for menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Ref to detect outside clicks on the menu
  const menuRef = useRef(null);

  // Slide-out menu animation
  const menuAnimation = useSpring({
    transform: isOpen ? "translate3d(0%,0,0)" : "translate3d(100%,0,0)",
    config: {
      tension: 210,
      friction: 20,
    },
  });

  // This function closes the menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle outside click to close the menu
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!menuRef.current.contains(event.target)) {
        if (!isOpen) return;
        closeMenu();
      }
    };

    // Attach mousedown event listener
    document.addEventListener("mousedown", handleOutsideClick);

    // Clean up on unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, menuRef]);

  // Menu items
  const menuItems = [
    "home",
    "intro",
    "about",
    "expertise",
    "work",
    "contact",
    "careers",
    "blog",
  ];

  // Menu items for contact info
  const contactItems = ["linkedin", "instagram", "email", "message", "phone"];

  // Language items
  const languageItems = ["en", "es"];

  // Animation trail for menu items
  const trail = useTrail(menuItems.length, {
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translate3d(0,0,0)" : "translate3d(5%,0,0)",
  });

  // This function generates menu items
  const generateMenuItems = (items, textSize) =>
    trail.map((props, index) => (
      <animated.a
        key={items[index]}
        href='/'
        style={props}
        className={`text-neutral-300 ${textSize} font-medium group flex mb-2 sm:mb-0 sm:mr-4`}
      >
        {items[index]}
        <span className='text-red-500 group-hover:animate-pulse'>_</span>
      </animated.a>
    ));

  // Rest of your component...
  return (
    <div className='fixed top-0 w-full' style={{ zIndex: 30000 }}>
      {/* Mobile Menu */}
      <div className='flex justify-start items-center lg:hidden'>
        <div className='flex items-end justify-between w-full py-4 pr-8 bg-black'>
          <a
            href='/'
            className='text-neutral-300 text-3xl lg:text-6xl font-medium'
          >
            hammerandbolt<span className='text-red-500 animate-pulse'>_</span>
          </a>
          <button
            className='text-white text-xl'
            onClick={() => setIsOpen(true)}
          >
            <span className='text-neutral-300 text-2xl lg:text-6xl font-medium'>
              menu<span className='text-red-500 animate-pulse'>_</span>
            </span>

            {/* <Bars2Icon className="h-6 w-6" /> */}
          </button>
          <div className='fixed bottom-0 right-0 m-4'>
            <nav>{generateMenuItems(languageItems, "text-1xl")}</nav>
          </div>
        </div>

        {/* Slide-out menu */}
        <animated.nav
          ref={menuRef}
          style={menuAnimation}
          className='fixed top-0 right-0 h-screen w-64 pl-4 bg-black overflow-auto flex flex-col justify-between items-start'
        >
          <div>
            <button
              className='text-neutral-300 pt-4 pb-4 flex items-end justify-end'
              onClick={closeMenu}
            >
              <span className='text-neutral-300 text-2xl lg:text-6xl font-medium'>
                close<span className='text-red-500 animate-pulse'>_</span>
              </span>
              {/* <XMarkIcon className="h-6 w-6" /> */}
            </button>
            {generateMenuItems(menuItems, "text-2xl")}
          </div>

          <div>{generateMenuItems(contactItems, "text-1xl")}</div>
        </animated.nav>
      </div>

      {/* Desktop Menu */}
      <div className='hidden lg:flex lg:flex-col lg:h-screen lg:items-start lg:justify-between sm:py-4'>
        <div>
          <a
            href='/'
            className='text-neutral-300 text-4xl sm:text-6xl font-medium'
          >
            hammerandbolt<span className='text-red-500 animate-pulse'>_</span>
          </a>
        </div>
        <div className='lg:absolute lg:top-0 lg:right-0 lg:pr-4 lg:pb-4 lg:py-4'>
          <nav>{generateMenuItems(menuItems, "text-3xl")}</nav>
        </div>
        <div className='lg:absolute lg:bottom-0 lg:right-0 lg:pr-4 lg:pb-4'>
          <nav>{generateMenuItems(languageItems, "text-3xl")}</nav>
        </div>
        a
        <div>
          <nav>{generateMenuItems(contactItems, "text-3xl")}</nav>
        </div>
      </div>
    </div>
  );
}
