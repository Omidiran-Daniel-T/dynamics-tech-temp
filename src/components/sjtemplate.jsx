import React from "react";
import { Link } from "react-router-dom";
const SJTemplate = ({ data }) => {
  return (
    <div
      className={
        "h-screen w-screen z-0 bg-center flex items-center " + data.imgClass
      }
    >
      <div className="text-white flex flex-col px-2 max-w-xl bg-red-00 m-auto">
        <span className="font-black uppercase text-4xl tracking-wide text-center">
          {data.header}
        </span>
        <span className="text-lg my-8 text-center">{data.content}</span>
        <Link
          to="project-details"
          className="bg-yellow-500 w-1/2 py-2 text-center rounded-md m-auto"
        >
          {data.btnText}
        </Link>
      </div>
    </div>
  );
};

export default SJTemplate;
