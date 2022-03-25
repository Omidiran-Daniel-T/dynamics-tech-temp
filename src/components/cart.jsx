import React from "react";
import CartItem from "./cartitem";
import { withRouter } from "react-router-dom";

class Cart extends React.Component {
  getSummary() {
    let sum = 0;
    this.props.cart_products.forEach((product) => {
      sum += product.price;
    });
    return sum;
  }
  render() {
    console.log("cart-", this.props.cart);
    console.log("cart products", this.props.cart_products);
    let discount = 0;
    return (
      <div>
        <div className="sm:flex my-5 sm:py-2 sm:px-5 bg-green-00 sm:justify-between">
          <div className="bg-red-00 flex justify-between px-5 items-center sm:w-80">
            <span className="text-2xl font-bold">My Cart</span>
            <span className="text-sm font-semibold text-blue-700">3 items</span>
          </div>
          <div
            className="text-yellow-500 border border-yellow-500 text-xs font-semibold py-2 w-56 m-auto sm:m-0 text-center rounded-md mt-5 flex justify-evenly cursor-pointer"
            onClick={() => {
              this.props.history.push("/products");
            }}
          >
            <span>{this.returnIcon()}</span>
            CONTINUE SHOPPING
          </div>
        </div>
        {/* table-head */}
        <div className="text-gray-500 text-xs font-semibold hidden md:grid grid-cols-6 bg-red-00 ml-16 mr-20 py-2">
          <div className="uppercase col-span-3 text-center">product</div>
          <div className="uppercase text-center">price</div>
          <div className="uppercase text-center">quantity</div>
          <div className="uppercase text-center">total</div>
        </div>
        {/* products */}
        <div>
          {this.props.cart.map((p) => (
            <CartItem
              data={p}
              quantity={
                this.props.cart_products.filter((pd) => pd.id === p.id).length
              }
              key={p.id}
            />
          ))}
        </div>
        {/* summary */}
        <div className=" bg-red-0 md:px-10 px-5">
          <div className="flex justify-between text-sm font-bold bg-blue-0 py-2 w-full px-5 m-auto md:grid md:grid-cols-6 md:px-10 max-w-md md:max-w-full">
            <div className="md:col-span-4 hidden md:block"></div>
            <div className="bg-red-00 md:pl-10">Summary:</div>
            <div className="bg-red-00 md:pl-12">{"$" + this.getSummary()}</div>
          </div>
        </div>
        {/* discount */}
        <div className=" bg-red-00 md:px-10 px-5">
          <div className="flex justify-between text-sm font-extrabold text-red-500 bg-blue-00 py-2 w-full px-5 m-auto md:grid md:grid-cols-6 md:px-10 max-w-md md:max-w-full">
            <div className="md:col-span-4 hidden md:block"></div>
            <div className="bg-red-00 md:pl-10">Discount:</div>
            <div className="bg-red-00 md:pl-12">{"$" + discount}</div>
          </div>
        </div>
        {/* total */}
        <div className=" bg-red-00 md:px-10 px-5">
          <div className="flex justify-between font-black bg-blue-00 border-t border-b border-gray-300 py-2 w-full px-5 m-auto md:grid md:grid-cols-6 md:px-10 max-w-md md:max-w-full">
            <div className="md:col-span-4 hidden md:block"></div>
            <div className="bg-red-00 md:pl-10">Total:</div>
            <div className="bg-red-00 md:pl-12 text-sm">
              {"$" + (this.getSummary() - discount)}
            </div>
          </div>
        </div>
        {/* check out */}
        <div className="bg-red-00 px-5 text-center py-2 my-20">
          <button className="bg-yellow-500 text-white text-xs py-2 px-12 text-center rounded-md uppercase">
            check out
          </button>
        </div>
      </div>
    );
  }
  returnIcon() {
    return (
      <svg
        width="19"
        height="13"
        viewBox="0 0 19 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.3 6.25131L18.25 6.25131"
          stroke="#FFB100"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.2998 1.25031L1.3628 6.25131L9.2998 11.2523L9.2998 1.25031Z"
          stroke="#FFB100"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
}

export default withRouter(Cart);
