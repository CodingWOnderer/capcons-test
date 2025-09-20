import * as React from "react";

export const HouseIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      width="42"
      height="40"
      viewBox="0 0 42 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>House Icon</title>
      <path
        d="M19 32H23"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M37 13V23C37 30.5425 37 34.3137 34.6569 36.6569C32.3137 39 28.5425 39 21 39C13.4575 39 9.68629 39 7.34315 36.6569C5 34.3137 5 30.5425 5 23V13"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M41 17L32.3137 8.67097C26.9804 3.55699 24.3137 1 21 1C17.6863 1 15.0196 3.55699 9.6863 8.67096L1 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
