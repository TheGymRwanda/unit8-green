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
            <div className='flex  flex-col ipad:flex-row gap-x-6 self-end'>
                <div className='flex flex-col gap-y-3'>
                    {
                        tagOne.map((tag, i) => {
                            return (
                                <ul className='border-b border-secondary-50 w-80'>
                                    <li key={i} className ="text-xl ipad:text-2xl tracking-thiner ipad:tracking-thin font-normal">{tag}</li>
                                </ul>
                            )
                        })
                    }
                </div>
                <div className='flex flex-col gap-y-3'>
                    {
                        tagTwo.map((tag, i) => {
                           return (
                               <ul className='border-b border-50 w-80'>
                                   <li key={i} className ="text-xl ipad:text-2xl tracking-thiner ipad:tracking-thin font-normal">{tag}</li>
                               </ul>
                           )
                         })
                    }
                </div>
            </div>
            </div>  
          </div>            
        </Wrapper>
    );
}

export default Expertise;