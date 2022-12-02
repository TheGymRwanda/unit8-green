import React, { useState, useEffect, useRef } from "react";
import { createRef } from "react";
import Wrapper from "../wrappers/Wrapper";
import Arrow from "../Arrow";
import Button from "../ui/Button";

function DescriptionSection() {
  const desc = [
    {
      header: "About us",
      description:
        "Bloc about us will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale. ",
      link: "/link",
      end: "Work Meaningful - With our work, we aim to impact society positively. The projects we get involved with the aim to solve significant problems in our society, sustainably and in the long run, rather than looking for a quick profit through speculation or encouraging harmful behavior.",
    },
    {
      header: "What we do",
      description:
        "Bloc wat we do will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale. ",
      link: "/link",
      end: "Work Meaningful - With our work, we aim to impact society positively. The projects we get involved with the aim to solve significant problems in our society, sustainably and in the long run, rather than looking for a quick profit through speculation or encouraging harmful behavior.",
    },
    {
      header: "Employment",
      description:
        "Bloc employment will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale. ",
      link: "/link",
      end: "Work Meaningful - With our work, we aim to impact society positively. The projects we get involved with the aim to solve significant problems in our society, sustainably and in the long run, rather than looking for a quick profit through speculation or encouraging harmful behavior.",
    },
  ];
  const [description, setDescription] = useState(0);
  const [show, setShow] = useState(true);
  const refs = useRef(new Array());
  const [position, setPosition] = useState({ width: 0, left: 0 });
  useEffect(() => {
    setShow(true);
    setPosition({
      width: refs.current[description]?.clientWidth / 16,
      left: refs.current[description]?.offsetLeft / 16,
    });
  }, [description]);
  console.log(refs.current[description]?.offsetLeft);

  return (
    <Wrapper styles="font-normal text-2xl my-[6rem]">
      <div className="hidden ipad:grid grid-cols-4">
        <div className="hidden tablet:inline-block" />
        <div className="col-span-4 tablet:col-span-3">
          <div className="flex gap-8 justify-start relative">
            {desc.map((item, i) => (
              <button
                key={i}
                onClick={() => setDescription(i)}
                className={`${
                  description === i
                    ? "text-purple one"
                    : "text-secondary-100 no-underline"
                }`}
                ref={(element) => (refs.current[i] = element)}
              >
                {item.header}
                <hr
                  style={{
                    width: `${position.width}rem`,
                    left: `${position.left}rem`,
                  }}
                  className={`absolute top-[100%] h-[.15rem] inline-block bg-purple transition-all duration-150 ease-in-out`}
                />
              </button>
            ))}
          </div>
          <div className="my-6 relative ">
            <div>
              {desc[description].description}
              <span className="ipad:inline-block underline hover:no-underline hover:duration-300 ease-in-out desktop:collapse">
                <Button style="hover:no-underline">Learn more</Button>
              </span>
            </div>
            <div className="hidden desktop:block">
              <Button style=" underline group-hover:no-underline group-hover:duration-300 ease-in-out">
                Learn more
              </Button>
            </div>

            <p className="my-6">{desc[description].end}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col ipad:hidden gap-4 justify-start w-full ">
        {desc.map((item, i) => (
          <div key={i} className="">
            <button
              onClick={() => {
                setDescription(i);
                setShow(!show);
              }}
              className={`${
                description === i && show
                  ? " text-purple border-b border-purple py-1 stroke-purple"
                  : "text-black border-b border-black stroke-black"
              } flex justify-between  w-full`}
            >
              <span className="whitespace-nowrap font-normal text-2xl">
                {item.header}
              </span>

              <div
                className={`${
                  description === i && show && "rotate-180 "
                } duration-500 ease-in-out`}
              >
                <Arrow />
              </div>
            </button>
            {description === i && show && (
              <div className={`overflow-hidden pt-3`}>
                <p className={` animate-dropdown`}>
                  {item.description}
                  <span className="inline-block">
                    <button>Learn more</button>
                  </span>
                </p>

                <p className={`animate-dropdown pt-5`}>{item.end}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default DescriptionSection;
