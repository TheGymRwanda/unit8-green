import React from "react";

function Wrapper({ children, styles }) {
  return (
    <div className={`max-w-90 px-5 mobile:px-9 ipad:px-16 mx-auto ${styles}`}>
      {children}
    </div>
  );
}

export default Wrapper;
