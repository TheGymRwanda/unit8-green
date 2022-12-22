import React, { useLayoutEffect, useState } from "react";
import Link from "next/link";
import IMAGES from "../../data/projectImagesData";
import Image from "next/image";
import Wrapper from "../wrappers/Wrapper";

const ProjectSections = () => {
  const [link, setLink] = useState(0);
  const [show, setShow] = useState(true);
  useLayoutEffect(() => {
    setShow(true);
  }, [link]);

  return (
    <Wrapper
      styles={`w-full desktop:mt-34 desktop:mb-31 tablet:mb-26.5 tablet:mt-27 ipad:mb-23 ipad:mt-17.2 mobile:mb-20.3 mobile:mt-7.06`}
    >
      <p className="text-secondary-100 text-2xl desktop:-space-y-6 desktop:mb-0 desktop:pl-1 mt-16 mb-4 ipad:mt-16 desktop:mt-0 leading-7">
        Project
      </p>

      <div className="hidden desktop:grid desktop:grid-cols-5 relative mt-2.25">
        <ul className="flex flex-col text-7.5xl cursor-pointer col-span-2 -space-y-5 leading-snug">
          {IMAGES.map(
            (item, i) =>
              i !== 0 && (
                <li
                  key={i}
                  className={`flex flex-col overflow-hidden desktop:inline-block mb-0`}
                >
                  <div
                    className={` inline-block relative group desktop:after:content-[''] desktop:after:absolute desktop:after:h-0.5 desktop:after:w-0 desktop:after:bottom-5 desktop:after:hover:w-full desktop:after:left-0 desktop:after:origin-left desktop:after:bg-black desktop:hover:after:origin-left desktop:after:transition-all desktop:after:duration-200 desktop:after:ease-in-out desktop:after:delay-100`}
                    onMouseEnter={() => setLink(i)}
                    onMouseLeave={() => setLink(i)}
                  >
                    <Link
                      href={`${IMAGES[i].link}`}
                      className="pr-4"
                      target={"_blank"}
                    >
                      {" "}
                      {item.heading}
                    </Link>
                    <Image
                      alt="arrow"
                      src="/assets/images/arrow.svg"
                      width={15}
                      height={15}
                      className="absolute top-5 hidden group-hover:inline-block duration-100 -right-0"
                    />
                  </div>
                </li>
              )
          )}
        </ul>
        {link !== 0 && (
          <div className="sticky h-fit top-4 mt-10 col-span-3">
            <Image
              className="rounded-xl shadow-pictures desktop:inline-block max-w-full max-h-full"
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
                  className={`${show ? "cursor-pointer mb-2" : ""}`}
                >
                  {item.heading}
                  {link === i && show && (
                    //
                    <div className="tablet:mt-2.7 ipad:mt-[]">
                      <Link href={IMAGES[link].link} target={"_blank"}>
                        <Image
                          src={item.src}
                          alt=""
                          width="1000"
                          height="1000"
                          className="rounded-xl shadow-pictures mt-3 tablet:min-w-full tablet:max-w-full tablet:min-h-32.5 ipad:mb-5 ipad:min-w-47.4 ipad:h-97.9 min-w-21.8 min-h-11.9"
                        />
                      </Link>
                      <p className="text-xl tracking-tight tablet:mt-0 tablet:mb-12 max-w-51.5 ipad:mt-2.55 ipad:mb-12 mb-6">
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
};
export default ProjectSections;
