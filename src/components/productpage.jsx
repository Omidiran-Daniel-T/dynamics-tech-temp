import React from "react";
import Footer from "./footer";
import { SearchIcon, Stars } from "./icons";
import NavBar from "./navbar";
import ImageScroller from "react-image-scroller";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ProductPage extends React.Component {
  componentDidMount() {
    this.props.hideNav();
  }
  render() {
    console.log("product", this.props.data);

    if (!this.props.data) {
      this.props.history.replace("/products");
    }
    const url = this.props.data.displayimage[0].url
      ? this.props.data.displayimage[0].url
      : null;
    return (
      <div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        {this.props.data ? (
          <>
            <NavBar
              color="black"
              active="none"
              navHidden={this.props.navHidden}
              hideNav={this.props.hideNav}
              switchNavState={this.props.switchNavState}
              loggedIn={this.props.loggedIn}
            />
            {/* Search */}
            <div className="bg-red-00 pt-36 pb-20 px-2 md:flex items-center justify-center">
              <div className="bg-white border-2 border-gray-400 flex h-12 items-center rounded-md max-w-xl md:w-2/3 md:ml-10">
                <div className="mx-5 md:mx-10">
                  <SearchIcon
                    height={25}
                    width={25}
                    color="rgba(68, 68, 68, 0.7)"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Search products, brands and categories"
                  className="text-xs h-8 w-full focus:outline-none"
                />
              </div>
              <button className="text-sm block text-white h-10 w-28 bg-yellow-500 rounded-md mt-2 md:mt-0 tracking-wide md:mx-4 py-1">
                SEARCH
              </button>
            </div>
            <div className="px-2 mb-10">
              {/* items-card */}
              <div className="rounded-lg shadow-lg m-auto py-5 max-w-6xl md:flex md:px-5">
                {/* top/left */}
                <div className="md:max-w-1/3 bg-red-00  md:w-2/5">
                  <div className="px-2 py-2 flex justify-center">
                    <img src={url} alt="pdt-img" className="h-64" />
                  </div>
                  <div className=" w-4/5 h-12 m-auto snap-x scroll-auto bg-blue-00 flex justify-center">
                    {/* slider */}
                    <ImageScroller>
                      {this.props.data.displayimage.map((i) => (
                        <div className="mx-2">
                          <img
                            src={i.url}
                            alt={i.id}
                            className="h-12 p-1 rounded-lg"
                          />
                        </div>
                      ))}
                    </ImageScroller>
                  </div>
                </div>
                {/* bottom/right */}
                <div className="px-2 md:w-2/3">
                  <div className="flex justify-between py-3 border-b">
                    {/* phonename and rating */}
                    <div className="">
                      <div className="text-lg ml-1">{this.props.data.name}</div>
                      <div className="flex my-1">
                        <div className="flex">
                          <Stars level={this.props.data.rating} />
                        </div>
                        <span className="text-blue-500 text-sm">
                          {/* (150 ratings) */}
                        </span>
                      </div>
                    </div>
                    <div className="text-yellow-500">
                      {/* love icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="30px"
                        viewBox="0 0 24 24"
                        width="30px"
                        className="fill-current"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                      </svg>
                    </div>
                  </div>
                  <div className="py-3 px-2 border-b">
                    {/* price tags */}
                    <span className="font-semibold text-lg text-gray-700">
                      {"$" + this.props.data.price}
                    </span>
                    <div className="flex">
                      <div className="text-gray-500 line-through text-md">
                        {"$" + this.props.data.discount
                          ? this.props.data.discount
                          : "-"}
                      </div>
                      <div className="bg-red-100 px-2 mx-2 rounded-sm text-sm font-semibold text-red-400 tracking-wide flex items-center">
                        {"$" + this.props.data.discount
                          ? this.props.data.discount
                          : "-"}
                      </div>
                    </div>
                  </div>
                  <div className="py-3 px-2">
                    {/* available colors */}
                    <div className="text-blue-500 text-lg tracking-wide">
                      AVAILABLE COLORS
                    </div>
                    <div className="flex my-2">
                      <div className="mr-2">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 53 53"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="26.5" cy="26.5" r="26.5" fill="#444444" />
                        </svg>
                      </div>
                      <div className="mx-2">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 53 53"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="26.5" cy="26.5" r="26.5" fill="#2947B3" />
                        </svg>
                      </div>
                      <div className="mx-2">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 53 53"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="26.5" cy="26.5" r="26.5" fill="#1CA8E4" />
                        </svg>
                      </div>
                      <div className="mx-2">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 53 53"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="26.5" cy="26.5" r="26.5" fill="#FFB8B8" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="my-4">
                    {/* btns */}{" "}
                    <button
                      className="bg-yellow-500 text-white rounded-md w-full text-xs tracking-wide py-2 hover:bg-yellow-600"
                      onClick={() => {
                        if (!this.props.loggedIn) {
                          // toast.error("Please Login");
                          this.props.history.replace("/sign-in");
                        } else {
                          this.props.addToCart(this.props.data);
                          toast.success("Item Added To Cart!", {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                          });
                        }
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-red-00 px-2 md:flex max-w-6xl m-auto md:px-0">
              {/* delivery */}
              <div className="px-2 md:px-10 py-4 shadow-lg rounded-lg md:w-1/2  md:px-5 md:mx-2 h-96">
                <div className="py-5 text-lg border-b border-gray-300">
                  DELIVERY
                </div>
                <div className="my-5">Choose your location</div>
                <div className="flex items-center justify-between my-5 px-2 py-2 w-full max-w-xs bg-white rounded-md shadow-lg">
                  <div className="flex items-center">
                    <div>
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.5 8.31776C0.5 3.71789 4.34388 0 8.99345 0C13.6561 0 17.5 3.71789 17.5 8.31776C17.5 10.6357 16.657 12.7876 15.2695 14.6116C13.7388 16.6235 11.8522 18.3765 9.72854 19.7524C9.24251 20.0704 8.80387 20.0944 8.27045 19.7524C6.13474 18.3765 4.24809 16.6235 2.7305 14.6116C1.34198 12.7876 0.5 10.6357 0.5 8.31776ZM6.19423 8.57675C6.19423 10.1177 7.45166 11.3297 8.99345 11.3297C10.5362 11.3297 11.8058 10.1177 11.8058 8.57675C11.8058 7.0478 10.5362 5.77683 8.99345 5.77683C7.45166 5.77683 6.19423 7.0478 6.19423 8.57675Z"
                          fill="#2947B3"
                        />
                      </svg>
                    </div>
                    <div className="px-2">Ekiti State</div>
                  </div>
                  <div>
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.869 9.63078C4.811 9.57428 4.563 9.36094 4.359 9.1622C3.076 7.99708 0.976 4.95762 0.335 3.36678C0.232 3.12518 0.014 2.51437 0 2.18802C0 1.8753 0.072 1.5772 0.218 1.29274C0.422 0.938139 0.743 0.653678 1.122 0.497808C1.385 0.397467 2.172 0.241598 2.186 0.241598C3.047 0.0857282 4.446 0 5.992 0C7.465 0 8.807 0.0857282 9.681 0.213346C9.695 0.227959 10.673 0.383829 11.008 0.554311C11.62 0.867024 12 1.47784 12 2.13151V2.18802C11.985 2.61374 11.605 3.50901 11.591 3.50901C10.949 5.01413 8.952 7.98344 7.625 9.17681C7.625 9.17681 7.284 9.51291 7.071 9.65904C6.765 9.88699 6.386 10 6.007 10C5.584 10 5.19 9.87238 4.869 9.63078Z"
                        fill="#444444"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-between my-5 px-2 py-2 w-full max-w-xs bg-white rounded-md shadow-lg">
                  <div className="flex items-center">
                    <div>
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.5 8.31776C0.5 3.71789 4.34388 0 8.99345 0C13.6561 0 17.5 3.71789 17.5 8.31776C17.5 10.6357 16.657 12.7876 15.2695 14.6116C13.7388 16.6235 11.8522 18.3765 9.72854 19.7524C9.24251 20.0704 8.80387 20.0944 8.27045 19.7524C6.13474 18.3765 4.24809 16.6235 2.7305 14.6116C1.34198 12.7876 0.5 10.6357 0.5 8.31776ZM6.19423 8.57675C6.19423 10.1177 7.45166 11.3297 8.99345 11.3297C10.5362 11.3297 11.8058 10.1177 11.8058 8.57675C11.8058 7.0478 10.5362 5.77683 8.99345 5.77683C7.45166 5.77683 6.19423 7.0478 6.19423 8.57675Z"
                          fill="#2947B3"
                        />
                      </svg>
                    </div>
                    <div className="px-2">Iwokoro</div>
                  </div>
                  <div>
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.869 9.63078C4.811 9.57428 4.563 9.36094 4.359 9.1622C3.076 7.99708 0.976 4.95762 0.335 3.36678C0.232 3.12518 0.014 2.51437 0 2.18802C0 1.8753 0.072 1.5772 0.218 1.29274C0.422 0.938139 0.743 0.653678 1.122 0.497808C1.385 0.397467 2.172 0.241598 2.186 0.241598C3.047 0.0857282 4.446 0 5.992 0C7.465 0 8.807 0.0857282 9.681 0.213346C9.695 0.227959 10.673 0.383829 11.008 0.554311C11.62 0.867024 12 1.47784 12 2.13151V2.18802C11.985 2.61374 11.605 3.50901 11.591 3.50901C10.949 5.01413 8.952 7.98344 7.625 9.17681C7.625 9.17681 7.284 9.51291 7.071 9.65904C6.765 9.88699 6.386 10 6.007 10C5.584 10 5.19 9.87238 4.869 9.63078Z"
                        fill="#444444"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {/* product details */}
              <div className="px-2 md:px-10 py-4 shadow-lg rounded-lg md:w-1/2 pb-20 md:px-5 md:mx-2">
                <div className="py-5 border-b  border-gray-400">
                  PRODUCT DETAILS
                </div>
                {/* product details card */}
                <div className="my-4 max-w-xs text-sm text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  erat sed vitae sed iaculis sed quam morbi faucibus.
                </div>
                {/* product details card */}
                <div className="my-4 max-w-xs text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  erat sed vitae sed iaculis sed quam morbi faucibus.
                </div>
              </div>
            </div>
            {/* Specification */}
            <div className="px-2 my-5">
              <div className="px-2 md:px-10 pb-10 rounded-md shadow-lg max-w-6xl m-auto">
                <div className="text-lg text-gray-700 py-5 border-b border-gray-400">
                  SPECIFICATIONS
                </div>
                <div>
                  {/* spec card */}
                  <div className="text-sm text-gray-500 my-5 max-w-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis erat sed vitae sed iaculis sed quam morbi faucibus.
                  </div>
                  <div className="text-sm text-gray-500 my-5 max-w-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis erat sed vitae sed iaculis sed quam morbi faucibus.
                  </div>
                  <div className="text-sm text-gray-500 my-5 max-w-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis erat sed vitae sed iaculis sed quam morbi faucibus.
                  </div>
                </div>
              </div>
            </div>
            {/* Reviews/Feedback */}
            <div className="px-2">
              <div className="px-2 md:px-10 py-5 rounded-md shadow-lg bg-white max-w-6xl m-auto">
                <div className="flex justify-between text-gray-700 border-b border-gray-400 pb-5">
                  <div className="text-lg">REVIEWS / FEEDBACK</div>
                  <div className="bluecol1">SEE ALL</div>
                </div>
                {/* note:to extract card */}
                {/* reviews/feedback-card */}
                <div className="bg-red-00 pb-5 border-b border-gray-400">
                  <div className="flex my-4">
                    <Stars level={4} />
                  </div>
                  <div className="text-gray-700 my-2">PERFECT BATTERY LIFE</div>
                  <div className="text-gray-600 my-2">
                    Never seem to go off. I am glad I got one of this for myself
                  </div>
                  <div className="text-gray-700 my-3 flex justify-between">
                    <div>by John Doe</div>
                    <div>21st of October, 2021</div>
                  </div>
                </div>
                {/* reviews/feedback-card */}
                <div className="bg-red-00 pb-5 border-b border-gray-400">
                  <div className="flex my-4">
                    <Stars level={4} />
                  </div>
                  <div className="text-gray-700 my-2">PERFECT BATTERY LIFE</div>
                  <div className="text-gray-600 my-2">
                    Never seem to go off. I am glad I got one of this for myself
                  </div>
                  <div className="text-gray-700 my-3 flex justify-between">
                    <div>by John Doe</div>
                    <div>21st of October, 2021</div>
                  </div>
                </div>
                {/* reviews/feedback-card */}
                <div className="bg-red-00 pb-5 border-b border-gray-400">
                  <div className="flex my-4">
                    <Stars level={4} />
                  </div>
                  <div className="text-gray-700 my-2">PERFECT BATTERY LIFE</div>
                  <div className="text-gray-600 my-2">
                    Never seem to go off. I am glad I got one of this for myself
                  </div>
                  <div className="text-gray-700 my-3 flex justify-between">
                    <div>by John Doe</div>
                    <div>21st of October, 2021</div>
                  </div>
                </div>
                {/* reviews/feedback-card */}
                <div className="bg-red-00 pb-5 border-b border-gray-400">
                  <div className="flex my-4">
                    <Stars level={4} />
                  </div>
                  <div className="text-gray-700 my-2">PERFECT BATTERY LIFE</div>
                  <div className="text-gray-600 my-2">
                    Never seem to go off. I am glad I got one of this for myself
                  </div>
                  <div className="text-gray-700 my-3 flex justify-between">
                    <div>by John Doe</div>
                    <div>21st of October, 2021</div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </>
        ) : (
          <>Data Unavailale</>
        )}
      </div>
    );
  }
}

export default ProductPage;
