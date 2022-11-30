import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Wrapper from "../wrappers/Wrapper";
export default function Project() {
  const hover = [
    { link: "", src: "" },
    { link: "Dacade", src: "/assets/images/dacade.webp", quote: "" },
    { link: "Bitlipa", src: "/assets/images/bitlipa.webp", quote: "" },
    { link: "Symplifi", src: "/assets/images/symplifi.webp", quote: "" },
    { link: "UTU.io", src: "/assets/images/utu.webp", quote: "" },
    { link: "NeueUX", src: "/assets/images/neueux.webp", quote: "" },
    { link: "Lab3", src: "/assets/images/lab3.webp", quote: "" },
    { link: "Even", src: "/assets/images/even.webp", quote: "" },
  ];
  const [link, setLink] = useState(0);
  const [timed, setTime] = useState(false);
  const [show, setShow] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef(0);
  const [offsetTop, setOffsetTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(ref.current.offsetLeft, scrollY);
  // console.log(scrollY > ref.current?.offsetTop);

  useEffect(() => {
    setTime(true);
    setShow(true);
    // var image = setInterval(() => {

    // }, 50);
    // return () => clearInterval(image);
  }, [link]);

  return (
    <Wrapper styles={`w-full h-[35rem]`}>
      <p className="text-secondary-100 text-3xl mb-4">Project</p>
      <div className="hidden ipad:grid ipad:grid-cols-8 ">
        <ul
          ref={ref}
          className="flex flex-col gap-8 text-6xl cursor-pointer h-0 carousel carousel-vertical rounded-box"
        >
          {hover.map(
            (item, i) =>
              i !== 0 && (
                <li
                  key={i}
                  className="flex flex-col gap-4 ipad:gap-0 ipad:inline-block carousel-item"
                >
                  <p
                    className={`inline-block relative ipad:after:content-[''] ipad:after:bottom-0 ipad:after:absolute ipad:after:h-[0.125rem] ipad:after:w-0 ipad:after:left-0 ipad:after:origin-left ipad:after:bg-black ipad:hover:after:w-full ipad:hover:after:origin-right ipad:hover:after:transition-all ipad:hover:after:duration-200 ipad:hover:after:ease-out ipad:hover:after:delay-300`}
                    onMouseEnter={() => setLink(i)}
                    onMouseLeave={() => setLink(0)}
                  >
                    {item.link}
                  </p>
                </li>
              )
          )}
        </ul>
        <div className="col-span-1 hidden ipad:inline-block"></div>
        <div className="hidden ipad:inline-block ipad:col-span-5">
          <div className={``}>
            {timed && link !== 0 ? (
              <Image
                src={hover[link].src}
                alt=""
                width="1000"
                height="1500"
                className="rounded-xl shadow-pictures"
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {/* mobile breakpoint */}
      <div className="flex flex-col gap-4 ipad:hidden">
        {hover.map(
          (item, i) =>
            i !== 0 && (
              <ul key={i} className="">
                <li
                  onClick={() => {
                    setLink(i);
                    setShow(!show);
                  }}
                  className={`${link !== 0 && show ? "" : ""}`}
                >
                  {item.link}
                </li>
                {link === i && show && (
                  <div
                    className={` animate-show ${
                      link === 0
                        ? "h-56 hidden"
                        : link !== 0
                        ? " rounded-xl shadow-pictures"
                        : ""
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt=""
                      width="1000"
                      height="1000"
                      className="ipad:hidden rounded-xl"
                    />
                  </div>
                )}
              </ul>
            )
        )}
      </div>
    </Wrapper>
  );
}
