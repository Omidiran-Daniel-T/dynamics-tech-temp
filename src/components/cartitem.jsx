import React from "react";
// import phone from "../images/product.png";
import { Stars } from "./icons";
const CartItem = ({ data, quantity }) => {
  return (
    <div className="bg-red-00 text-sm font-semibold px-5 md:px-10">
      <div className="bg-yellow-00 flex justify-between px-5 py-5 items-center max-w-md md:max-w-full m-auto border-t border-gray-300">
        <div className="bg-red-00 w-4/5 md:w-full md:grid md:grid-cols-6">
          <div className="bg-blue-00 col-span-3 md:flex md:py-5 md:items-center md:max-w-md md:justify-start">
            <div className="w-40 h-28 bg-green-00 m-auto md:m-0">
              <img
                src={data.displayimage[0].url}
                alt="cart-img"
                className="w-40 h-28"
              />
            </div>
            <div className="bg-green-00 md:ml-2">
              <div className="text-xs py-1">{data.name}</div>
              <div className="md:flex items-center bg-green-00 py-">
                <div className="bg-red-00 flex">
                  <Stars level={data.rating} />
                </div>
                <div className="text-blue-700 text-xs md:ml-2">
                  {/* (150 rating) */}
                </div>
              </div>
              <div className="text-gray-500 text-xs py-1">
                Color: Not Available
              </div>
            </div>
          </div>
          <div className="bg-blue-00 py-1 md:flex md:items-center md:justify-center">
            ${data.price}
          </div>
          <div className="bg-blue-00 flex items-center m-auto">
            <div>{minusIcon()}</div>
            <div className="mx-2 text-xs">{quantity}</div>
            <div>{plusIcon()}</div>
          </div>
          <div className="bg-blue-00 py-1 md:flex md:items-center md:justify-center">
            {"$" + quantity * data.price}
          </div>
        </div>
        <div className="bg-red-00">{deleteIcon()}</div>
      </div>
    </div>
  );
};

const deleteIcon = () => {
  return (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.3248 7.4682C16.3248 7.4682 15.7818 14.2032 15.4668 17.0402C15.3168 18.3952 14.4798 19.1892 13.1088 19.2142C10.4998 19.2612 7.88779 19.2642 5.27979 19.2092C3.96079 19.1822 3.13779 18.3782 2.99079 17.0472C2.67379 14.1852 2.13379 7.4682 2.13379 7.4682"
        stroke="#130F26"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.708 4.2397H0.75"
        stroke="#130F26"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4406 4.2397C13.6556 4.2397 12.9796 3.6847 12.8256 2.9157L12.5826 1.6997C12.4326 1.1387 11.9246 0.7507 11.3456 0.7507H7.11258C6.53358 0.7507 6.02558 1.1387 5.87558 1.6997L5.63258 2.9157C5.47858 3.6847 4.80258 4.2397 4.01758 4.2397"
        stroke="#130F26"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const minusIcon = () => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_246_1621)">
        <circle cx="22.5" cy="20.5" r="13.5" fill="white" />
      </g>
      <path d="M18 21H27V22.368H18V21Z" fill="#FFB100" fillOpacity="0.6" />
      <defs>
        <filter
          id="filter0_d_246_1621"
          x="0"
          y="0"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="5"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_246_1621"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="7" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_246_1621"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_246_1621"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
const plusIcon = () => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_246_1623)">
        <circle cx="22.5" cy="20.5" r="13.5" fill="white" />
      </g>
      <path
        d="M26.468 21.6H23.282V24.75H21.356V21.6H18.17V19.8H21.356V16.65H23.282V19.8H26.468V21.6Z"
        fill="#FFB100"
      />
      <defs>
        <filter
          id="filter0_d_246_1623"
          x="0"
          y="0"
          width="40"
          height="40"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="5"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_246_1623"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="7" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_246_1623"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_246_1623"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default CartItem;
