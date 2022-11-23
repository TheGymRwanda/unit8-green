import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Wrapper from '../wrappers/Wrapper';
import arrow from '../../public/assets/images/arrow.svg'

function Button({text, style, link}) {
    return (
        <Wrapper>
            <div>
                <Link href={`${link}`}>
                <div className='flex gap-1 items-center group cursor-pointer'>
                <span className={`text-2xl font-normal leading-8 tracking-thin font-sans ${style}`}>{text}</span>
                <span className='group-hover:-translate-y-1 transition-transform duration-300 group-hover:translate-x-1'><Image src={arrow} /></span>
                </div>
                
                </Link>
                
            </div>
        </Wrapper>  
    );
}

export default Button;