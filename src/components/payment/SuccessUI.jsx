import React from "react";
const Success = () => {
  return (
    <div className="bg-gray-500 w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div>
          <svg
            width="150"
            height="150"
            viewBox="0 0 212 212"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M60.1755 0.16568H151.933C187.81 0.16568 211.835 25.354 211.835 62.819V149.295C211.835 186.644 187.81 211.832 151.933 211.832H60.1755C24.298 211.832 0.167969 186.644 0.167969 149.295V62.819C0.167969 25.354 24.298 0.16568 60.1755 0.16568ZM99.9688 137.643L150.24 87.3723C153.838 83.774 153.838 77.9531 150.24 74.249C146.641 70.6506 140.715 70.6506 137.116 74.249L93.4072 117.958L74.8863 99.4373C71.288 95.839 65.3613 95.839 61.763 99.4373C58.1647 103.036 58.1647 108.856 61.763 112.561L86.9513 137.643C88.7505 139.442 91.0788 140.289 93.4072 140.289C95.8413 140.289 98.1697 139.442 99.9688 137.643Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="text-2xl text-white my-10 font-bold tracking-wider">
          Payment Successful
        </div>
        <button className="uppercase text-white text-sm bg-yellow-500 h-10 w-56 rounded-lg tracking-wider">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Success;
