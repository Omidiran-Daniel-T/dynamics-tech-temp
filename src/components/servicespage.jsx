import React from "react";
import NavBar from "./navbar";
import SJTemplate from "./sjtemplate";
import { Slide } from "react-slideshow-image";
import ServiceCard from "./servicescard";
import Footer from "./footer";
class Services extends React.Component {
  state = {
    jtemp: [
      {
        header: "Mobile App Development",
        content:
          "We develop mobile apps to suit the requirements of our clients all over the world. This helps in expanding the business reach and providing significant exposure for our client's brands.",
        btnText: "START PROJECT",
        imgClass: "bg-image-ma",
      },
      {
        header: "Web Development ",
        content:
          "We develop highly responsive websites, geared towards improving user engagement and in turn, generating traffic for our client's brands.",
        btnText: "START PROJECT",
        imgClass: "bg-image-wd",
      },
      {
        header: "UI/UX Design",
        content:
          "We help clients improve their user experience and customer satisfaction, thereby increasing the number of users of their applications.",
        btnText: "START PROJECT",
        imgClass: "bg-image-ui-ux",
      },
      {
        header: "Graphics Design",
        content:
          "We help clients create high-quality visuals to increase viewer interaction and keep their customers interested",
        btnText: "START PROJECT",
        imgClass: "bg-image-pr",
      },

      {
        header: "Content Writing",
        content:
          "We help create a strong content strategy that drags customers by the neck and enables them to take the required purchasing action.",
        btnText: "START PROJECT",
        imgClass: "bg-image-cw",
      },
      {
        header: "Project Research",
        content:
          "We take care of our client's projects by embarking on in-depth research to gather suitable information and deliver credibility in form of projects.",
        btnText: "START PROJECT",
        imgClass: "bg-image-pr",
      },
      {
        header: "IT Tech Support",
        content:
          "We help businesses keep up with trends in technology by effectively managing their data, improving their decision-making, comprehensive monitoring, amongst others.",
        btnText: "START PROJECT",
        imgClass: "bg-image-ts",
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
          active="services"
          navHidden={this.props.navHidden}
          hideNav={this.props.hideNav}
          switchNavState={this.props.switchNavState}
          loggedIn={this.props.loggedIn}
        />
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
            {this.state.jtemp.map((d) => (
              <SJTemplate key={d.header} data={d} />
            ))}
          </Slide>
        </div>
        <div>
          <div className="text-gray-700 text-2xl font-black tracking-wider text-center mt-16">
            OUR SERVICES
          </div>
          <div className="h-1 w-20 bluebg1 m-auto my-1"></div>
          <div className="mt-10 bg-red-00 py-5 ">
            <div className="md:grid md:grid-cols-3 m-auto">
              <ServiceCard
                text="WEB DEVELOPMENT"
                imgClass="bg-image-wd m-auto"
              />
              <ServiceCard
                text="MOBILE APP DEVELOPMENT"
                imgClass="bg-image-ma"
              />
              <ServiceCard text="UI/UX Design" imgClass="bg-image-ui-ux" />
              <ServiceCard text="GRAPHIC DESIGN" imgClass="bg-image-4" />
              <ServiceCard text="PROJECT RESEARCH" imgClass="bg-image-pr" />
              <ServiceCard text="CONTENT WRITING" imgClass="bg-image-cw" />
              <ServiceCard text="IT TECH SUPPORT" imgClass="bg-image-ts" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Services;
