"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated, useTrail } from "@react-spring/web";
import LanguageButton from "./LanguageButton";
import Link from "next/link";

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

  // FadeIn animation for title text
  const fadeInTitle = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 700,
  });

  // FadeIn animation for menu items
  const fadeInMenuItems = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 700,
  });

  // FadeIn animation for contact items
  const fadeInContactItems = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 700,
  });

  // FadeIn animation for language items
  const fadeInLanguage = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 700,
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
    "intro",
    "about",
    "expertise",
    "work",
    "contact",
    "careers",
    "blog",
  ];

  // Animation trail for menu items
  const trail = useTrail(menuItems.length, {
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translate3d(0,0,0)" : "translate3d(5%,0,0)",
  });

  // Menu items for contact info
  const contactItems = ["linkedin", "instagram", "email", "message", "phone"];

  // Language items
  const languageItems = ["en", "es"];

  // This function generates menu items for mobile
  const generateMenuItemsMobile = (items, textSize) =>
    trail.map((props, index) => (
      <Link key={items[index]} href={`/${items[index]}`}>
        <animated.button
          onClick={closeMenu}
          style={props}
          className={`text-neutral-300 ${textSize} font-medium group flex mb-2 sm:mb-0 sm:mr-4`}
        >
          {items[index]}
          <span className='text-black group-hover:animate-pulse'>_</span>
        </animated.button>
      </Link>
    ));

  // This function generates menu items for desktop
  const generateMenuItemsDesktop = (items, textSize) =>
    items.map((item) => (
      <a
        key={item}
        href='/'
        className={`text-neutral-300 ${textSize} font-medium group flex mb-2 sm:mb-0 sm:mr-4`}
      >
        {item}
        <span className='text-red-500 group-hover:animate-pulse'>_</span>
      </a>
    ));

  // This function generates language items
  const generateLanguageItems = (items, textSize) =>
    items.map((item) => (
      <a
        key={item}
        href='/'
        className={`text-neutral-300 ${textSize} font-medium group flex mb-2 sm:mb-0 sm:mr-4`}
      >
        {item}
        <span className='text-red-500 group-hover:animate-pulse'>_</span>
      </a>
    ));

  // This function generates contact items
  const generateContactItems = (items, textSize) =>
    items.map((item) => (
      <a
        key={item}
        href='/'
        className={`text-neutral-300 ${textSize} font-medium group flex mb-2 sm:mb-0 sm:mr-4`}
      >
        {item}
        <span className='text-black group-hover:animate-pulse'>_</span>
      </a>
    ));

  // This function generates contact items
  const generateContactItemsDesktop = (items, textSize) =>
    items.map((item) => (
      <a
        key={item}
        href='/'
        className={`text-neutral-300 ${textSize} font-medium group flex mb-2 sm:mb-0 sm:mr-4`}
      >
        {item}
        <span className='text-red-500 group-hover:animate-pulse'>_</span>
      </a>
    ));

  return (
    <div className='fixed top-0 w-full' style={{ zIndex: 30000 }}>
      {/* Mobile Menu */}
      <div className='flex justify-start items-center lg:hidden'>
        <div className='flex items-end justify-between w-full py-4 pr-8 bg-black'>
          <Link href='/'>
            <animated.div
              style={fadeInTitle}
              className='text-neutral-300 text-3xl lg:text-6xl font-medium'
            >
              hammerandbolt<span className='text-red-500 animate-pulse'>_</span>
            </animated.div>
          </Link>
          <animated.button
            style={fadeInMenuItems}
            className='text-white text-xl'
            onClick={() => setIsOpen(true)}
          >
            <span className='text-neutral-300 text-2xl lg:text-6xl font-medium'>
              menu<span className='text-red-500 animate-pulse'>_</span>
            </span>
          </animated.button>
          <div className='fixed bottom-0 right-0 m-4'>
            <LanguageButton />
          </div>
        </div>

        {/* Slide-out menu */}
        <animated.nav
          ref={menuRef}
          style={menuAnimation}
          className='fixed top-0 right-0 h-screen w-64 pl-4 bg-red-800 overflow-auto flex flex-col justify-between items-start'
        >
          <div>
            <button
              className='text-neutral-300 pt-4 pb-4 flex items-end justify-end'
              onClick={closeMenu}
            >
              <span className='text-neutral-300 text-2xl lg:text-6xl font-medium'>
                close<span className='text-black animate-pulse'>_</span>
              </span>
            </button>
            {generateMenuItemsMobile(menuItems, "text-2xl")}
          </div>
          <div>{generateContactItems(contactItems, "text-2xl")}</div>
        </animated.nav>
      </div>

      {/* Desktop Menu */}
      <div className='hidden lg:flex lg:flex-col lg:h-screen lg:items-start lg:justify-between sm:py-4'>
        <div>
          <Link href='/'>
            <animated.div
              style={fadeInTitle}
              className='text-neutral-300 text-4xl sm:text-6xl font-medium'
            >
              hammerandbolt<span className='text-red-500 animate-pulse'>_</span>
            </animated.div>
          </Link>
        </div>
        <animated.button
          style={fadeInMenuItems}
          className='text-white text-xl'
          onClick={() => setIsOpen(true)}
        >
          <span className='lg:absolute text-4xl mr-4 lg:top-0 lg:right-0 lg:pr-4 lg:pb-4 lg:py-4'>
            menu<span className='text-red-500 animate-pulse'>_</span>
          </span>
        </animated.button>
        <animated.nav
          ref={menuRef}
          style={menuAnimation}
          className='fixed top-0 right-0 h-screen w-64 pl-4 bg-red-800 overflow-auto flex flex-col justify-between items-start'
        >
          <div>
            <button
              className='text-neutral-300 pt-4 pb-4 flex items-end justify-end'
              onClick={closeMenu}
            >
              <span className='text-neutral-300 text-2xl lg:text-4xl font-medium'>
                close<span className='text-black animate-pulse'>_</span>
              </span>
            </button>
            {generateMenuItemsMobile(menuItems, "text-4xl")}
          </div>
        </animated.nav>

        {/* <div className='lg:absolute lg:top-0 lg:right-0 lg:pr-4 lg:pb-4 lg:py-4'>
          <animated.nav style={fadeInMenuItems}>
            {generateMenuItemsDesktop(menuItems, "text-3xl")}
          </animated.nav>
        </div> */}
        <div className='lg:absolute lg:bottom-0 lg:right-0 lg:pr-4 lg:pb-4'>
          <LanguageButton />
        </div>
        <div>
          <animated.nav style={fadeInContactItems}>
            {generateContactItemsDesktop(contactItems, "text-3xl")}
          </animated.nav>
        </div>
      </div>
    </div>
  );
}
