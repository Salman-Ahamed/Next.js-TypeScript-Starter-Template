"use client";
import React, { useEffect, useState } from "react";

const Loading = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className=".bike fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
      <svg className="bike" viewBox="0 0 48 30" width="48px" height="30px">
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        >
          <g transform="translate(9.5,19)">
            <circle className="bike__tire" r="9" strokeDasharray="56.549 56.549" />
            <g
              className="bike__spokes-spin"
              strokeDasharray="31.416 31.416"
              strokeDashoffset="-23.562"
            >
              <circle className="bike__spokes" r="5" />
              <circle className="bike__spokes" r="5" transform="rotate(180,0,0)" />
            </g>
          </g>
          <g transform="translate(24,19)">
            <g
              className="bike__pedals-spin"
              strokeDasharray="25.133 25.133"
              strokeDashoffset="-21.991"
              transform="rotate(67.5,0,0)"
            >
              <circle className="bike__pedals" r="4" />
              <circle className="bike__pedals" r="4" transform="rotate(180,0,0)" />
            </g>
          </g>
          <g transform="translate(38.5,19)">
            <circle className="bike__tire" r="9" strokeDasharray="56.549 56.549" />
            <g
              className="bike__spokes-spin"
              strokeDasharray="31.416 31.416"
              strokeDashoffset="-23.562"
            >
              <circle className="bike__spokes" r="5" />
              <circle className="bike__spokes" r="5" transform="rotate(180,0,0)" />
            </g>
          </g>
          <polyline className="bike__seat" points="14 3,18 3" strokeDasharray="5 5" />
          <polyline
            className="bike__body"
            points="16 3,24 19,9.5 19,18 8,34 7,24 19"
            strokeDasharray="79 79"
          />
          <path className="bike__handlebars" d="m30,2h6s1,0,1,1-1,1-1,1" strokeDasharray="10 10" />
          <polyline className="bike__front" points="32.5 2,38.5 19" strokeDasharray="19 19" />
        </g>
      </svg>
    </div>
  );
};

export default Loading;
