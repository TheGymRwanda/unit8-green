import React, { useEffect, useState } from "react";

const Wrapper = ({ children, styles }) => {
  const [width, setWidth] = useState(null);

  const updateWidth = () => {
    setWidth(innerWidth);
  };
  useEffect(() => {
    window.addEventListener("load", updateWidth);
    return () => window.removeEventListener("load", updateWidth);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div
      className={`max-w-[90rem] px-5  mx-auto w-full relative ${styles} ${
        width < 1440 ? "ipad:px-9 tablet:px-9" : "desktop:px-16"
      }`}
    >
      {children}
    </div>
  );
};
export default Wrapper;
