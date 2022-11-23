import React from 'react';

function Wrapper({children,styles}) {
    return (
        <div className={`max-w-82 md:px-16 px-5 mx-auto ${styles}`} >
           {children} 
        </div>
    );
}

export default Wrapper;