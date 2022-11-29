import React from "react";

function Wrapper({ children, styles }) {
  return (
    <div className={`max-w-90 px-5 ipad:px-9 desktop:px-16 mx-auto ${styles}`}>
      {children}
    </div>
  );
}

export default Wrapper;
