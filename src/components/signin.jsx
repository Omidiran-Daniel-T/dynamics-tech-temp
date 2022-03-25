import React, { useEffect, useState, useRef, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import NavBar from "./navbar";
import Message from "../images/Message.png";
import { Link } from "react-router-dom";

const LOGIN_URL = "/auth/login";

const SignIn = ({
  navHidden,
  hideNav,
  switchNavState,
  history,
  setLogginStatus,
  loggedIn,
  setUserDets,
}) => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errorRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage("");
  }, [user, pwd]);

  const handleSubmit = async () => {
    // console.log(user, pwd);
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email: user, password: pwd }),

        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        }
      );
      // console.log(response?.data);
      const accessToken = response?.data?.data?.token;
      setAuth({ user, pwd, accessToken });
      setLogginStatus();
      setUser("");
      setPwd("");
      setUserDets({ email: user, password: pwd, accessToken: accessToken });
      history.replace("/products");
    } catch (err) {
      if (!err.response) {
        setErrorMessage("Something Went Wrong 1");
      } else if (err.response?.status === 400) {
        setErrorMessage("Cannot Process Request");
      } else if (err.response?.status === 401) {
        setErrorMessage("Invalid Username or Password");
      } else {
        setErrorMessage("Something Went Wrong f");
      }
      // errorRef.focus();
    }
  };
  return (
    <div className="w-screen">
      <NavBar
        color="black"
        active="sign-in"
        navHidden={navHidden}
        hideNav={hideNav}
        switchNavState={switchNavState}
        loggedIn={loggedIn}
      />
      <div className="flex flex-col justify-center items-center h-screen pt-10 px-4">
        <span className="text-4xl font-bold text-center text-gray-700 tracking-widest">
          Sign in to your account
        </span>
        <form className="flex flex-col">
          <span className="text-lg  text-gray-500 my-2">
            Input your email and password to login
          </span>
          <div
            ref={errorRef}
            className="text-xs text-red-500 text-center font-semibold"
            aria-live="assertive"
          >
            {errorMessage}
          </div>
          <div className="bg-white h-12 flex items-center pl-5 rounded-lg shadow-lg my-3">
            <img src={Message} alt="e-icon" className="h-4" />
            <input
              type="email"
              placeholder="Email"
              className="h-full w-full px-3 text-gray-800 focus:outline-none placeholder-gray-700 rounded-lg"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
          </div>
          <div className="bg-white h-12 flex items-center pl-5 rounded-lg shadow-lg my-3">
            <span>
              <svg
                width="22"
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
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
          </div>
          <div className="flex items-center my-3 cursor-pointer ">
            <div className="remember-password w-5 h-5 mr-3 rounded-md"></div>
            <span className="text-gray-700 hover:text-yellow-500">
              Remember password
            </span>
          </div>
          <button
            className="text-white bg-yellow-500 text-lg tracking-wide py-2 w-4/6 rounded-md m-auto my-7
          hover:bg-yellow-600 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            SIGN IN
          </button>
          <div className="bg-red-00 text-md font-semibold text-yellow-500 hover:text-yellow-600 cursor-pointer text-center mb-5 ">
            <Link to="/forgot-password-1">Forgot Password?</Link>
          </div>
          <div className="w-full flex justify-center">
            <span className="font-semibold text-gray-700">
              Don’t have an account yet?
              <span className="text-yellow-500 cursor-pointer hover:text-yellow-600">
                <Link to="/sign-up">Sign Up</Link>
              </span>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
