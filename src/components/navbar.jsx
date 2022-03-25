import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo222 1.png";
class NavBar extends React.Component {
  state = { navScrolledColor: null };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = (event) => {
    // console.log("scrolled");
    const navScrolledColor = "black";
    this.setState({ navScrolledColor });
  };
  render() {
    // console.log("loggedIn - ", this.props.loggedIn);
    const home_A =
      this.props.active === "home"
        ? " text-yellow-500"
        : " text-" + (this.state.navScrolledColor || this.props.color);
    const services_A =
      this.props.active === "services"
        ? " text-yellow-500"
        : " text-" + (this.state.navScrolledColor || this.props.color);
    const products_A =
      this.props.active === "products"
        ? " text-yellow-500"
        : " text-" + (this.state.navScrolledColor || this.props.color);
    const about_A =
      this.props.active === "about-us"
        ? " text-yellow-500"
        : " text-" + (this.state.navScrolledColor || this.props.color);
    const signIn_A =
      this.props.active === "sign-in"
        ? " text-yellow-500"
        : " text-" + (this.state.navScrolledColor || this.props.color);

    return (
      <>
        <div
          id="nav"
          className={
            "fixed z-40 w-screen flex justify-between py-5 px-5 md:px-10 bg-gray-200 mb:bg-gray-00 bg-opacity-5 md:bg-opacity-0 items-center text-" +
            this.props.color
          }
        >
          <div>
            <Link to="/">
              <img src={Logo} alt="app-logo" className="w-20" />
            </Link>
          </div>
          {/* nav-list */}
          <div className="hidden md:inline text-lg">
            <div className={"px-5 cursor-pointer inline-block " + home_A}>
              <Link to="/">Home</Link>
              {this.props.active === "home" ? (
                <div className="h-1 w-8 rounded-lg bg-yellow-500"></div>
              ) : (
                <div></div>
              )}
            </div>
            <div className={"px-5  cursor-pointer inline-block " + services_A}>
              <span>
                <Link to="/our-services">Services</Link>
              </span>
              <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                // fill={this.props.color}
                xmlns="http://www.w3.org/2000/svg"
                className="inline mx-2 fill-current"
              >
                <path
                  d="M4.869 9.63078C4.811 9.57428 4.563 9.36094 4.359 9.1622C3.076 7.99708 0.976 4.95762 0.335 3.36678C0.232 3.12518 0.014 2.51437 0 2.18802C0 1.8753 0.072 1.5772 0.218 1.29274C0.422 0.938139 0.743 0.653678 1.122 0.497808C1.385 0.397467 2.172 0.241598 2.186 0.241598C3.047 0.0857282 4.446 0 5.992 0C7.465 0 8.807 0.0857282 9.681 0.213346C9.695 0.227959 10.673 0.383829 11.008 0.554311C11.62 0.867024 12 1.47784 12 2.13151V2.18802C11.985 2.61374 11.605 3.50901 11.591 3.50901C10.949 5.01413 8.952 7.98344 7.625 9.17681C7.625 9.17681 7.284 9.51291 7.071 9.65904C6.765 9.88699 6.386 10 6.007 10C5.584 10 5.19 9.87238 4.869 9.63078Z"
                  // fill={"this.props.color"}
                />
              </svg>
              {this.props.active === "services" ? (
                <div className="h-1 w-8 rounded-lg bg-yellow-500"></div>
              ) : (
                <div></div>
              )}
            </div>
            <div className={"px-5 cursor-pointer inline-block " + products_A}>
              <Link to="/products">Products</Link>
              {this.props.active === "products" ? (
                <div className="h-1 w-8 rounded-lg bg-yellow-500"></div>
              ) : (
                <div></div>
              )}
            </div>
            <div className={"px-5 cursor-pointer inline-block " + about_A}>
              <Link to="/about-us">About Us</Link>
              {this.props.active === "about-us" ? (
                <div className="h-1 w-8 rounded-lg bg-yellow-500"></div>
              ) : (
                <div></div>
              )}
            </div>

            <div
              className={
                "px-5  cursor-pointer inline-block border-l-2 bg-red-00 " +
                signIn_A
              }
            >
              {this.props.loggedIn ? (
                <div className="flex w-20 h-7 items-center justify-between px-2">
                  <Link to="/cart">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      fill={this.props.color}
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.1213 9.23312H14.8891C15.3088 9.23312 15.6386 8.88615 15.6386 8.46774C15.6386 8.03912 15.3088 7.70236 14.8891 7.70236H12.1213C11.7016 7.70236 11.3719 8.03912 11.3719 8.46774C11.3719 8.88615 11.7016 9.23312 12.1213 9.23312ZM18.1766 3.92749C18.7861 3.92749 19.1858 4.1418 19.5855 4.61123C19.9852 5.08067 20.0551 5.7542 19.9652 6.36549L19.0159 13.06C18.8361 14.3469 17.7569 15.2949 16.4879 15.2949H5.58639C4.25742 15.2949 3.15828 14.255 3.04837 12.908L2.12908 1.7834L0.620259 1.51807C0.22057 1.44664 -0.0592117 1.04864 0.0107338 0.640433C0.0806793 0.223045 0.470376 -0.0535127 0.880056 0.0087383L3.2632 0.375101C3.60293 0.437352 3.85274 0.722074 3.88272 1.06905L4.07257 3.35499C4.10254 3.68257 4.36234 3.92749 4.68209 3.92749H18.1766ZM5.42631 16.9079C4.58697 16.9079 3.9075 17.6018 3.9075 18.459C3.9075 19.3061 4.58697 20 5.42631 20C6.25567 20 6.93514 19.3061 6.93514 18.459C6.93514 17.6018 6.25567 16.9079 5.42631 16.9079ZM16.6676 16.9079C15.8282 16.9079 15.1487 17.6018 15.1487 18.459C15.1487 19.3061 15.8282 20 16.6676 20C17.4969 20 18.1764 19.3061 18.1764 18.459C18.1764 17.6018 17.4969 16.9079 16.6676 16.9079Z"
                        // fill={this.props.color}
                      />
                    </svg>
                  </Link>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 20"
                    fill={this.props.color}
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.294 5.29105C13.294 8.22808 10.9391 10.5831 8 10.5831C5.0619 10.5831 2.70601 8.22808 2.70601 5.29105C2.70601 2.35402 5.0619 0 8 0C10.9391 0 13.294 2.35402 13.294 5.29105ZM8 20C3.66237 20 0 19.295 0 16.575C0 13.8539 3.68538 13.1739 8 13.1739C12.3386 13.1739 16 13.8789 16 16.599C16 19.32 12.3146 20 8 20Z"
                      // fill={this.props.color}
                    />
                  </svg>
                </div>
              ) : (
                <div className="">
                  <span>
                    <Link to="/sign-in">Sign in</Link>
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill={this.props.color}
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline  fill-current"
                  >
                    <g id="Iconly">
                      <g id="Login">
                        <path
                          id="Login_2"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.8861 2H16.9254C19.445 2 21.5 4 21.5 6.44V17.56C21.5 20.01 19.445 22 16.9047 22H11.8758C9.35611 22 7.29083 20.01 7.29083 17.57V12.77H13.6932L12.041 14.37C11.7312 14.67 11.7312 15.16 12.041 15.46C12.1959 15.61 12.4024 15.68 12.6089 15.68C12.8051 15.68 13.0117 15.61 13.1666 15.46L16.1819 12.55C16.3368 12.41 16.4194 12.21 16.4194 12C16.4194 11.8 16.3368 11.6 16.1819 11.46L13.1666 8.55C12.8568 8.25 12.3508 8.25 12.041 8.55C11.7312 8.85 11.7312 9.34 12.041 9.64L13.6932 11.23H7.29083V6.45C7.29083 4 9.35611 2 11.8861 2ZM2.5 11.9999C2.5 11.5799 2.85523 11.2299 3.2815 11.2299H7.29052V12.7699H3.2815C2.85523 12.7699 2.5 12.4299 2.5 11.9999Z"
                        />
                      </g>
                    </g>
                  </svg>
                  {this.props.active === "sign-in" ? (
                    <div className="h-1 w-8 rounded-lg bg-yellow-500"></div>
                  ) : (
                    <div></div>
                  )}
                </div>
              )}
            </div>
          </div>
          {/* Ham */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="70px"
            viewBox="0 0 24 24"
            width="60px"
            fill={this.props.color}
            className="md:hidden bg-gray-700 bg-opacity-10 rounded-lg px-2  cursor-pointer"
            onClick={() => this.props.switchNavState()}
          >
            {this.props.navHidden ? (
              <path d="M0 0h24v24H0z" fill="none" />
            ) : (
              <path d="M0 0h24v24H0V0z" fill="none" />
            )}
            {this.props.navHidden ? (
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            ) : (
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            )}
          </svg>
        </div>
        {/* hidden nav */}
        {this.props.navHidden ? null : (
          <div className="md:hidden fixed z-30 bg-gray-800 bg-opacity-40 mt-28 text-white text-xl flex flex-col w-full h-96 justify-evenly items-center">
            <div className={"px-5 cursor-pointer inline-block " + home_A}>
              <Link to="/">Home</Link>
              {this.props.active === "home" ? (
                <div className="h-1 w-8 rounded-lg bg-yellow-500"></div>
              ) : (
                <div></div>
              )}
            </div>
            <div className={"px-5  cursor-pointer inline-block " + services_A}>
              <span>
                <Link to="/our-services">Services</Link>
              </span>
              <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                // fill={this.props.color}
                xmlns="http://www.w3.org/2000/svg"
                className="inline mx-2 fill-current"
              >
                <path
                  d="M4.869 9.63078C4.811 9.57428 4.563 9.36094 4.359 9.1622C3.076 7.99708 0.976 4.95762 0.335 3.36678C0.232 3.12518 0.014 2.51437 0 2.18802C0 1.8753 0.072 1.5772 0.218 1.29274C0.422 0.938139 0.743 0.653678 1.122 0.497808C1.385 0.397467 2.172 0.241598 2.186 0.241598C3.047 0.0857282 4.446 0 5.992 0C7.465 0 8.807 0.0857282 9.681 0.213346C9.695 0.227959 10.673 0.383829 11.008 0.554311C11.62 0.867024 12 1.47784 12 2.13151V2.18802C11.985 2.61374 11.605 3.50901 11.591 3.50901C10.949 5.01413 8.952 7.98344 7.625 9.17681C7.625 9.17681 7.284 9.51291 7.071 9.65904C6.765 9.88699 6.386 10 6.007 10C5.584 10 5.19 9.87238 4.869 9.63078Z"
                  // fill={"this.props.color"}
                />
              </svg>
              {this.props.active === "services" ? (
                <div className="h-1 w-8 rounded-lg bg-yellow-500"></div>
              ) : (
                <div></div>
              )}
            </div>
            <div className={"px-5 cursor-pointer inline-block " + products_A}>
              <Link to="/products">Products</Link>
              {this.props.active === "products" ? (
                <div className="h-1 w-8 rounded-lg bg-yellow-500"></div>
              ) : (
                <div></div>
              )}
            </div>
            <div className={"px-5 cursor-pointer inline-block " + about_A}>
              <Link to="/about-us">About Us</Link>
              {this.props.active === "about-us" ? (
                <div className="h-1 w-8 rounded-lg bg-yellow-500"></div>
              ) : (
                <div></div>
              )}
            </div>
            <div className={"px-5  cursor-pointer inline-block " + signIn_A}>
              {this.props.loggedIn ? (
                <div>
                  <div className="bg-red-00 py-4">
                    <Link to="/cart">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill={this.props.color}
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.1213 9.23312H14.8891C15.3088 9.23312 15.6386 8.88615 15.6386 8.46774C15.6386 8.03912 15.3088 7.70236 14.8891 7.70236H12.1213C11.7016 7.70236 11.3719 8.03912 11.3719 8.46774C11.3719 8.88615 11.7016 9.23312 12.1213 9.23312ZM18.1766 3.92749C18.7861 3.92749 19.1858 4.1418 19.5855 4.61123C19.9852 5.08067 20.0551 5.7542 19.9652 6.36549L19.0159 13.06C18.8361 14.3469 17.7569 15.2949 16.4879 15.2949H5.58639C4.25742 15.2949 3.15828 14.255 3.04837 12.908L2.12908 1.7834L0.620259 1.51807C0.22057 1.44664 -0.0592117 1.04864 0.0107338 0.640433C0.0806793 0.223045 0.470376 -0.0535127 0.880056 0.0087383L3.2632 0.375101C3.60293 0.437352 3.85274 0.722074 3.88272 1.06905L4.07257 3.35499C4.10254 3.68257 4.36234 3.92749 4.68209 3.92749H18.1766ZM5.42631 16.9079C4.58697 16.9079 3.9075 17.6018 3.9075 18.459C3.9075 19.3061 4.58697 20 5.42631 20C6.25567 20 6.93514 19.3061 6.93514 18.459C6.93514 17.6018 6.25567 16.9079 5.42631 16.9079ZM16.6676 16.9079C15.8282 16.9079 15.1487 17.6018 15.1487 18.459C15.1487 19.3061 15.8282 20 16.6676 20C17.4969 20 18.1764 19.3061 18.1764 18.459C18.1764 17.6018 17.4969 16.9079 16.6676 16.9079Z"
                          fill={this.props.color}
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className="bg-red-00 py-4">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 16 20"
                      fill={this.props.color}
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.294 5.29105C13.294 8.22808 10.9391 10.5831 8 10.5831C5.0619 10.5831 2.70601 8.22808 2.70601 5.29105C2.70601 2.35402 5.0619 0 8 0C10.9391 0 13.294 2.35402 13.294 5.29105ZM8 20C3.66237 20 0 19.295 0 16.575C0 13.8539 3.68538 13.1739 8 13.1739C12.3386 13.1739 16 13.8789 16 16.599C16 19.32 12.3146 20 8 20Z"
                        fill={this.props.color}
                      />
                    </svg>
                  </div>
                </div>
              ) : (
                <div>
                  <span>
                    <Link to="/sign-in">Sign in</Link>
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill={this.props.color}
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline fill-current"
                  >
                    <g id="Iconly">
                      <g id="Login">
                        <path
                          id="Login_2"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.8861 2H16.9254C19.445 2 21.5 4 21.5 6.44V17.56C21.5 20.01 19.445 22 16.9047 22H11.8758C9.35611 22 7.29083 20.01 7.29083 17.57V12.77H13.6932L12.041 14.37C11.7312 14.67 11.7312 15.16 12.041 15.46C12.1959 15.61 12.4024 15.68 12.6089 15.68C12.8051 15.68 13.0117 15.61 13.1666 15.46L16.1819 12.55C16.3368 12.41 16.4194 12.21 16.4194 12C16.4194 11.8 16.3368 11.6 16.1819 11.46L13.1666 8.55C12.8568 8.25 12.3508 8.25 12.041 8.55C11.7312 8.85 11.7312 9.34 12.041 9.64L13.6932 11.23H7.29083V6.45C7.29083 4 9.35611 2 11.8861 2ZM2.5 11.9999C2.5 11.5799 2.85523 11.2299 3.2815 11.2299H7.29052V12.7699H3.2815C2.85523 12.7699 2.5 12.4299 2.5 11.9999Z"
                        />
                      </g>
                    </g>
                  </svg>
                  {this.props.active === "sign-in" ? (
                    <div className="h-1 w-8 rounded-lg bg-yellow-500"></div>
                  ) : (
                    <div></div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default NavBar;
