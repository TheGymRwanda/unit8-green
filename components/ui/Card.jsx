import React from 'react';

const Card = ({ date, title, paragraph, tags }) => {
  return (
    <div className='flex flex-col justify-between rounded-md max-w-[302px] ipad:max-w-[477px] min-w-[302px] ipad:min-w-[477px] ipad:max-h-[401.39px] min-h-[410px] ipad:min-h-[401.39px] border border-[#EDEDED] p-5 shadow-md'>
      <div>
      <p className='text-gray-400 text-lg font-normal pb-6'>{date}</p>
      <h1 className='text-[28px] ipad:text-4xl pb-3'>{title}</h1>
      <p className='text-xl ipad:text-2xl mb-6 ipad:mb-[38px]'>{paragraph}</p>
      </div>
      <div className='flex gap-x-6 gap-y-4 flex-wrap'>
        {tags.map((tag, index) => <p key={index} className='bg-gray-200 text-gray-400 px-1 rounded-full text-base'>{tag}</p>)}
      </div>
    </div>
  );
}

export default Card;