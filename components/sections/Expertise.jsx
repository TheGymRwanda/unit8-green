import React from 'react';
import Wrapper from '../wrappers/Wrapper'

function Expertise(props) {
    const tagOne = ["Product Development", "Community management", "Governance", "Product Development", "Product Development"]
    const tagTwo = ["Product Design", "Strategy", "Product Design", "Product Design", "Product Design"]
     return (
        <Wrapper>
            <div className="w-full grid grid-cols-3 place-items-end">
            <div />
            <div className='col-span-2 grid gap-y-6'>
            <h3 className='text-secondary-100 text-xl md:text-2xl leading-8 tracking-thin self-start'>Expertise</h3>
            <div className='flex  flex-col ipad:flex-row gap-y-3 ipad:gap-x-6 self-end'>
                <ul className='flex flex-col gap-y-3 ipad:gap-y-4'>
                    {
                        tagOne.map((tag, i) => {
                            return (
                                    <li key={i} className ="border-b border-secondary-50 leading-8 w-80 text-xl font-normal ipad:text-2xl tracking-thiner ipad:tracking-thin">{tag}</li>
                            )
                        })
                    }
                </ul>
                <ul className='flex flex-col gap-y-3 ipad:gap-y-4'>
                    {
                        tagTwo.map((tag, i) => {
                           return (
                            <li key={i} className ="border-b border-secondary-50 w-80 text-xl leading-8 ipad:text-2xl tracking-thiner ipad:tracking-thin font-normal">{tag}</li>
                           )
                         })
                    }
                </ul>
            </div>
            </div>  
          </div>            
        </Wrapper>
    );
}

export default Expertise;