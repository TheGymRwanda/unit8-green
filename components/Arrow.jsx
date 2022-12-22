import React from "react";

function Arrow({styles}) {
  return (
    <div className={styles}>
      <svg
        width="17"
        height="18"
        viewBox="0 0 17 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.3116 7.9967L7.82692 1.51198L1.34219 7.9967"
          stroke-width="1.5"
        />
        <line
          y1="-0.75"
          x2="15.5633"
          y2="-0.75"
          transform="matrix(0 1 1 0 8.56848 1.51221)"
          stroke-width="1.5"
        />
      </svg>
    </div>
  );
}

export default Arrow;
