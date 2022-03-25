import React from "react";
import NavBar from "./navbar";
import { SearchIcon } from "./icons";
import { Slide } from "react-slideshow-image";
import Footer from "./footer";
import ImageScroller from "react-image-scroller/lib/ImageScroller";
import phone_src1 from "../images/product.png";
import phone_src2 from "../images/product2.png";
import ProductsCard from "./productscard";
import axios from "../api/axios";

class Products extends React.Component {
  state = {
    deals: [
      {
        product_id: 1,
        phone_src: phone_src1,
        percentOff: 30,
        product_name: "Apple Mac Book Air 2019",
        new_price: 1999,
        old_price: 2999,
        star_level: 4,
        product_brand: "Apple",
      },
      {
        product_id: 2,
        phone_src: phone_src2,
        percentOff: 20,
        product_name: "IPHONE 12 Pro Max",
        new_price: 1099,
        old_price: 2099,
        star_level: 3,
        product_brand: "Apple",
      },
      {
        product_id: 3,
        phone_src: phone_src1,
        percentOff: 30,
        product_name: "Apple Mac Book Air 201 9",
        new_price: 1999,
        old_price: 2999,
        star_level: 4,
        product_brand: "Apple",
      },
      {
        product_id: 4,
        phone_src: phone_src2,
        percentOff: 20,
        product_name: "IPHONE 12 MINI",
        new_price: 1099,
        old_price: 2099,
        star_level: 3,
        product_brand: "Apple",
      },
      {
        product_id: 5,
        phone_src: phone_src1,
        percentOff: 30,
        product_name: "Samsung Galaxy S10+",
        new_price: 1999,
        old_price: 2999,
        star_level: 4,
        product_brand: "Apple",
      },
      {
        product_id: 6,
        phone_src: phone_src2,
        percentOff: 20,
        product_name: "IPHONE 11 Pro Max",
        new_price: 1099,
        old_price: 2099,
        star_level: 3,
        product_brand: "Apple",
      },
    ],
    daily_deals: [],
  };
  componentDidMount() {
    this.props.hideNav();
  }

  getProducts = async () => {
    const PRODUCTS_URL = "/api/products";
    try {
      const response = await axios.get(PRODUCTS_URL, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      });
      if (response.data.data)
        if (this.state.daily_deals.length === 0)
          this.setState({ daily_deals: response.data.data });
      // console.log("logged-", response?.data?.data);
      // console.log("src-", response?.data?.data[0].displayimage[0].url);
    } catch (error) {
      console.log(error);
    }
  };

  getUrl = (data) => {
    return data.displayimage[0].url;
  };
  render() {
    this.getProducts();
    return (
      <div>
        {" "}
        <NavBar
          color="black"
          active="products"
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
        <div className="bg-red-00 text-white md:px-5 m-auto md:flex md:justify-evenly">
          <div className="categories bg-white text-gray-500 font-semibold shadow-lg w-64 m-auto md:m-0 rounded-lg py-5 pl-10 pb-20">
            <div className="my-5 cursor-pointer text-blue-700">
              All Categories
            </div>
            <div className="my-5 cursor-pointer hover:text-blue-700">
              Laptops
            </div>
            <div className="my-5 cursor-pointer hover:text-blue-700">
              Phones
            </div>
            <div className="my-5 cursor-pointer hover:text-blue-700">
              Smart Devices
            </div>
            <div className="my-5 cursor-pointer hover:text-blue-700">
              Accessories
            </div>
          </div>

          {/*  */}
          <div className="bg-blue-00 py-5 md:py-0 my-5 md:my-0 flex flex-col justify-center md:w-2/3 relative">
            {/* Controls */}
            <div className="z-10 bg-red-00 flex justify-between px-5 absolute w-full">
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
              <div className="images bg-green-00 px-2 py-5 flex flex-col items-center products1 md:h-96 md:rounded-lg md:justify-between md:pt-10">
                <div className="text-4xl font-extrabold text-center max-w-xl">
                  MEET THE APPLE MAC BOOK PRO 2020
                </div>
                <div className="text-lg text-center my-5 max-w-lg">
                  Enjoy great speed, large memory space, optimized performance,
                  high graphic reolution and lots more in one PC
                </div>
                <button className="bg-yellow-500 text-lg tracking-wider rounded-lg py-4 w-60 my-5">
                  VIEW PRODUCT
                </button>
                <div className=" z-40 w-full flex justify-center items-end px-2 xs:px-3 sm:px-5 md:px-10 ">
                  <span className="flex">
                    <div className="h-3 w-3 rounded-full bg-gray-400 mx-1"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-400 mx-1"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-400 mx-1"></div>
                  </span>
                </div>
              </div>
            </Slide>
          </div>
          {/*  */}
        </div>
        {/* Deals of the day */}
        {this.state.daily_deals.length > 0 ? (
          <div className=" bg-red-00 ">
            <div>
              <div className="text-gray-700 text-2xl font-black tracking-wider text-center mt-16 uppercase">
                Deals Of The Day
              </div>
              <div className="h-1 w-20 bluebg1 m-auto my-1"></div>
            </div>
            <div className="flex justify-between px-2 my-10 max-w-4xl m-auto">
              <div className="bg-red-00 flex items-center px-2">
                <div className="h-8 w-8 rounded-full border border-gray-500 mr-2">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 8 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="p-2"
                  >
                    <path
                      d="M8.86275 15.8858L1.32275 11.3878V1.69379"
                      stroke="#444444"
                      strokeOpacity="0.6"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span>20 : 40 : 15 Left</span>
              </div>
              <div className="text-blue-700  cursor-pointer hover:underline">
                SEE ALL
              </div>
            </div>
            <div className="h-96 bg-reen-500">
              <ImageScroller>
                {this.state.daily_deals.map((p) => (
                  <ProductsCard
                    key={p.id}
                    phone_src={this.getUrl(p)}
                    percentOff={null}
                    product_name={p.name}
                    new_price={p.price}
                    old_price={null}
                    star_level={p.rating}
                    product_brand={p.brand}
                    handleProductOnClick={this.props.setSelectedProduct}
                    data={p}
                    history={this.props.history}
                  />
                ))}
              </ImageScroller>
            </div>
          </div>
        ) : (
          <></>
        )}
        {/* Top Selling */}
        <div className=" bg-red-00 ">
          <div>
            <div className="text-gray-700 text-2xl font-black tracking-wider text-center mt-16 uppercase">
              Top Seeling Items
            </div>
            <div className="h-1 w-20 bluebg1 m-auto my-1"></div>
          </div>
          <div className=" w-full text-right px-2 my-10 max-w-4xl m-auto">
            <div className="text-blue-700  cursor-pointer hover:underline">
              SEE ALL
            </div>
          </div>
          <div className="h-96 bg-reen-500">
            <ImageScroller>
              {this.state.daily_deals.map((p) => (
                <ProductsCard
                  key={p.id}
                  phone_src={this.getUrl(p)}
                  percentOff={null}
                  product_name={p.name}
                  new_price={p.price}
                  old_price={null}
                  star_level={p.rating}
                  product_brand={p.brand}
                  handleProductOnClick={this.props.setSelectedProduct}
                  data={p}
                  history={this.props.history}
                />
              ))}
            </ImageScroller>
          </div>
        </div>
        {/* New Arrivals */}
        <div className=" bg-red-00 ">
          <div>
            <div className="text-gray-700 text-2xl font-black tracking-wider text-center mt-16 uppercase">
              New Arrivals
            </div>
            <div className="h-1 w-20 bluebg1 m-auto my-1"></div>
          </div>
          <div className=" w-full text-right px-2 my-10 max-w-4xl m-auto">
            <div className="text-blue-700  cursor-pointer hover:underline">
              SEE ALL
            </div>
          </div>
          <div className="h-96 bg-reen-500">
            <ImageScroller>
              {this.state.daily_deals.map((p) => (
                <ProductsCard
                  key={p.id}
                  phone_src={this.getUrl(p)}
                  percentOff={null}
                  product_name={p.name}
                  new_price={p.price}
                  old_price={null}
                  star_level={p.rating}
                  product_brand={p.brand}
                  handleProductOnClick={this.props.setSelectedProduct}
                  data={p}
                  history={this.props.history}
                />
              ))}
            </ImageScroller>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Products;
