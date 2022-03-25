import React from "react";
import NavBar from "../navbar";
import { Redirect } from "react-router-dom";
const ForgotPassword2 = () => {
  return (
    <div className="">
      <div className="w-screen">
        <NavBar color="black" active="login" loggedIn={this.props.loggedIn} />
        <div className="flex flex-col justify-center items-center h-screen pt-10">
          <div>
            <svg
              width="120"
              height="120"
              viewBox="0 0 144 144"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="my-5"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M79.3347 98.7296C79.3347 102.798 76.0193 105.977 71.9695 105.977C67.9657 105.977 64.6653 102.783 64.6653 98.7296V85.493C64.6653 81.4847 67.9807 78.3057 71.9695 78.3057C76.0042 78.3057 79.3347 81.4699 79.3347 85.493V98.7296ZM71.9695 103.977C74.957 103.977 77.3347 101.651 77.3347 98.7296V85.493C77.3347 82.631 74.957 80.3057 71.9695 80.3057C69.043 80.3057 66.6653 82.631 66.6653 85.493V98.7296C66.6653 101.651 69.043 103.977 71.9695 103.977ZM96.4669 54.2822H94.4669H49.5332H47.5332V52.2822V44.2568V44.2467H47.5332C47.6 31.0557 58.6002 20.4343 72.0305 20.4343C85.4694 20.4343 96.4669 31.1259 96.4669 44.376V52.2822V54.2822ZM94.4669 44.376C94.4669 32.2723 84.4071 22.4343 72.0305 22.4343C59.6539 22.4343 49.5942 32.2127 49.5332 44.2568V50.2822V52.2822H51.5332H92.4669H94.4669V50.2822V44.376ZM36.8637 44.376V44.3692C36.9286 25.347 52.6714 10 71.9086 10C91.3784 10 107.136 25.3376 107.136 44.376V52.1461C117.518 55.9967 125 65.7326 125 77.3304V106.952C125 121.931 112.594 134 97.3933 134H46.6128C31.4058 134 19 121.931 19 106.952V77.3304C19 65.7323 26.4874 55.997 36.8637 52.1463V44.376ZM38.8637 53.5761C28.5357 56.8018 21 66.1568 21 77.3304V106.952C21 120.785 32.4681 132 46.6128 132H97.3933C111.532 132 123 120.785 123 106.952V77.3304C123 66.1568 115.47 56.8018 105.136 53.5761V44.376C105.136 26.4887 90.321 12 71.9086 12C53.74 12 38.9247 26.4887 38.8637 44.376V53.5761Z"
                fill="#2947B3"
              />
            </svg>
          </div>
          <span className="text-4xl font-bold text-center text-gray-700 tracking-widest">
            Reset Password
          </span>
          <form className="flex flex-col">
            <span className="text-md text-gray-500 my-2 w-72 text-center">
              Please input the 4-digit recovery code sent to your email address
              to proceed with your password reset.
            </span>
            <div className="bg-red-00 h-10 w-72 flex items-center justify-evenly px-2 my-3 ">
              <input
                type="password"
                className="h-9 w-9 rounded-md text-2xl font-bold focus:outline-none text-center text-white bluebg1"
              />
              <input
                type="password"
                className="h-9 w-9 rounded-md text-2xl font-bold focus:outline-none text-center text-white bluebg1"
              />
              <input
                type="password"
                className="h-9 w-9 rounded-md text-2xl font-bold focus:outline-none text-center text-white bluebg1"
              />
              <input
                type="password"
                className="h-9 w-9 rounded-md text-2xl font-bold focus:outline-none text-center text-white bluebg1"
              />
            </div>
            <span className="text-lg text-gray-500 w-full text-center">
              Resend code in <span className="text-yellow-500">0:59</span>
            </span>
            <button
              className="text-white bg-yellow-500 text-lg tracking-wide py-2 w-4/6 rounded-md m-auto my-10"
              onClick={() => {
                <Redirect to="/forgot-password-3" />;
              }}
            >
              RESET PASSWORD
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword2;
