import { useState, useEffect } from "react";

export const useButtonToggle = defaultVal => {
  const [showAnimation, onAnimationChange] = useState(defaultVal);

  // Last param as empty Array mocking cDM
  useEffect(() => {
    document.addEventListener("keydown", handleArrow);
    return () => {
      document.removeEventListener("keydown", handleArrow);
    };
  }, []);

  const handleArrow = e => {
    console.log(e.which);
    if (e.which === 37) {
      onAnimationChange(false);
    }
    if (e.which === 39) {
      onAnimationChange(true);
    }
  };
  const toggleLogoAnimation = () => {
    onAnimationChange(!showAnimation);
  };

  return [showAnimation, toggleLogoAnimation];
};
