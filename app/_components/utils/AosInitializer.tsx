"use client";
import { useEffect } from "react";
import AOS from "aos";

const AosInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-in",
    });
  }, []);
  return null;
};

export default AosInitializer;
