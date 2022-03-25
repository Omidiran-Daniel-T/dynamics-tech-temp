import React from "react";
import NavBar from "./navbar";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import JTemplate from "./jtemplate";
import SeeMore from "../images/Arrow 1.png";
import ReviewCard from "./reviewcard";
import Footer from "./footer";
import ServiceCard from "./servicescard";
import Laptop from "../images/laptop.png";
import ImageScroller from "react-image-scroller/lib/ImageScroller";
import { Link } from "react-router-dom";
// import Laptop2 from "../images/Lapop2.png";

class HomePage extends React.Component {
  state = {
    reviews: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    jtemp: [
      {
        header: "Welcome to Dynamics Technology",
        content: "Your exquisite techy Silicon Valley of Africa!",
        btnText: "GET STARTED",
      },
      {
        header: "Welcome to Dynamics Technology",
        content: "We build solutions and sell quality  products.",
        btnText: "GET STARTED",
      },
    ],
  };
  componentDidMount() {
    this.props.hideNav();
  }
  render() {
    return (
      <div>
        <NavBar
          color="white"
          active="home"
          navHidden={this.props.navHidden}
          hideNav={this.props.hideNav}
          switchNavState={this.props.switchNavState}
          loggedIn={this.props.loggedIn}
        />
        {/* slider */}
        <div className="bg-blue-00 h-screen flex flex-col justify-center">
          {/* Controls */}
          <div className="absolute bg-red-00 z-10 w-screen  flex justify-between items-center px-2 xs:px-3 sm:px-5 md:px-10">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 0 24 24"
                width="30px"
                fill="#ffffff"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 0 24 24"
                width="30px"
                fill="#ffffff"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
              </svg>
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-blue-00 z-10 w-screen flex justify-center items-end px-2 xs:px-3 sm:px-5 md:px-10 py-10">
            <span className="flex">
              <div className="h-3 w-3 rounded-full bg-white mx-1"></div>
              <div className="h-3 w-3 rounded-full bg-gray-400 mx-1"></div>
              <div className="h-3 w-3 rounded-full bg-gray-400 mx-1"></div>
            </span>
          </div>
          <Slide arrows={false} infinite={true}>
            {this.state.jtemp.map((t) => (
              <JTemplate key={t.header} data={t} />
            ))}
          </Slide>
        </div>
        {/* what we do */}
        <div className="md:px-10">
          <div className="text-gray-700 text-2xl font-black tracking-wider text-center mt-16">
            WHAT WE DO
          </div>
          <div className="h-1 w-20 bluebg1 m-auto my-1"></div>
          <div className="mt-10 m-auto px-2 text-center">
            At Dynamics Technology, we offer services such as UI/UX Design,
            Mobile App Development, Web Development, Graphics Design, Project
            Research, Content Writing, IT Tech Support, and even conduct
            training. Our services are aimed at taking your business to the next
            level.
          </div>
        </div>
        {/* our services */}
        <div>
          <div className="text-gray-700 text-2xl font-black tracking-wider text-center mt-16">
            OUR SERVICES
          </div>
          <div className="h-1 w-20 bluebg1 m-auto my-1"></div>
          <div className="mt-10 bg-red-00 py-5 md:grid md:grid-cols-3 lg:grid-cols-4 m-auto">
            <ServiceCard text="WEB DEVELOPMENT" imgClass="bg-image-wd" />
            <ServiceCard text="MOBILE DEVELOPMENT" imgClass="bg-image-ma" />
            <ServiceCard text="GRAPHIC DESIGN" imgClass="bg-image-4" />
            <ServiceCard text="UI/UX DESIGN" imgClass="bg-image-ui-ux" />
          </div>
          <div className="h-12 flex justify-center items-center cursor-pointer">
            <Link
              to="our-services"
              className="bg-red-00 w-full flex justify-center items-center"
            >
              <span className="bluecol1 font-black text-lg">SEE MORE</span>
              <img src={SeeMore} alt="see-more" className="h-4 px-2" />
            </Link>
          </div>
        </div>
        {/* product */}
        <div className="bluebg1 w-screen my-16 flex flex-col justify-center">
          {/* Controls */}
          <div className="absolute z-10 w-screen flex justify-between items-center px-2 xs:px-3 sm:px-5 md:px-10">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 0 24 24"
                width="30px"
                fill="#ffffff"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 0 24 24"
                width="30px"
                fill="#ffffff"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
              </svg>
            </span>
          </div>
          <Slide arrows={false} infinite={true}>
            <div className="w-screen z-0 md:flex py-5 md:items-center">
              <div className="bg-red-00 md:w-1/2">
                <div className="">
                  <img
                    src={Laptop}
                    alt="l-1"
                    className="max-w-sm md:max-w-xl max-h-screen"
                  />
                </div>
              </div>
              <div className="bg-red-00 px-2 text-white mt-10  max-w-sm md:max-w-1/2 md:w-1/2">
                <div className="font-black text-3xl tracking-wide">
                  Our Product
                </div>
                <div className="text-medium max-w-xs py-7">
                  Our products include smart devices, personal computers, mobile
                  phones, power , and a wide range of other technological
                  products.
                </div>
                <div className="flex">
                  <div className="horizontal-slider bg-gray-300 w-2 rounded-lg">
                    {/* Selected item indicator */}
                    <div className="h-1/4 bg-yellow-500 rounded-t-lg" />
                    <div className="h-1/4" />
                    <div className="h-1/4" />
                    <div className="h-1/4 rounded-b-lg" />
                  </div>
                  <div className="devices text-medium flex flex-col">
                    <div className="my-4 mx-4">Laptops</div>
                    <div className="my-4 mx-4">Phones</div>
                    <div className="my-4 mx-4">Smart Devices</div>
                    <div className="my-4 mx-4">Accessories</div>
                  </div>
                </div>
                <button
                  className="border-2 rounded-md px-10 my-10 py-1"
                  onClick={() => {
                    this.props.history.push("/products");
                  }}
                >
                  SHOP NOW
                </button>
              </div>
            </div>
          </Slide>
        </div>
        {/* agency */}
        <div className=" bg-red-00 md:flex my-5 m-auto">
          <div className="px-2 m-auto">
            <div className="text-gray-700 font-black text-3xl tracking-wide py-2 text-center">
              Our Agency
            </div>
            <div className="pt-5 max-w-xs m-auto">
              Dynamics Technology is one of Nigeria's leading company that
              offers value by creating effective, efficient and reliable
              solutions bordering on digital products and services, to our
              custimers' satisfaction.
            </div>
            {/* <div className="pt-7 max-w-xs m-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis erat
              sed vitae sed iaculis sed quam morbi faucibus.
            </div> */}
          </div>
          <div className="circlelg w-72 h-72 md:w-80 md:h-80 md:w-96 md:h-96 rounded-full my-5 m-auto pb-4 pr-4">
            {/* outer circle */}
            <div className="circlesm w-full h-full rounded-full">
              {/* inner circle */}
              <div></div>
            </div>
          </div>
        </div>
        {/* Reviews */}
        {/* <div className="">
          <div className="w-screen flex flex-col items-center">
            <div className="text-gray-700 font-bold text-2xl tracking-wide w-full text-center">
              WHAT OUR CLIENTS ARE SAYING
            </div>
            <div className="bluebg1 h-1 w-20"></div>
          </div>
          <div className="bg-red-00 h-56 py-1 flex flex-col justify-center my-10">
            <div className="absolute z-10 w-screen flex justify-between items-center px-2 xs:px-3 sm:px-5 md:px-10">
              <span className="bluecol1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 0 24 24"
                  width="30px"
                  className="fill-current"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
                </svg>
              </span>
              <span className="bluecol1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 0 24 24"
                  width="30px"
                  className="fill-current"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                </svg>
              </span>
            </div>
            <Slide arrows={false} infinite={true}>
              <div className="bg-red-00 md:flex justify-evenly max-w-4xl m-auto">
                <div>
                  <ReviewCard />
                </div>
                <div className="hidden md:block">
                  <ReviewCard />
                </div>
                <div className="hidden lg:block">
                  <ReviewCard />
                </div>
              </div>
            </Slide>
          </div>
        </div> */}
        {/*  */}
        <div className="relative">
          {/* controls */}
          <div className="bg-red-00 w-screen h-80 flex justify-between items-center px-5 absolute z-30">
            <span className="bluecol1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 0 24 24"
                width="30px"
                className="fill-current"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
              </svg>
            </span>
            <span className="bluecol1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 0 24 24"
                width="30px"
                className="fill-current"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
              </svg>
            </span>
          </div>
          {/*  */}
          <div className=" bg-red-00 h-80 z-20">
            <div className="my-10">
              <div className="text-gray-700 font-bold text-2xl tracking-wide text-center uppercase">
                WHAT OUR CLIENTS ARE SAYING
              </div>
              <div className="h-1 w-20 bluebg1 m-auto my-1"></div>
            </div>
            <div className="h-64 bg-green-00 pt-5 pl-10">
              <ImageScroller>
                {this.state.reviews.map((r) => (
                  <ReviewCard key={r} />
                ))}
              </ImageScroller>
            </div>
          </div>
        </div>
        {/*  */}
        {/* new project form */}
        <div className="bg-red-00 w-full py-5">
          <div className="bluebg1 px-5 py-5 m-auto max-w-4xl lg:rounded-b-3xl mb-5 md:px-12 md:pt-10 ">
            <span className="text-white font-semibold tracking-wider text-4xl">
              Start A New Project
            </span>
            <form className="flex flex-col pt-5">
              <div className="md:flex">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="h-12 w-full bluebg2 placeholder-gray-300 px-2 my-3 md:mr-1 md:w-2/3"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="h-12 w-full bluebg2 placeholder-gray-300 px-2 my-3 md:ml-1 md:w-1/3"
                />
              </div>
              <input
                type="text"
                placeholder="Email Address"
                className="h-12 w-full bluebg2 placeholder-gray-300 px-2 my-3"
              />
              <textarea
                name="message"
                id="message"
                cols="35"
                rows="10"
                placeholder="Drop us a message"
                className="my-3 bluebg2 placeholder-gray-300 px-2 w-full"
              ></textarea>
              <button className="py-2 w-2/3 md:w-1/3 m-auto my-5 rounded tracking-wide border-2 border-white text-white">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
