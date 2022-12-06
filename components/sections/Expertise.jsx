import React from "react";
import Wrapper from "../wrappers/Wrapper";
import TAGS from "../../data/ExpertseLists";

const Expertise = () => {
  return (
    <Wrapper>
      <div className="w-full grid ipad:grid-cols-3 place-items-end">
        <div />
        <div className="col-span-2 grid gap-y-2 ipad:gap-y-6">
          <h3 className="text-secondary-100 text-xl ipad:text-2xl leading-7 -tracking-thin self-start">
            Expertise
          </h3>
          <div className="flex w-full flex-col ipad:flex-row gap-y-2 ipad:gap-x-6 self-end">
            <ul className="flex flex-col gap-y-2 ipad:gap-y-3">
              {TAGS[0].map((tag, i) => (
                  <li
                    key={i}
                    className="border-b border-secondary-50 leading-7 ipad:leading-8 w-70 ipad:w-78 text-xl font-normal ipad:text-2xl -tracking-thiner ipad:-tracking-thin"
                  >
                    {tag}
                  </li>
                )
              )}
            </ul>
            <ul className="flex flex-col gap-y-2 ipad:gap-y-3">
              {TAGS[1].map((tag, i) => (
                  <li
                    key={i}
                    className="border-b border-secondary-50 w-70 ipad:w-78 text-xl leading-7 ipad:leading-8 ipad:text-2xl -tracking-thiner ipad:-tracking-thin font-normal"
                  >
                    {tag}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Expertise;
