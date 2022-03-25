import React from "react";

const NotificationIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="17px"
      viewBox="0 0 24 24"
      width="17px"
      fill="#FAA82D"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
    </svg>
  );
};
const AccountIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="17px"
      viewBox="0 0 24 24"
      width="17px"
      fill="#FAA82D"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
    </svg>
  );
};
const SearchIcon = ({ color, height, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      fill={color}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
  );
};
const FullStar = () => {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        height="22px"
        viewBox="0 0 24 24"
        width="22px"
        fill="#FAA82D"
      >
        <g>
          <path d="M0,0h24v24H0V0z" fill="none" />
          <path d="M0,0h24v24H0V0z" fill="none" />
        </g>
        <g>
          <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
        </g>
      </svg>
    </span>
  );
};
const EmptyStar = () => {
  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="22px"
        viewBox="0 0 24 24"
        width="22px"
        fill="#FAA82D"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
      </svg>
    </span>
  );
};
const Stars = ({ level }) => {
  level = level > 5 ? 5 : level;
  const estar = 5 - level;
  let renderer = [];
  //renders level
  for (let i = 0; i < level; i++) renderer.push(<FullStar key={"f" + i} />);
  //render empty stars
  for (let i = 0; i < estar; i++) renderer.push(<EmptyStar key={"e" + i} />);

  return <>{renderer}</>;
};
export {
  AccountIcon,
  NotificationIcon,
  SearchIcon,
  FullStar,
  Stars,
  EmptyStar,
};
