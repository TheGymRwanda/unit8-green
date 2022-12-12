import React from 'react';

function Card({date,title, paragraph,tags}) {
    return (
        <div className='rounded-md max-w-[300px]'>
          <p className='text-base text-gray-400'>{date}</p>  
          <h1 className='text-4xl font-semibold'>{title}</h1>
          <p className='text-xl'>{paragraph}</p>
          <div className='flex gap-4 mt-4'>
          {tags.map((tag, index)=><p key={index} className='bg-gray-200 text-gray-500 px-1 rounded-full text-base'>{tag}</p>)}
          </div>
        </div>
    );
}

export default Card;