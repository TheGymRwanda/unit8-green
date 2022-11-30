import React, { useEffect, useState, useRef, lazy } from "react";
import Image from "next/image";
export default function Project() {
  const hover = {
    0: {
      link: "",
      src: "",
    },
    1: {
      link: "Dacade",
      src: "/assets/images/dacade.webp",
    },
    2: { link: "Bitlipa", src: "/assets/images/bitlipa.webp" },
    3: { link: "Symplifi", src: "/assets/images/symplifi.webp" },
    4: { link: "UTU.io", src: "/assets/images/utu.webp" },
    5: { link: "NeueUX", src: "/assets/images/neueux.webp" },
    6: { link: "Lab3", src: "/assets/images/lab3.webp" },
    7: { link: "Even", src: "/assets/images/even.webp" },
  };
  const [link, setLink] = useState("1");
  const [timed, setTime] = useState(false);

  useEffect(() => {
    var image = setInterval(() => {
      setTime(true);
    }, 400);
    return () => clearInterval(image, setTime(false));
  }, [link]);

  return (
    <>
      <div className="grid ipad:grid-cols-8">
        <ul className="flex flex-col gap-4 text-6xl cursor-pointer ">
          <li className="flex flex-col gap-4 ipad:gap-0 ipad:inline-block">
            <p
              className={`inline-block relative after:content-[''] after:bottom-0 after:absolute after:h-[0.125rem] after:w-0 after:left-0 after:origin-left after:bg-black hover:after:w-full hover:after:origin-right hover:after:transition-all hover:after:duration-500 hover:after:ease-out hover:after:delay-300`}
              onMouseEnter={() => setLink("1")}
              onMouseLeave={() => setLink("0")}
            >
              Dacade
            </p>

            <div
              className={`${
                link === "0" ? "collapse" : link !== 0 ? "animate-show" : ""
              }`}
            >
              <Image
                src={hover[1].src}
                alt=""
                width="1000"
                height="1000"
                className="ipad:hidden  rounded-xl shadow-pictures "
              />
            </div>
          </li>
          <li className="flex flex-col gap-4 ipad:gap-0 ipad:inline-block">
            <p
              className={`inline-block relative after:content-[''] after:bottom-0 after:absolute after:h-[0.125rem] after:w-0 after:left-0 after:origin-left after:bg-black hover:after:w-full hover:after:origin-right hover:after:transition-all hover:after:duration-500 hover:after:ease-out hover:after:delay-300`}
              onMouseEnter={() => setLink("2")}
              onMouseLeave={() => setLink("0")}
            >
              Bitlipa
            </p>
            <div
              className={`${
                link === "0" ? "collapse" : link !== 0 ? "animate-show" : ""
              }`}
            >
              <Image
                src={hover[2].src}
                alt=""
                width="1000"
                height="1000"
                className="ipad:hidden  rounded-xl shadow-pictures "
              />
            </div>
          </li>
          <li className="flex flex-col gap-4 ipad:gap-0 ipad:inline-block">
            <p
              className={`inline-block relative after:content-[''] after:bottom-0 after:absolute after:h-[0.125rem] after:w-0 after:left-0 after:origin-left after:bg-black hover:after:w-full hover:after:origin-right hover:after:transition-all hover:after:duration-500 hover:after:ease-out hover:after:delay-300`}
              onMouseEnter={() => setLink("3")}
              onMouseLeave={() => setLink("0")}
            >
              Simplifi
            </p>
            <div className={`${link === "0" ? "collapse" : ""}`}>
              <Image
                src={hover[3].src}
                alt=""
                width="1000"
                height="1000"
                className="ipad:hidden  rounded-xl shadow-pictures"
              />
            </div>
          </li>
          <li className="flex flex-col gap-4 ipad:gap-0 ipad:inline-block">
            <p
              className={`inline-block relative after:content-[''] after:bottom-0 after:absolute after:h-[0.125rem] after:w-0 after:left-0 after:origin-left after:bg-black hover:after:w-full hover:after:origin-right hover:after:transition-all hover:after:duration-500 hover:after:ease-out hover:after:delay-300`}
              onMouseEnter={() => setLink("4")}
              onMouseLeave={() => setLink("0")}
            >
              UTU.io
            </p>
            <div
              className={`${
                link === "0" ? "collapse" : link !== 0 ? "animate-show" : ""
              }`}
            >
              <Image
                src={hover[4].src}
                alt=""
                width="1000"
                height="1000"
                className="ipad:hidden rounded-xl shadow-pictures "
              />
            </div>
          </li>
          <li className="flex flex-col gap-4 ipad:gap-0 ipad:inline-block">
            <p
              className={`inline-block relative after:content-[''] after:bottom-0 after:absolute after:h-[0.125rem] after:w-0 after:left-0 after:origin-left after:bg-black hover:after:w-full hover:after:origin-right hover:after:transition-all hover:after:duration-500 hover:after:ease-out hover:after:delay-300`}
              onMouseEnter={() => setLink("5")}
              onMouseLeave={() => setLink("0")}
            >
              NeueUX
            </p>
            <div
              className={`${
                link === "0" ? "collapse" : link !== 0 ? "animate-show" : ""
              }`}
            >
              <Image
                src={hover[5].src}
                alt=""
                width="1000"
                height="1000"
                className=" ipad:hidden  rounded-xl shadow-pictures "
              />
            </div>
          </li>
          <li className="flex flex-col gap-4 ipad:gap-0 ipad:inline-block">
            <p
              className={`inline-block relative after:content-[''] after:bottom-0 after:absolute after:h-[0.125rem] after:w-0 after:left-0 after:origin-left after:bg-black hover:after:w-full hover:after:origin-right hover:after:transition-all hover:after:duration-500 hover:after:ease-out hover:after:delay-300`}
              onMouseEnter={() => setLink("6")}
              onMouseLeave={() => setLink("0")}
            >
              Lab3
            </p>
            <div
              className={`${
                link === "0" ? "collapse" : link !== 0 ? "animate-show" : ""
              }`}
            >
              <Image
                src={hover[6].src}
                alt=""
                width="1000"
                height="1000"
                className="ipad:hidden  rounded-xl shadow-pictures "
              />
            </div>
          </li>
          <li className="flex flex-col gap-4 ipad:gap-0 ipad:inline-block">
            <p
              className={`inline-block relative after:content-[''] after:bottom-0 after:absolute after:h-[0.125rem] after:w-0 after:left-0 after:origin-left after:bg-black hover:after:w-full hover:after:origin-right hover:after:transition-all hover:after:duration-500 hover:after:ease-out hover:after:delay-300`}
              onMouseEnter={() => setLink("7")}
              onMouseLeave={() => setLink("0")}
            >
              even
            </p>
            <div
              className={`${
                link === "0" ? "collapse" : link !== 0 ? "animate-show" : ""
              }`}
            >
              <Image
                src={hover[7].src}
                alt=""
                width="1000"
                height="1000"
                className="ipad:hidden  rounded-xl shadow-pictures "
              />
            </div>
          </li>
        </ul>
        <div className="col-span-1 hidden ipad:inline-block"></div>
        <div className="hidden ipad:inline-block ipad:col-span-5">
          <div
            className={`${link === "0" ? "collapse" : link !== 0 ? "" : ""}`}
          >
            {timed ? (
              <Image
                onLoad={lazy}
                src={hover[link].src}
                alt=""
                width="1000"
                height="1000"
                className="rounded-xl shadow-pictures "
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
