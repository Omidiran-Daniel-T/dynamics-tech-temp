import React, { useState } from "react";
import Footer from "./footer";
import NavBar from "./navbar";
const ProjectPricing = ({ navHidden, hideNav, switchNavState }) => {
  const [selected, setSelected] = useState("basic");
  console.log(selected);
  const border_basic = selected === "basic" ? " border-2 border-blue-800 " : "";
  const standard_basic =
    selected === "standard" ? " border-2 border-blue-800 " : "";
  const premium_basic =
    selected === "premium" ? " border-2 border-blue-800 " : "";
  return (
    <div>
      <NavBar
        color="black"
        active="services"
        navHidden={navHidden}
        hideNav={hideNav}
        switchNavState={switchNavState}
        loggedIn={this.props.loggedIn}
      />
      <div className="px-2 sm:px-5 pb-10 md:px-10">
        <div className="font-semibold bg-red-00 pt-32 text-center">
          Select Service Type
        </div>
        {/* Basic */}
        <div
          className={
            "bg-red-00 my-10 px-2 sm:px-5 md:px-10 rounded-md shadow-lg  cursor-pointer hover:shadow-xl" +
            border_basic
          }
          onClick={() => {
            setSelected("basic");
          }}
        >
          <div className="uppercase font-semibold text-center py-5">BASIC</div>
          <div className="bg-green-00 md:grid grid-cols-2">
            <div className="left flex justify-center">
              <div>
                <div className="uppercase py-5">
                  2 CREATIVE INITIAL CONCEPTS (JPEG, PNG, VECTOR, MOCKUP)
                </div>
                <div className="md:flex">
                  <div className="bg-yellow-00 my-2 uppercase flex items-center">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-5"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M27.3327 15.0007C27.3327 21.8127 21.8113 27.334 14.9993 27.334C8.18735 27.334 2.66602 21.8127 2.66602 15.0007C2.66602 8.18866 8.18735 2.66733 14.9993 2.66733C21.8113 2.66733 27.3327 8.18866 27.3327 15.0007Z"
                        stroke="#444444"
                        strokeWidth="3.5"
                        strokLlinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.5755 18.9239L14.5488 15.9252V9.46252"
                        stroke="#444444"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm font-semibold">
                      7 DAYS DELIVERY
                    </span>
                  </div>
                  <div className="bg-yellow-00 my-2 uppercase flex items-center md:ml-10">
                    <svg
                      width="22"
                      height="30"
                      viewBox="0 0 22 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-5"
                    >
                      <path
                        d="M10.9987 7.00001V11L16.332 5.66668L10.9987 0.333344V4.33334C5.10536 4.33334 0.332031 9.10668 0.332031 15C0.332031 17.0933 0.945364 19.04 1.98536 20.68L3.93203 18.7333C3.31506 17.586 2.99426 16.3027 2.9987 15C2.9987 10.5867 6.58536 7.00001 10.9987 7.00001ZM20.012 9.32001L18.0654 11.2667C18.652 12.3867 18.9987 13.6533 18.9987 15C18.9987 19.4133 15.412 23 10.9987 23V19L5.66536 24.3333L10.9987 29.6667V25.6667C16.892 25.6667 21.6654 20.8933 21.6654 15C21.6654 12.9067 21.052 10.96 20.012 9.32001Z"
                        fill="#444444"
                      />
                    </svg>
                    <span className="text-sm font-semibold">NO REVISIONS</span>
                  </div>
                </div>
                <div className="my-10">
                  <div className="text-blue-800 flex items-center my-2">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-5"
                    >
                      <path
                        d="M6.00016 11.17L1.83016 7L0.410156 8.41L6.00016 14L18.0002 2L16.5902 0.589996L6.00016 11.17Z"
                        fill="#2947B3"
                      />
                    </svg>
                    <span>2 concepts included</span>
                  </div>
                  <div className="text-blue-800 flex items-center my-2">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-5"
                    >
                      <path
                        d="M6.00016 11.17L1.83016 7L0.410156 8.41L6.00016 14L18.0002 2L16.5902 0.589996L6.00016 11.17Z"
                        fill="#2947B3"
                      />
                    </svg>
                    <span>Logo transparency</span>
                  </div>
                  <div className="text-blue-800 flex items-center my-2">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-5"
                    >
                      <path
                        d="M6.00016 11.17L1.83016 7L0.410156 8.41L6.00016 14L18.0002 2L16.5902 0.589996L6.00016 11.17Z"
                        fill="#2947B3"
                      />
                    </svg>
                    <span>Vector file</span>
                  </div>
                  <div className="text-blue-800 flex items-center my-2">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-5"
                    >
                      <path
                        d="M6.00016 11.17L1.83016 7L0.410156 8.41L6.00016 14L18.0002 2L16.5902 0.589996L6.00016 11.17Z"
                        fill="#2947B3"
                      />
                    </svg>
                    <span>Mockup</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-blue-800 text-9xl font-black text-center flex items-center justify-center">
              $50
            </div>
          </div>
          <div className="w-full text-center bg-yellow-00">
            <button className="text-yellow-500 border border-yellow-500 hover:text-white hover:bg-yellow-500 text-sm font-semibold uppercase h-10 w-48 rounded-sm my-10">
              continue ($50)
            </button>
          </div>
        </div>
        {/* Standard */}
        <div
          className={
            "bg-red-00 my-10 px-2 sm:px-5 md:px-10 rounded-md shadow-lg  cursor-pointer hover:shadow-xl" +
            standard_basic
          }
          onClick={() => {
            setSelected("standard");
          }}
        >
          <div className="uppercase font-semibold text-center py-5">
            Standard
          </div>
          <div className="bg-green-00 md:grid grid-cols-2">
            <div className="left flex justify-center">
              <div>
                <div className="uppercase py-5">
                  3 CREATIVE INITIAL CONCEPTS (JPEG, PNG, VECTOR, MOCKUP)
                </div>
                <div className="md:flex">
                  <div className="bg-yellow-00 my-2 uppercase flex items-center">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-5"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M27.3327 15.0007C27.3327 21.8127 21.8113 27.334 14.9993 27.334C8.18735 27.334 2.66602 21.8127 2.66602 15.0007C2.66602 8.18866 8.18735 2.66733 14.9993 2.66733C21.8113 2.66733 27.3327 8.18866 27.3327 15.0007Z"
                        stroke="#444444"
                        strokeWidth="3.5"
                        strokLlinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.5755 18.9239L14.5488 15.9252V9.46252"
                        stroke="#444444"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm font-semibold">
                      10 DAYS DELIVERY
                    </span>
                  </div>
                  <div className="bg-yellow-00 my-2 uppercase flex items-center md:ml-10">
                    <svg
                      width="22"
                      height="30"
                      viewBox="0 0 22 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-5"
                    >
                      <path
                        d="M10.9987 7.00001V11L16.332 5.66668L10.9987 0.333344V4.33334C5.10536 4.33334 0.332031 9.10668 0.332031 15C0.332031 17.0933 0.945364 19.04 1.98536 20.68L3.93203 18.7333C3.31506 17.586 2.99426 16.3027 2.9987 15C2.9987 10.5867 6.58536 7.00001 10.9987 7.00001ZM20.012 9.32001L18.0654 11.2667C18.652 12.3867 18.9987 13.6533 18.9987 15C18.9987 19.4133 15.412 23 10.9987 23V19L5.66536 24.3333L10.9987 29.6667V25.6667C16.892 25.6667 21.6654 20.8933 21.6654 15C21.6654 12.9067 21.052 10.96 20.012 9.32001Z"
                        fill="#444444"
                      />
                    </svg>
                    <span className="text-sm font-semibold">
                      UNLIMITED REVISIONS
                    </span>
                  </div>
                </div>
                <div className="my-10">
                  <div className="text-blue-800 flex items-center my-2">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-5"
                    >
                      <path
                        d="M6.00016 11.17L1.83016 7L0.410156 8.41L6.00016 14L18.0002 2L16.5902 0.589996L6.00016 11.17Z"
                        fill="#2947B3"
                      />
                    </svg>
                    <span>3 concepts included</span>
                  </div>
                  <div className="text-blue-800 flex items-center my-2">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-5"
                    >
                      <path
                        d="M6.00016 11.17L1.83016 7L0.410156 8.41L6.00016 14L18.0002 2L16.5902 0.589996L6.00016 11.17Z"
                        fill="#2947B3"
                      />
                    </svg>
                    <span>Logo transparency</span>
                  </div>
                  <div className="text-blue-800 flex items-center my-2">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-5"
                    >
                      <path
                        d="M6.00016 11.17L1.83016 7L0.410156 8.41L6.00016 14L18.0002 2L16.5902 0.589996L6.00016 11.17Z"
                        fill="#2947B3"
                      />
                    </svg>
                    <span>Vector file</span>
                  </div>
                  <div className="text-blue-800 flex items-center my-2">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-5"
                    >
                      <path
                        d="M6.00016 11.17L1.83016 7L0.410156 8.41L6.00016 14L18.0002 2L16.5902 0.589996L6.00016 11.17Z"
                        fill="#2947B3"
                      />
                    </svg>
                    <span>3d Mockup</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-blue-800 text-9xl font-black text-center flex items-center justify-center">
              $75
            </div>
          </div>
          <div className="w-full text-center bg-yellow-00">
            <button className="text-yellow-500 border border-yellow-500 hover:text-white hover:bg-yellow-500  text-sm font-semibold uppercase h-10 w-48 rounded-sm my-10">
              continue ($75)
            </button>
          </div>
        </div>
        {/* Premium */}
        <div
          className={
            "bg-red-00 my-10 px-2 sm:px-5 md:px-10 rounded-md shadow-lg  cursor-pointer hover:shadow-xl" +
            premium_basic
          }
          onClick={() => {
            setSelected("premium");
          }}
        >
          <div className="uppercase font-semibold text-center py-5">
            Premium
          </div>
          <div className="bg-green-00 md:grid grid-cols-2">
            <div className="left flex justify-center">
              <div>
                <div className="uppercase py-5">
                  4 CREATIVE INITIAL CONCEPTS (JPEG, PNG, VECTOR, MOCKUP)
                </div>
                <div className="md:flex">
                  <div className="bg-yellow-00 my-2 uppercase flex items-center">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-5"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M27.3327 15.0007C27.3327 21.8127 21.8113 27.334 14.9993 27.334C8.18735 27.334 2.66602 21.8127 2.66602 15.0007C2.66602 8.18866 8.18735 2.66733 14.9993 2.66733C21.8113 2.66733 27.3327 8.18866 27.3327 15.0007Z"
                        stroke="#444444"
                        strokeWidth="3.5"
                        strokLlinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.5755 18.9239L14.5488 15.9252V9.46252"
                        stroke="#444444"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm font-semibold">
                      14 DAYS DELIVERY
                    </span>
                  </div>
                  <div className="bg-yellow-00 my-2 uppercase flex items-center md:ml-10">
                    <svg
                      width="22"
                      height="30"
                      viewBox="0 0 22 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-5"
                    >
                      <path
                        d="M10.9987 7.00001V11L16.332 5.66668L10.9987 0.333344V4.33334C5.10536 4.33334 0.332031 9.10668 0.332031 15C0.332031 17.0933 0.945364 19.04 1.98536 20.68L3.93203 18.7333C3.31506 17.586 2.99426 16.3027 2.9987 15C2.9987 10.5867 6.58536 7.00001 10.9987 7.00001ZM20.012 9.32001L18.0654 11.2667C18.652 12.3867 18.9987 13.6533 18.9987 15C18.9987 19.4133 15.412 23 10.9987 23V19L5.66536 24.3333L10.9987 29.6667V25.6667C16.892 25.6667 21.6654 20.8933 21.6654 15C21.6654 12.9067 21.052 10.96 20.012 9.32001Z"
                        fill="#444444"
                      />
                    </svg>
                    <span className="text-sm font-semibold">
                      UNLIMITED REVISIONS
                    </span>
                  </div>
                </div>
                <div className="my-10">
                  <div className="text-blue-800 flex items-center my-2">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-5"
                    >
                      <path
                        d="M6.00016 11.17L1.83016 7L0.410156 8.41L6.00016 14L18.0002 2L16.5902 0.589996L6.00016 11.17Z"
                        fill="#2947B3"
                      />
                    </svg>
                    <span>4 concepts included</span>
                  </div>
                  <div className="text-blue-800 flex items-center my-2">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-5"
                    >
                      <path
                        d="M6.00016 11.17L1.83016 7L0.410156 8.41L6.00016 14L18.0002 2L16.5902 0.589996L6.00016 11.17Z"
                        fill="#2947B3"
                      />
                    </svg>
                    <span>Logo transparency</span>
                  </div>
                  <div className="text-blue-800 flex items-center my-2">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-5"
                    >
                      <path
                        d="M6.00016 11.17L1.83016 7L0.410156 8.41L6.00016 14L18.0002 2L16.5902 0.589996L6.00016 11.17Z"
                        fill="#2947B3"
                      />
                    </svg>
                    <span>Vector file</span>
                  </div>
                  <div className="text-blue-800 flex items-center my-2">
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-5"
                    >
                      <path
                        d="M6.00016 11.17L1.83016 7L0.410156 8.41L6.00016 14L18.0002 2L16.5902 0.589996L6.00016 11.17Z"
                        fill="#2947B3"
                      />
                    </svg>
                    <span>3d Mockup</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-blue-800 text-9xl font-black text-center flex items-center justify-center">
              $100
            </div>
          </div>
          <div className="w-full text-center bg-yellow-00">
            <button className="text-yellow-500 border border-yellow-500 hover:text-white hover:bg-yellow-500  text-sm font-semibold uppercase h-10 w-48 rounded-sm my-10">
              continue ($100)
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPricing;
