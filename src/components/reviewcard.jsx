import React from "react";
import DPq from "../images/dp1.png";
import { Stars } from "./icons";
const ReviewCard = () => {
  return (
    <div>
      <div className="h-48 w-72 rounded-md shadow-xl bg-white px-5 py-3 text-xs mx-5">
        <div className="flex items-center">
          <div className="h-16 w-16 rounded-full bg-gray-100 mr-4">
            <img src={DPq} alt="cli" className="" />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-700 font-semibold text-base">
              Olaleye OLaoluwa
            </span>
            <span className="text-gray-700 text-sm">
              Lorem ipsum dolor sit{" "}
            </span>
          </div>
        </div>
        <div className="text-gray-700 text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
          phasellus eget pharetra
        </div>
        <div className="flex mt-3">
          <Stars level={4} />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
