import React from 'react';

function Wrapper({children,styles}) {
    return (
        <div className={`max-w-82 px-5 sm:px-9 lg:px-16 mx-auto ${styles}`} >
           {children} 
        </div>
    );
}

export default Wrapper;