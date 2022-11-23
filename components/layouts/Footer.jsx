import React from 'react';
import Wrapper from '../wrappers/Wrapper';

function Footer(props) {
    return (
        <Wrapper>
           <div className='flex justify-between'>
            <div className='text-2xl font-normal leading-8'>
                <ul>
                    <li>Ape Unit GmbH</li>
                    <li>Waldemarstraße 38,</li>
                    <li>10999 Berlin</li>
                </ul>
            </div>
            <div></div>
            <div className='text-2xl font-normal leading-8'>
                <span>Impressum</span>/<span>Privacy</span>
            </div>
           </div>
        </Wrapper>
    );
}

export default Footer;
