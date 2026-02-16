"use client";

import { useEffect } from "react";

const HeaderHider = () => {
  useEffect(() => {
    const header = document.querySelector(".header");
    const previousDisplay = header?.style.display;
    if (header) {
      header.style.display = "none";
    }
    return () => {
      if (header) {
        header.style.display = previousDisplay || "flex";
      }
    };
  }, []);

  return null;
};

export default HeaderHider;


