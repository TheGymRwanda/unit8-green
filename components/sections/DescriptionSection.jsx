import React, { useState, useEffect, useRef } from "react";
import { createRef } from "react";
import Wrapper from "../wrappers/Wrapper";
import Arrow from "../Arrow";
import Button from "../ui/Button";
import DESCRIPTIONS from "../../data/descriptions";

const DescriptionSection = ()=> {
 
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

  return (
    <Wrapper styles="font-normal desktop:text-2xl ipad:text-2xl text-xl desktop:mt-24 desktop:mb-18 tablet:mt-14 tablet:mb-14 ipad:mt-15 mt-20 -tracking-thiner">
      <div className="hidden ipad:grid grid-cols-4">
        <div className="hidden tablet:inline-block" />
        <div className="col-span-4 tablet:col-span-3">
          <div className="flex gap-8 justify-start relative tablet:max-w-47.25">
            {DESCRIPTIONS.map((item, i) => (
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
                  className={`absolute top-full h-0.15 inline-block bg-purple transition-all duration-150 ease-in-out`}
                />
              </button>
            ))}
          </div>
          <div className="my-6 relative">
            <div>
              {DESCRIPTIONS[description].description}
              <span className="ipad:inline-block underline hover:no-underline hover:duration-300 ease-in-out desktop:hidden">
                <Button style="hover:no-underline">Learn more</Button>
              </span>
              
            </div>

            <p className="my-6">{DESCRIPTIONS[description].end}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col ipad:hidden gap-4 justify-start w-full">
        {DESCRIPTIONS.map((item, i) => (
          <div key={i}>
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
                <Arrow styles={`rotate-180`}/>
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
