import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Logo from "../images/logo222 1.png";

const Footer = () => {
  return (
    <div className="bluebg1 mt-10 text-white text-md font-thin py-10 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-red-00 max-w-xs mx-5">
          <div>
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="ml-5 my-5">
            We build solutions and sell quality products.
          </div>
          <div className="flex ml-5 my-2">
            <span>
              <svg
                width="23"
                height="24"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27 0.291016H3C2.20435 0.291016 1.44129 0.686104 0.87868 1.38937C0.31607 2.09263 0 3.04645 0 4.04102V26.541C0 27.5356 0.31607 28.4894 0.87868 29.1927C1.44129 29.8959 2.20435 30.291 3 30.291H27C27.7956 30.291 28.5587 29.8959 29.1213 29.1927C29.6839 28.4894 30 27.5356 30 26.541V4.04102C30 3.04645 29.6839 2.09263 29.1213 1.38937C28.5587 0.686104 27.7956 0.291016 27 0.291016V0.291016ZM27 9.10352L15 19.1048L3 9.10352V4.59789L15 14.5973L27 4.59789V9.10352Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="pl-4 cursor-pointer">Ddynamictech@gmail.com</span>
          </div>
          <div className="flex ml-5 my-4">
            <span>
              <svg
                width="23"
                height="24"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.0013 21.6118L22.5846 19.0275C22.9325 18.6837 23.3727 18.4484 23.8518 18.3501C24.3308 18.2518 24.8281 18.2947 25.2832 18.4737L28.4316 19.7313C28.8915 19.918 29.2859 20.2368 29.565 20.6474C29.8441 21.058 29.9955 21.5421 30 22.0387V27.8073C29.9973 28.1451 29.9263 28.4788 29.7913 28.7884C29.6563 29.0981 29.4601 29.3772 29.2144 29.6089C28.9688 29.8406 28.6788 30.0203 28.3619 30.1369C28.045 30.2536 27.7078 30.3049 27.3706 30.2878C5.3088 28.9149 0.857235 10.2246 0.0153584 3.07153C-0.023722 2.72026 0.0119848 2.3647 0.12013 2.02823C0.228275 1.69176 0.406406 1.38201 0.642807 1.11936C0.879207 0.856708 1.16852 0.647106 1.49171 0.504344C1.8149 0.361581 2.16464 0.288894 2.51792 0.291063H8.08815C8.58521 0.292535 9.07047 0.442739 9.4815 0.722357C9.89254 1.00198 10.2106 1.39822 10.3947 1.86012L11.6517 5.00978C11.8365 5.46327 11.8837 5.96119 11.7873 6.44133C11.6909 6.92147 11.4552 7.36256 11.1097 7.70949L8.52638 10.2938C8.52638 10.2938 10.0141 20.3658 20.0013 21.6118Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="pl-4 cursor-pointer">+234814693411</span>
          </div>
        </div>
        <div className="bg-red-00 max-w-xs pl-5 my-5 mx-5">
          <div className="text-xl font-semibold tracking-wider">Service</div>
          <div className="my-2">
            <Link to="/project-details">Mobile Development</Link>
          </div>
          <div className="my-2">
            <Link to="/project-details">Web Development</Link>
          </div>
          <div className="my-2">
            <Link to="/project-details">UI?UX Design</Link>
          </div>
          <div className="my-2">
            <Link to="/project-details">Project Research</Link>
          </div>
          <div className="my-2">
            <Link to="/project-details">Content Writing</Link>
          </div>
          <div className="my-2">
            <Link to="/project-details">IT Technical Support And Solution</Link>
          </div>
        </div>
        <div className="bg-red-00 max-w-xs pl-5 my-5 mx-5">
          <div className="text-xl font-semibold tracking-wider">Company</div>
          <div className="my-2">
            <Link to="/about-us">About Dynamics Technology</Link>
          </div>
          <div className="my-2">Why Dynamics Tech.</div>
          <div className="my-2">What we do</div>
          <div className="my-2">Career</div>
          <div className="my-2">Blog</div>
        </div>
        <div className="bg-red-00 max-w-xs pl-5 my-5 mx-5">
          <div className="text-xl font-semibold tracking-wider">Address</div>
          <div className="my-2">
            3587 st Thomas Boulevard,Indianapolis, Indiana, 4214. UK <br />
            <br /> 7th Vicent Street Yaba, Lagos.
          </div>
          <div className="my-2 flex bg-green-00 w-28 justify-between">
            <div className="w-8 h-8 flex items-center justify-center rounded-full bluebg2 cursor-pointer">
              <svg
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.198 19.5H7.198V11.49H10.802L11.198 7.51H7.198V5.5C7.198 5.23478 7.30336 4.98043 7.4909 4.79289C7.67843 4.60536 7.93279 4.5 8.198 4.5H11.198V0.5H8.198C6.87192 0.5 5.60015 1.02678 4.66247 1.96447C3.72479 2.90215 3.198 4.17392 3.198 5.5V7.51H1.198L0.802002 11.49H3.198V19.5Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bluebg2 cursor-pointer">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.4317 0.0641667C15.4467 0.110833 16.1483 0.26 16.7967 0.511667C17.4114 0.741509 17.9679 1.10399 18.4267 1.57333C18.896 2.03207 19.2585 2.5886 19.4883 3.20333C19.74 3.8525 19.8892 4.55333 19.9358 5.56833C19.9933 6.82667 20 7.27 20 10C20 12.73 19.9933 13.1733 19.9358 14.4317C19.8892 15.4467 19.74 16.1483 19.4883 16.7975C19.2584 17.4119 18.8959 17.9682 18.4267 18.4267C17.9679 18.896 17.4114 19.2585 16.7967 19.4883C16.1475 19.74 15.4467 19.8892 14.4317 19.9358C13.1733 19.9933 12.7308 20 10 20C7.26917 20 6.82583 19.9933 5.56833 19.9358C4.55333 19.8892 3.85167 19.74 3.2025 19.4883C2.58805 19.2584 2.03181 18.8959 1.57333 18.4267C1.10399 17.9679 0.741509 17.4114 0.511667 16.7967C0.26 16.1475 0.110833 15.4467 0.0641667 14.4317C0.00666667 13.175 0 12.7317 0 10C0 7.26917 0.00666667 6.825 0.0641667 5.56833C0.110833 4.55333 0.26 3.85167 0.511667 3.20333C0.741509 2.5886 1.10399 2.03207 1.57333 1.57333C2.03183 1.10409 2.58807 0.741617 3.2025 0.511667C3.8525 0.26 4.55333 0.110833 5.56833 0.0641667C6.825 0.00666667 7.26833 0 10 0C12.7308 0 13.175 0.00666667 14.4317 0.0641667ZM10 2.2225C7.3 2.2225 6.88667 2.22833 5.66917 2.28417C4.89667 2.31917 4.43333 2.4175 4.0075 2.58333C3.645 2.725 3.41417 2.875 3.14417 3.14417C2.87417 3.41417 2.72417 3.645 2.58333 4.0075C2.41833 4.4325 2.31917 4.89667 2.28417 5.66917C2.22833 6.88667 2.2225 7.3 2.2225 10C2.2225 12.7 2.22833 13.1133 2.28417 14.3308C2.31917 15.1033 2.4175 15.5667 2.58333 15.9917C2.725 16.355 2.875 16.5858 3.14417 16.8558C3.41417 17.1258 3.645 17.2758 4.0075 17.4167C4.4325 17.5817 4.89667 17.6808 5.66917 17.7158C6.8875 17.7717 7.30083 17.7775 10 17.7775C12.7 17.7775 13.1125 17.7717 14.3308 17.7158C15.1033 17.6808 15.5667 17.5825 15.9925 17.4167C16.355 17.275 16.5858 17.125 16.8558 16.8558C17.1258 16.5858 17.2758 16.355 17.4167 15.9925C17.5817 15.5675 17.6808 15.1033 17.7158 14.3308C17.7717 13.1125 17.7775 12.6992 17.7775 10C17.7775 7.30083 17.7717 6.8875 17.7158 5.66917C17.6808 4.89667 17.5825 4.43333 17.4167 4.00833C17.2988 3.6809 17.1069 3.38515 16.8558 3.14417C16.6149 2.89309 16.3191 2.70115 15.9917 2.58333C15.5667 2.41833 15.1025 2.31917 14.33 2.28417C13.1125 2.22833 12.6992 2.2225 9.99917 2.2225H10ZM10 15.185C8.62485 15.185 7.30603 14.6387 6.33365 13.6663C5.36127 12.694 4.815 11.3751 4.815 10C4.815 8.62485 5.36127 7.30603 6.33365 6.33365C7.30603 5.36127 8.62485 4.815 10 4.815C11.3751 4.815 12.694 5.36127 13.6663 6.33365C14.6387 7.30603 15.185 8.62485 15.185 10C15.185 11.3751 14.6387 12.694 13.6663 13.6663C12.694 14.6387 11.3751 15.185 10 15.185ZM10 12.9633C10.7859 12.9633 11.5397 12.6511 12.0954 12.0954C12.6511 11.5397 12.9633 10.7859 12.9633 10C12.9633 9.21408 12.6511 8.46034 12.0954 7.90461C11.5397 7.34887 10.7859 7.03667 10 7.03667C9.21408 7.03667 8.46034 7.34887 7.90461 7.90461C7.34887 8.46034 7.03667 9.21408 7.03667 10C7.03667 10.7859 7.34887 11.5397 7.90461 12.0954C8.46034 12.6511 9.21408 12.9633 10 12.9633ZM15.185 5.92583C14.8903 5.92583 14.6076 5.80876 14.3992 5.60036C14.1908 5.39196 14.0737 5.10931 14.0737 4.81458C14.0737 4.51986 14.1908 4.23721 14.3992 4.02881C14.6076 3.82041 14.8903 3.70333 15.185 3.70333C15.4797 3.70333 15.7624 3.82041 15.9708 4.02881C16.1792 4.23721 16.2962 4.51986 16.2962 4.81458C16.2962 5.10931 16.1792 5.39196 15.9708 5.60036C15.7624 5.80876 15.4797 5.92583 15.185 5.92583Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="w-8 h-8 flex items-center justify-center rounded-full bluebg2 cursor-pointer">
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.7501 1.96017C19.033 2.26954 18.2525 2.4922 17.4486 2.57892C18.2832 2.08306 18.9082 1.2997 19.2064 0.375791C18.4232 0.841703 17.5652 1.16841 16.6705 1.34142C16.2965 0.941634 15.8442 0.62315 15.3418 0.405808C14.8394 0.188467 14.2976 0.0769255 13.7501 0.0781347C11.5353 0.0781347 9.75405 1.87345 9.75405 4.07657C9.75405 4.38595 9.79155 4.69532 9.85249 4.99298C6.53608 4.81954 3.57827 3.23517 1.61187 0.809385C1.25357 1.42137 1.0658 2.1182 1.06811 2.82735C1.06811 4.21485 1.77358 5.43829 2.84936 6.15782C2.21539 6.13285 1.59626 5.9586 1.04233 5.64923V5.69845C1.04233 7.64142 2.41577 9.25157 4.24624 9.62189C3.90255 9.71116 3.54899 9.75683 3.1939 9.75782C2.93374 9.75782 2.68765 9.73204 2.43921 9.69689C2.94546 11.2813 4.41968 12.432 6.17515 12.4695C4.80171 13.5453 3.0814 14.1781 1.21343 14.1781C0.878272 14.1781 0.568896 14.1664 0.247803 14.1289C2.01968 15.2656 4.12202 15.9219 6.38608 15.9219C13.7361 15.9219 17.758 9.83282 17.758 4.54767C17.758 4.37423 17.758 4.20079 17.7462 4.02735C18.5244 3.45782 19.2064 2.75235 19.7501 1.96017Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;