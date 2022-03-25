import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ArrowRight from "../images/ar.png";
const ServiceCard = ({ imgClass, text }) => {
  return (
    <div>
      <Link to="/project-details">
        <div
          className={
            "bg-gray-500 h-80 w-64 my-5 px-5 rounded-xl m-auto flex flex-col justify-end " +
            imgClass
          }
        >
          <div className="text-white font-black text-2xl">{text}</div>
          <div className="">
            <img
              src={ArrowRight}
              alt="ar"
              className="h-7 my-8 ml-auto cursor-pointer"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
