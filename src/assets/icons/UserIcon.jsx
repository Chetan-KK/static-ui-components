import * as React from "react";
const UserIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 30 30"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M25 26.25v-2.5a5 5 0 0 0-5-5H10a5 5 0 0 0-5 5v2.5m10-12.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
  </svg>
);
export default UserIcon;
