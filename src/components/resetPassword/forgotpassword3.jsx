import React from "react";
import { Redirect } from "react-router-dom";
import NavBar from "../navbar";
const ForgotPassword3 = ({ navHidden, hideNav, switchNavState }) => {
  return (
    <div className="">
      <div className="w-screen">
        <NavBar
          color="black"
          active="login"
          navHidden={navHidden}
          hideNav={hideNav}
          switchNavState={switchNavState}
          loggedIn={this.props.loggedIn}
        />
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
            <div className="bg-white h-12 w-72 md:w-80 flex items-center px-5 rounded-lg shadow-lg my-5">
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.0108 14.6012C17.4248 14.6012 17.7608 14.2652 17.7608 13.8512V11.9992C17.7608 11.5852 17.4248 11.2492 17.0108 11.2492H11.3188C10.9948 10.1822 10.0128 9.39821 8.84076 9.39821C7.40676 9.39821 6.23976 10.5652 6.23976 11.9992C6.23976 13.4342 7.40676 14.6012 8.84076 14.6012C10.0128 14.6012 10.9948 13.8172 11.3188 12.7492H13.4308V13.8512C13.4308 14.2652 13.7668 14.6012 14.1808 14.6012C14.5948 14.6012 14.9308 14.2652 14.9308 13.8512V12.7492H16.2608V13.8512C16.2608 14.2652 16.5968 14.6012 17.0108 14.6012ZM7.66576 1.99921H16.3348C19.7228 1.99921 21.9998 4.37721 21.9998 7.91621V16.0832C21.9998 19.6222 19.7228 21.9992 16.3338 21.9992H7.66576C4.27676 21.9992 1.99976 19.6222 1.99976 16.0832V7.91621C1.99976 4.37721 4.27676 1.99921 7.66576 1.99921ZM7.73886 12.0001C7.73886 11.3921 8.23386 10.8981 8.84086 10.8981C9.44786 10.8981 9.94286 11.3921 9.94286 12.0001C9.94286 12.6071 9.44786 13.1011 8.84086 13.1011C8.23386 13.1011 7.73886 12.6071 7.73886 12.0001Z"
                  fill="#2947B3"
                  fillOpacity="0.8"
                />
              </svg>
              <input
                type="password"
                placeholder="New Password"
                className="h-full w-full px-3 text-gray-800 focus:outline-none placeholder-gray-700 rounded-lg"
              />
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.80327 12.2526C8.42774 12.6759 9.18882 12.9319 9.99868 12.9319C12.1453 12.9319 13.8919 11.1696 13.8919 9.00369C13.8919 8.18655 13.6382 7.41863 13.2186 6.78855L12.1551 7.86166C12.3307 8.1964 12.4283 8.5902 12.4283 9.00369C12.4283 10.3525 11.3354 11.4551 9.99868 11.4551C9.58887 11.4551 9.19858 11.3567 8.86683 11.1795L7.80327 12.2526ZM16.4288 3.54952C17.8436 4.84907 19.0438 6.60149 19.9415 8.70834C20.0195 8.8954 20.0195 9.11199 19.9415 9.2892C17.8534 14.1921 14.1358 17.1259 9.99868 17.1259H9.98893C8.10575 17.1259 6.30063 16.5056 4.71018 15.3735L2.81725 17.2834C2.67089 17.4311 2.4855 17.5 2.30011 17.5C2.11472 17.5 1.91957 17.4311 1.78297 17.2834C1.53903 17.0373 1.5 16.6435 1.69515 16.358L1.72442 16.3186L16.1556 1.75771C16.1751 1.73802 16.1946 1.71833 16.2044 1.69864L16.2044 1.69863C16.2239 1.67894 16.2434 1.65925 16.2532 1.63957L17.1704 0.714131C17.4631 0.428623 17.9217 0.428623 18.2046 0.714131C18.4974 0.999638 18.4974 1.4722 18.2046 1.75771L16.4288 3.54952ZM6.09836 9.00753C6.09836 9.2635 6.12764 9.51948 6.16667 9.75576L2.55643 13.3984C1.5807 12.2564 0.731804 10.8781 0.0585443 9.29304C-0.0195148 9.11583 -0.0195148 8.89924 0.0585443 8.71218C2.14662 3.80933 5.86419 0.885337 9.99156 0.885337H10.0013C11.3966 0.885337 12.7529 1.22007 14.0018 1.85015L10.7429 5.13841C10.5087 5.09903 10.255 5.0695 10.0013 5.0695C7.84494 5.0695 6.09836 6.83177 6.09836 9.00753Z"
                  fill="#444444"
                />
              </svg>
            </div>
            <div className="bg-white h-12 w-72 md:w-80 flex items-center px-5 rounded-lg shadow-lg my-5">
              <svg
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.0108 14.6012C17.4248 14.6012 17.7608 14.2652 17.7608 13.8512V11.9992C17.7608 11.5852 17.4248 11.2492 17.0108 11.2492H11.3188C10.9948 10.1822 10.0128 9.39821 8.84076 9.39821C7.40676 9.39821 6.23976 10.5652 6.23976 11.9992C6.23976 13.4342 7.40676 14.6012 8.84076 14.6012C10.0128 14.6012 10.9948 13.8172 11.3188 12.7492H13.4308V13.8512C13.4308 14.2652 13.7668 14.6012 14.1808 14.6012C14.5948 14.6012 14.9308 14.2652 14.9308 13.8512V12.7492H16.2608V13.8512C16.2608 14.2652 16.5968 14.6012 17.0108 14.6012ZM7.66576 1.99921H16.3348C19.7228 1.99921 21.9998 4.37721 21.9998 7.91621V16.0832C21.9998 19.6222 19.7228 21.9992 16.3338 21.9992H7.66576C4.27676 21.9992 1.99976 19.6222 1.99976 16.0832V7.91621C1.99976 4.37721 4.27676 1.99921 7.66576 1.99921ZM7.73886 12.0001C7.73886 11.3921 8.23386 10.8981 8.84086 10.8981C9.44786 10.8981 9.94286 11.3921 9.94286 12.0001C9.94286 12.6071 9.44786 13.1011 8.84086 13.1011C8.23386 13.1011 7.73886 12.6071 7.73886 12.0001Z"
                  fill="#2947B3"
                  fillOpacity="0.8"
                />
              </svg>
              <input
                type="password"
                placeholder="Confirm New Password"
                className="h-full w-full px-3 text-gray-800 focus:outline-none placeholder-gray-700 rounded-lg"
              />
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.80327 12.2526C8.42774 12.6759 9.18882 12.9319 9.99868 12.9319C12.1453 12.9319 13.8919 11.1696 13.8919 9.00369C13.8919 8.18655 13.6382 7.41863 13.2186 6.78855L12.1551 7.86166C12.3307 8.1964 12.4283 8.5902 12.4283 9.00369C12.4283 10.3525 11.3354 11.4551 9.99868 11.4551C9.58887 11.4551 9.19858 11.3567 8.86683 11.1795L7.80327 12.2526ZM16.4288 3.54952C17.8436 4.84907 19.0438 6.60149 19.9415 8.70834C20.0195 8.8954 20.0195 9.11199 19.9415 9.2892C17.8534 14.1921 14.1358 17.1259 9.99868 17.1259H9.98893C8.10575 17.1259 6.30063 16.5056 4.71018 15.3735L2.81725 17.2834C2.67089 17.4311 2.4855 17.5 2.30011 17.5C2.11472 17.5 1.91957 17.4311 1.78297 17.2834C1.53903 17.0373 1.5 16.6435 1.69515 16.358L1.72442 16.3186L16.1556 1.75771C16.1751 1.73802 16.1946 1.71833 16.2044 1.69864L16.2044 1.69863C16.2239 1.67894 16.2434 1.65925 16.2532 1.63957L17.1704 0.714131C17.4631 0.428623 17.9217 0.428623 18.2046 0.714131C18.4974 0.999638 18.4974 1.4722 18.2046 1.75771L16.4288 3.54952ZM6.09836 9.00753C6.09836 9.2635 6.12764 9.51948 6.16667 9.75576L2.55643 13.3984C1.5807 12.2564 0.731804 10.8781 0.0585443 9.29304C-0.0195148 9.11583 -0.0195148 8.89924 0.0585443 8.71218C2.14662 3.80933 5.86419 0.885337 9.99156 0.885337H10.0013C11.3966 0.885337 12.7529 1.22007 14.0018 1.85015L10.7429 5.13841C10.5087 5.09903 10.255 5.0695 10.0013 5.0695C7.84494 5.0695 6.09836 6.83177 6.09836 9.00753Z"
                  fill="#444444"
                />
              </svg>
            </div>
            <button
              className="text-white bg-yellow-500 text-lg tracking-wide py-2 w-4/6 rounded-md m-auto my-10"
              onClick={() => {
                <Redirect to="/sign-in" />;
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

export default ForgotPassword3;