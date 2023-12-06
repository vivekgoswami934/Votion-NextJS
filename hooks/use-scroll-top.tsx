import { useState, useEffect } from "react";

export const useScrollTop = (threshold = 10) => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > threshold) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scroll;
};
