import React from "react";
import Footer from "./footer";
import NavBar from "./navbar";

class AboutUs extends React.Component {
  componentDidMount() {
    this.props.hideNav();
  }
  render() {
    return (
      <>
        <NavBar
          color="black"
          active="about-us"
          navHidden={this.props.navHidden}
          hideNav={this.props.hideNav}
          switchNavState={this.props.switchNavState}
          loggedIn={this.props.loggedIn}
        />
        <div className="bg-red-00 about-bg py-10">
          {/* Mission */}
          <div className=" bg-red-00 md:flex pt-40 m-auto">
            <div className="px-2 m-auto">
              <div className="text-gray-700 font-black text-3xl tracking-wide py-2 text-center uppercase">
                Our Mission
              </div>
              <div className="pt-5 max-w-xl m-auto">
                Dynamics Technology is dedicated to creating and delivering
                effective, efficient, and reliable digital products and services
                to the public, in line with their budgets, alongside offering
                consumer service and friendly support services.
              </div>
            </div>
            <div className="circlelg w-72 h-72 md:w-80 md:h-80 md:w-96 md:h-96 rounded-full my-5 m-auto pb-4 pr-4">
              {/* outer circle */}
              <div className="circlesm w-full h-full rounded-full">
                {/* inner circle */}
                <div className="about-2u w-full h-full rounded-full"></div>
              </div>
            </div>
          </div>
          {/* Vision */}
          <div className="px-2 m-auto my-10">
            <div className="text-gray-700 font-black text-3xl tracking-wide py-2 text-center uppercase">
              Our Vision
            </div>
            <div className="pt-5 max-w-xl m-auto md:text-center">
              To become the Silicon Valley of Africa, satisfying needs by making
              high-quality, affordable digital products and services available
              at all times.
            </div>
          </div>
          {/* Impact */}
          <div className=" bg-red-00 md:flex pt-10 m-auto">
            <div className="px-2 m-auto">
              <div className="text-gray-700 font-black text-3xl tracking-wide py-2 text-center uppercase">
                Our Impact
              </div>
              <div className="pt-5 max-w-xl m-auto">
                We bring digital solutions closer to people who are in need of
                them, hence assisting them to go about their digital activities
                more effectively and efficiently.
              </div>
            </div>
            <div className="circlelg w-72 h-72 md:w-80 md:h-80 md:w-96 md:h-96 rounded-full my-5 m-auto pt-5 pl-5">
              {/* outer circle */}
              <div className="circlesm w-full h-full rounded-full">
                {/* inner circle */}
                <div className="about-1b w-full h-full rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default AboutUs;
