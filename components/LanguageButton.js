import React, { useContext } from "react";
import { useSpring, animated } from "@react-spring/web";
import LanguageContext from "@/contexts/LanguageContext";

const LanguageButton = () => {
  const fadeInLanguage = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 700,
  });

  const languageItems = ["en", "es"];

  const { setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const generateLanguageItems = (items, textSize) =>
    items.map((item) => (
      <button
        key={item}
        className={`text-neutral-300 ${textSize} font-medium group flex mb-2 sm:mb-0 sm:mr-4`}
        onClick={() => handleLanguageChange(item)}
      >
        {item}
        <span className='text-red-500 group-hover:animate-pulse'>_</span>
      </button>
    ));

  return (
    <animated.nav style={fadeInLanguage}>
      {generateLanguageItems(languageItems, "text-3xl")}
    </animated.nav>
  );
};

export default LanguageButton;
