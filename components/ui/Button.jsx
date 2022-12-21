import Link from "next/link";
import React from "react";
import Image from "next/image";
import arrow from "../../public/assets/images/arrow.svg";

function Button({ children, style, link, position }) {
  return (
    <>
      <Link href={`${link}`} target="_blank">
        <div className="flex gap-1 items-center group cursor-pointer">
          <span
            className={`font-normal leading-7 ipad:leading-8 -tracking-thiner ipad:-tracking-thin font-sans ${style}`}
          >
            {children}
          </span>
          <span className="group-hover:-translate-y-1 transition-transform duration-300 group-hover:translate-x-1">
            <Image alt="arrow" src={arrow} className={position} />
          </span>
        </div>
      </Link>
    </>
  );
}

export default Button;
