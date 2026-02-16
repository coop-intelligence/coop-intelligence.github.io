"use client";

import { useEffect } from "react";

const HeaderHider = () => {
  useEffect(() => {
    const header = document.querySelector(".header");
    const footer = document.querySelector("footer");
    const previousHeaderDisplay = header?.style.display;
    const previousFooterDisplay = footer?.style.display;
    if (header) {
      header.style.display = "none";
    }
    if (footer) {
      footer.style.display = "none";
    }
    return () => {
      if (header) {
        header.style.display = previousHeaderDisplay || "flex";
      }
      if (footer) {
        footer.style.display = previousFooterDisplay || "flex";
      }
    };
  }, []);

  return null;
};

export default HeaderHider;

