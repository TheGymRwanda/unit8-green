import Link from "next/link";
import React from "react";
import Image from "next/image";
const Button = ({ children, style, link, position }) => {
  return (
    <>
      <Link href={`${link}`} target="_blank">
        <div className="flex gap-1 items-center group cursor-pointer">
          <span
<<<<<<< HEAD
            className={`font-normal leading-7 ipad:leading-8 -tracking-thiner ipad:-tracking-thin font-sans ${style}`}
=======
            className={`font-normal leading-8 tracking-thiner ipad:tracking-thin font-sans ${style}`}
>>>>>>> b837662 (fix: adding the right space in header section)
          >
            {children}
          </span>
          <span className="group-hover:-translate-y-1 transition-transform duration-300 group-hover:translate-x-1">
            <Image
              alt="arrow"
              src={"/assets/images/arrow.svg"}
              width={15}
              height={15}
              className={position}
            />
          </span>
        </div>
      </Link>
    </>
  );
};

export default Button;
