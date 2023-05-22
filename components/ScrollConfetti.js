import React, { useState, useEffect } from "react";
import Confetti from "react-dom-confetti";

const ScrollConfetti = ({ triggerHeight, config }) => {
  const [activateConfetti, setActivateConfetti] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      if (currentPosition > triggerHeight) {
        setActivateConfetti(true);
      } else {
        setActivateConfetti(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [triggerHeight]);

  return (
    <span className='overflow-hidden'>
      <Confetti active={activateConfetti} config={config} /> 🎉
    </span>
  );
};

export default ScrollConfetti;
