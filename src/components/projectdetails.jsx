import React from "react";
import NavBar from "./navbar";
const ProjectDetails = ({ navHidden, hideNav, switchNavState, loggedIn }) => {
  return (
    <div className="form">
      <NavBar
        color="black"
        active="services"
        navHidden={navHidden}
        hideNav={hideNav}
        switchNavState={switchNavState}
        loggedIn={loggedIn}
      />
      <div className="bg-red-00 pt-32 px-5 text-sm">
        <div className="text-lg text-gray-700 font-bold text-center">
          Input Project Details
        </div>
        <div className="bg-green-00 mt-10 max-w-4xl m-auto">
          <div className="md:grid md:grid-cols-2">
            <div className="w-80 mr-auto">
              <label>Service Type</label>
              <div className="bg-white px-2 text-xs font-semibold rounded max-w-sm h-10 flex items-center justify-between cursor-pointer my-5 shadow-lg hover:shadow-xl">
                <div>Logo Design</div>
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline mx-2 fill-current"
                >
                  <path d="M4.869 9.63078C4.811 9.57428 4.563 9.36094 4.359 9.1622C3.076 7.99708 0.976 4.95762 0.335 3.36678C0.232 3.12518 0.014 2.51437 0 2.18802C0 1.8753 0.072 1.5772 0.218 1.29274C0.422 0.938139 0.743 0.653678 1.122 0.497808C1.385 0.397467 2.172 0.241598 2.186 0.241598C3.047 0.0857282 4.446 0 5.992 0C7.465 0 8.807 0.0857282 9.681 0.213346C9.695 0.227959 10.673 0.383829 11.008 0.554311C11.62 0.867024 12 1.47784 12 2.13151V2.18802C11.985 2.61374 11.605 3.50901 11.591 3.50901C10.949 5.01413 8.952 7.98344 7.625 9.17681C7.625 9.17681 7.284 9.51291 7.071 9.65904C6.765 9.88699 6.386 10 6.007 10C5.584 10 5.19 9.87238 4.869 9.63078Z" />
                </svg>
              </div>
            </div>
            <div className="w-80 ml-auto">
              <label>Company Name</label>
              <input
                className="bg-white px-2 text-xs font-semibold rounded max-w-sm h-10 w-full flex items-center my-5 shadow-lg"
                placeholder="Enter Company Name"
              />
            </div>
            <div className="w-80 mr-auto">
              <label>Email Address</label>
              <input
                placeholder="Enter Email Address"
                className="bg-white px-2 text-xs font-semibold rounded max-w-sm h-10 w-full flex items-center my-5 shadow-lg"
              />
            </div>
            <div className="w-80 ml-auto">
              <label>Mobile No</label>
              <input
                placeholder="Enter mobile No"
                className="bg-white px-2 text-xs font-semibold rounded max-w-sm h-10 w-full flex items-center my-5 shadow-lg"
              />
            </div>
          </div>
          <div>
            <label>Project brief</label>
            <textarea
              placeholder="Type your message here ..."
              className="bg-white px-2 text-xs font-semibold rounded h-40 w-full my-5 shadow-lg"
            />
          </div>
        </div>
        <div className="bg-red-00 flex flex-col my-7 items-center">
          <div className="">
            <svg
              width="120"
              height="120"
              viewBox="0 0 146 146"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_579_1702)">
                <circle cx="73" cy="71" r="61" fill="white" />
              </g>
              <path
                d="M89.872 75.4H77.128V88H69.424V75.4H56.68V68.2H69.424V55.6H77.128V68.2H89.872V75.4Z"
                fill="#2947B3"
              />
              <defs>
                <filter
                  id="filter0_d_579_1702"
                  x="0"
                  y="0"
                  width="146"
                  height="146"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="2"
                    operator="erode"
                    in="SourceAlpha"
                    result="effect1_dropShadow_579_1702"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="7" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.160516 0 0 0 0 0.27999 0 0 0 0 0.703581 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_579_1702"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_579_1702"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="w-40 text-center text-xs text-semibold text-gray-800">
            Add sketches, more informations e.t.c
          </div>
        </div>
        <div className="w-full flex justify-center my-20">
          <button className="text-white bg-yellow-500 uppercase h-10 w-48 text-xs rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
