import React, { useLayoutEffect, useState } from "react";
import Image from "next/image";
import Wrapper from "../wrappers/Wrapper";
import arrow from "../../public/assets/images/arrow.svg";
import IMAGES from "../../data/projectImagesData";
import Link from "next/link";

export default function ProjectSections() {
  const [link, setLink] = useState(0);
  const [show, setShow] = useState(true);
  useLayoutEffect(() => {
    setShow(true);
  }, [link]);
  //Use the destructuring object to minimize the code base size

  return (
    <Wrapper
      styles={`w-full desktop:mt-[8.5rem] desktop: mb-[7.9375rem] tablet:mb-[6.5888rem] tablet:mt-[6.625rem] ipad:mb-[5.7375rem] ipad:mt-[4.1744rem] mobile:mb-[5.3125rem] mobile:mt-[2.0625rem]`}
    >
      <p className="text-secondary-100 text-2xl desktop:-space-y-6 desktop:mb-0 desktop:pl-1 mt-16 mb-4 ipad:mt-16 desktop:mt-0 leading-[1.75rem]">
        Project
      </p>

      <div className="hidden desktop:grid desktop:grid-cols-4 relative mt-[8.5px]">
        <ul className="flex flex-col text-[86px] cursor-pointer -space-y-5 leading-snug">
          {IMAGES.map(
            (item, i) =>
              i !== 0 && (
                <li
                  key={i}
                  className={`flex flex-col overflow-hidden desktop:inline-block mb-0`}
                >
                  <div
                    className={` inline-block relative group desktop:after:content-[''] desktop:after:absolute desktop:after:h-[0.125rem] desktop:after:w-0 desktop:after:bottom-5 desktop:after:hover:w-full desktop:after:left-0 desktop:after:origin-left desktop:after:ml-1 desktop:after:bg-black desktop:hover:after:origin-left desktop:after:transition-all desktop:after:duration-200 desktop:after:ease-in-out desktop:after:delay-100`}
                    onMouseEnter={() => setLink(i)}
                    onMouseLeave={() => setLink(i)}
                  >
                    <Link
                      href={`${IMAGES[i].link}`}
                      className="pr-5"
                      target={"_blank"}
                    >
                      {" "}
                      {item.heading}
                    </Link>
                    <Image
                      alt="arrow"
                      src={arrow}
                      className="absolute top-5 hidden group-hover:inline-block duration-100 -right-0"
                    />
                  </div>
                </li>
              )
          )}
        </ul>
        {link !== 0 && (
          <div className="sticky h-fit top-4 col-span-3 mt-10">
            <Image
              className="rounded-xl shadow-pictures desktop:inline-block max-w-fit max-h-fit"
              src={IMAGES[link].src}
              alt=""
              width={1000}
              height={1000}
            />
            <p className="text-2xl pt-6">{IMAGES[link].quote}</p>
          </div>
        )}
      </div>
      {/* mobile breakpoint */}
      <div className={`desktop:hidden `}>
        {IMAGES.map(
          (item, i) =>
            i !== 0 && (
              <ul key={i} className="text-5xl tablet:text-7xl tracking-wider">
                <li
                  onClick={() => {
                    setLink(i);
                    setShow(!show);
                  }}
                  className={`${show ? "cursor-pointer" : ""}`}
                >
                  {item.heading}
                  {link === i && show && (
                    <div className="tablet:mt-[11.6px] ipad:mt-[]">
                      <Link href={IMAGES[link].link} target={"_blank"}>
                        <Image
                          src={item.src}
                          alt=""
                          width="1000"
                          height="1000"
                          className="rounded-xl shadow-pictures mt-3 mb-12 tablet:mt-5 tablet:min-w-[59.5rem] tablet:min-h-[32.5613rem] ipad:mb-16 ipad:min-w-[47.4769rem] ipad:h-[25.9831rem] min-w-[21.8125rem] min-h-[11.9375rem]"
                        />
                      </Link>
                      <p className="text-xl tracking-tight tablet:mt-[0.8013rem] tablet:mb-[3.7875rem] max-w-[51.5rem] ipad:mt-[0.5581rem] ipad:mb-[60.07px]">
                        {IMAGES[link].quote}
                      </p>
                    </div>
                  )}
                </li>
              </ul>
            )
        )}
      </div>
    </Wrapper>
  );
}
