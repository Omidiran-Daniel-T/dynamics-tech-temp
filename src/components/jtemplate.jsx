import React from "react";
import { Link } from "react-router-dom";
const JTemplate = ({ data }) => {
  return (
    <div className="bg-image-1 h-screen w-screen z-0 bg-center flex items-center">
      <div className="text-white flex flex-col px-2 max-w-sm ml-5 sm:ml-10 md:ml-20">
        <span className="font-black uppercase text-4xl tracking-wider">
          {data.header}
        </span>
        <span className="text-lg my-8">{data.content}</span>
        <Link
          to="/our-services"
          className="bg-yellow-500 w-1/2 py-2 rounded-md text-center cursor-pointer "
        >
          {data.btnText}
        </Link>
      </div>
    </div>
  );
};

export default JTemplate;
