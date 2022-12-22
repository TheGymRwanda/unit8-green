import React from "react";

const Card = ({ date, title, paragraph, tags }) => {
  return (
    <div className="flex flex-col justify-between rounded-2xl max-w-18 ipad:max-w-29 min-w-18 ipad:min-w-29 ipad:max-h-25 min-h-26 ipad:min-h-25 border border-none p-5 shadow-pictures">
      <div>
        <p className="text-secondary-100 text-lg font-normal pb-6">{date}</p>
        <h1 className="text-2 ipad:text-4xl pb-3">{title}</h1>
        <p className="text-xl ipad:text-2xl mb-6 ipad:mb-2.5">{paragraph}</p>
      </div>
      <div className="flex gap-x-6 gap-y-4 flex-wrap">
        {tags.map((tag, index) => (
          <p
            key={index}
            className="bg-secondary-50 text-secondary-100 px-3 py-1 rounded-full text-base"
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
