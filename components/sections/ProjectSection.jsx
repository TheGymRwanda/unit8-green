import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Wrapper from "../wrappers/Wrapper";
import arrow from "../../public/assets/images/arrow.svg";

export default function ProjectSections() {
  const [className, setClassName] = useState(`opacity-0`);

  const hover = [
    { link: "", src: "" },
    {
      link: "Dacade",
      src: "/assets/images/dacade.webp",
      quote: "Peer-to-Peer learning platform",
    },
    {
      link: "Bitlipa",
      src: "/assets/images/bitlipa.webp",
      quote: "Cryptocurrency bitcoin Ethereum Trading App African Kenyan",
    },
    {
      link: "Symplifi",
      src: "/assets/images/symplifi.webp",
      quote:
        "Fintech solution providing an alternative to the global remittance market",
    },
    {
      link: "UTU.io",
      src: "/assets/images/utu.webp",
      quote: "Resources that improve design systems for web3",
    },
    {
      link: "NeueUX",
      src: "/assets/images/neueux.webp",
      quote: "Resources that improve design systems for web3",
    },
    {
      link: "Lab3",
      src: "/assets/images/lab3.webp",
      quote: "A web3 knowledge exchange community for music makers",
    },
    {
      link: "Even",
      src: "/assets/images/even.webp",
      quote: "A web3 knowledge exchange community for music makers",
    },
  ];
  const [link, setLink] = useState(0);
  const [show, setShow] = useState(true);
  const ref = useRef(0);

  useEffect(() => {
    setShow(true);
  }, [link]);

  return (
    <Wrapper
      styles={`w-full desktop:h-[64rem] desktop:pt-36 mb-12 desktop:mb-0`}
    >
      <p className="text-secondary-100 text-2xl desktop:mb-4 desktop:pl-1 mt-16 mb-4 ipad:mt-16 desktop:mt-0">
        Project
      </p>

      <div className="hidden desktop:grid desktop:grid-cols-4 relative">
        <ul
          ref={ref}
          className="flex flex-col text-[4.5rem] -space-y-4 cursor-pointer"
        >
          {hover.map(
            (item, i) =>
              i !== 0 && (
                <li
                  key={i}
                  className="flex flex-col desktop:-space-y-4 desktop:inline-block  "
                >
                  <div
                    className="inline-block relative group desktop:after:content-[''] desktop:after:absolute desktop:after:h-[0.125rem] desktop:after:w-0 desktop:after:bottom-5 desktop:after:left-0 desktop:after:origin-left desktop:after:bg-black desktop:hover:after:w-full desktop:hover:after:origin-right desktop:hover:after:transition-all desktop:hover:after:duration-200 desktop:hover:after:ease-out desktop:hover:after:delay-100"
                    onMouseEnter={() => setLink(i)}
                    onMouseLeave={() => setLink(i)}
                  >
                    <p>{item.link}</p>
                    <Image
                      alt="arrow"
                      src={arrow}
                      className="absolute top-5 scale-0 group-hover:scale-100 duration-100 delay-200 ease-in -right-5"
                    />
                  </div>
                </li>
              )
          )}
        </ul>
        {link !== 0 ? (
          <>
            <div className="sticky h-fit top-4 col-span-3">
              <Image
                src={hover[link].src}
                alt=""
                width="1000"
                height="1000"
                className="rounded-xl shadow-pictures desktop:inline-block "
                layout="responsive"
                objectFit="contain"
              />
              <p className="text-2xl pt-6">{hover[link].quote}</p>
            </div>
          </>
        ) : (
          ""
        )}
        {/* </div> */}
      </div>
      {/* mobile breakpoint */}
      <div className={`flex flex-col gap-4 desktop:hidden `}>
        {hover.map(
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
                  {item.link}
                  {link === i && show && (
                    <div className="">
                      <Image
                        src={item.src}
                        alt=""
                        width="1000"
                        height="1000"
                        className="rounded-xl shadow-pictures mt-3 mb-12 tablet:mt-5 tablet:w-[59.5rem] tablet:h-[32.5613rem] ipad:mb-16 ipad:w-[47.4769rem] ipad:h-[25.9831rem] w-[21.8125rem] h-[11.9375rem]"
                      />
                      <p className="text-xl tracking-tight -mt-12 mb-12 max-w-[51.5rem]">
                        {hover[link].quote}
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
