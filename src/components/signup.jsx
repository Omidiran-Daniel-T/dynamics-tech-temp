import React from "react";
import NavBar from "./navbar";
import Message from "../images/Message.png";
class SignUp extends React.Component {
  render() {
    return (
      <div className="">
        <div className="w-screen">
          <NavBar
            color="black"
            active="login"
            navHidden={this.props.navHidden}
            hideNav={this.props.hideNav}
            switchNavState={this.props.switchNavState}
            loggedIn={this.props.loggedIn}
          />
          <div className="flex flex-col justify-center items-center h-screen pt-10">
            <span className="text-4xl font-bold text-center text-gray-700 tracking-widest">
              Create an account
            </span>
            <form className="flex flex-col">
              <span className="text-lg text-gray-500 my-2 w-72 text-center">
                Enter your details to continue
              </span>
              <div className="bg-white h-12 w-72 flex items-center pl-5 rounded-lg shadow-lg my-3">
                <span>
                  <svg
                    width="24"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.3764 20.0279L18.1628 8.66544C18.6403 8.0527 18.8101 7.3443 18.6509 6.62299C18.513 5.96726 18.1097 5.34377 17.5049 4.87078L16.0299 3.69906C14.7459 2.67784 13.1541 2.78534 12.2415 3.95706L11.2546 5.23735C11.1273 5.39752 11.1591 5.63401 11.3183 5.76301C11.3183 5.76301 13.812 7.76246 13.8651 7.80546C14.0349 7.96671 14.1622 8.1817 14.1941 8.43969C14.2471 8.94493 13.8969 9.41792 13.377 9.48242C13.1329 9.51467 12.8994 9.43942 12.7297 9.29967L10.1086 7.21422C9.98126 7.11855 9.79025 7.13898 9.68413 7.26797L3.45514 15.3303C3.0519 15.8355 2.91395 16.4912 3.0519 17.1255L3.84777 20.5761C3.89021 20.7589 4.04939 20.8879 4.24039 20.8879L7.74222 20.8449C8.37891 20.8341 8.97316 20.5439 9.3764 20.0279ZM14.2797 18.9533H19.9898C20.5469 18.9533 21 19.4123 21 19.9766C21 20.5421 20.5469 21 19.9898 21H14.2797C13.7226 21 13.2695 20.5421 13.2695 19.9766C13.2695 19.4123 13.7226 18.9533 14.2797 18.9533Z"
                      fill="#2947B3"
                      fillOpacity="0.8"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-full w-full px-3 text-gray-800 focus:outline-none placeholder-gray-700 rounded-lg"
                />
              </div>
              <div className="bg-white h-12 w-72 flex items-center pl-6 rounded-lg shadow-lg my-3">
                <img src={Message} alt="e-icon" className="h-4" />
                <input
                  type="email"
                  placeholder="Email"
                  className="h-full w-full px-3 text-gray-800 focus:outline-none placeholder-gray-700 rounded-lg"
                />
              </div>
              <div className="bg-white h-12 w-72 flex items-center pl-5 rounded-lg shadow-lg my-3">
                <span>
                  <svg
                    width="24"
                    height="22"
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
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  className="h-full w-full pl-2 pr-3 text-gray-800 focus:outline-none placeholder-gray-700 rounded-lg"
                />
              </div>
              <div className="bg-white h-12 w-72 flex items-center pl-5 rounded-lg shadow-lg my-3">
                <span>
                  <svg
                    width="24"
                    height="22"
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
                </span>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="h-full w-full pl-2 pr-3 text-gray-800 focus:outline-none placeholder-gray-700 rounded-lg"
                />
              </div>
              <button
                className="text-white bg-yellow-500 text-lg tracking-wide py-2 w-4/6 rounded-md m-auto my-7
              hover:bg-yellow-600"
                onClick={() => {
                  this.props.history.replace("/");
                }}
              >
                REGISTER
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
