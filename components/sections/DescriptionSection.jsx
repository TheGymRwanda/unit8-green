import React, {useState,useEffect, useRef} from 'react';
import Wrapper from '../wrappers/Wrapper';
import Arrow from '../Arrow';
import Button from '../ui/Button';

function DescriptionSection() {
    const desc = {
        '1':{
        'description':"Bloc about us will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale",
        'link':"/link",
        'end':"Work Meaningful - With our work, we aim to impact society positively. The projects we get involved with the aim to solve significant problems in our society, sustainably and in the long run, rather than looking for a quick profit through speculation or encouraging harmful behavior."   
        },
        '2':{
        'description':"Bloc wat we do will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale",
        'link':"/link",
        'end':"Work Meaningful - With our work, we aim to impact society positively. The projects we get involved with the aim to solve significant problems in our society, sustainably and in the long run, rather than looking for a quick profit through speculation or encouraging harmful behavior."   
        },
        '3':{
        'description':"Bloc employment will do for cooperation what the internet did for communication - We believe that blockchain technology has the potential to shift financial models as we know them, creating revenue streams that are more sustainable and fair for users. We envision a future in which financial infrastructures are rather decentralised and horizontal, in which any member can have a say. Through its immutability, blockchain technology provides trustworthy infrastructures that allow cooperation on a large scale",
        'link':"/link",
        'end':"Work Meaningful - With our work, we aim to impact society positively. The projects we get involved with the aim to solve significant problems in our society, sustainably and in the long run, rather than looking for a quick profit through speculation or encouraging harmful behavior."   
        }
    }
    const [about, setAbout] = useState('1');
  return (
    <Wrapper>
        <div className='grid grid-cols-3'>
            <div className=''></div>
            <div className='col-span-2'>
                <div className='flex gap-8 justify-start'>
                    <button onClick={()=>setAbout("1")} className={`${about==='1'?'text-blue-600 underline':'text-black no-underline'}`}>About us</button>
                    <button onClick={()=>setAbout("2")} className={`${about==='2'?'text-blue-600 underline':'text-black no-underline'}`}>What we do</button>
                    <button onClick={()=>setAbout("3")} className={`${about==='3'?'text-blue-600 underline':'text-black no-underline'}`}>Employment</button>
                </div>
                <div>
                    <p>{desc[about].description}</p>
                    <button>Learn more</button>
                    <p>{desc[about].end}</p>
                </div>

            </div>

        </div>
    </Wrapper>
  )
}

export default DescriptionSection