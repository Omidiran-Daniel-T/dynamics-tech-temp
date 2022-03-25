import "./App.css";
import React from "react";
import SignUp from "./components/signup";
import SignIn from "./components/signin";
import Services from "./components/servicespage";
import { Route, Switch } from "react-router-dom";
import ForgotPassword1 from "./components/resetPassword/forgotpassword1";
import ForgotPassword2 from "./components/resetPassword/forgotpassword2";
import ForgotPassword3 from "./components/resetPassword/forgotpassword3";
import HomePage from "./components/homepage";
import ProductPage from "./components/productpage";
import Products from "./components/products";
import AboutUs from "./components/aboutus";
import Cart from "./components/cart";
import ProjectDetails from "./components/projectdetails";
import Success from "./components/payment/SuccessUI";
import ProjectPricing from "./components/projectprcing";

class App extends React.Component {
  state = {
    navhidden: true,
    loggedIn: false,
    user: {
      email: "",
      password: "",
      accessToken: "",
    },
    selectedProduct: {},
    cart: [],
    cart_products: [],
  };
  contains = (cart, product) => {
    let contain = false;
    cart.forEach((c) => {
      // console.log(c.id, " - ", product.id);
      if (c.id === product.id) contain = true;
    });
    return contain;
  };
  addToCart = (product) => {
    let cart = this.state.cart;
    let cart_products = this.state.cart_products;
    if (this.contains(cart, product)) {
      cart_products.push(product);
      this.setState({ cart_products });
    } else {
      cart.push(product);
      this.setState({ cart });

      cart_products.push(product);
      this.setState({ cart_products });
    }
  };
  setSelectedProduct = (data) => {
    this.setState({ selectedProduct: data });
  };
  setUser = (user_db) => {
    this.setState({ user: user_db });
  };
  setLogginStatus = () => {
    this.setState({ loggedIn: true });
  };
  handleSwitchNavState = () => {
    let navhidden = this.state.navhidden ? false : true;
    this.setState({ navhidden });
  };
  handleHideNav = () => {
    this.setState({ navhidden: true });
  };
  render() {
    // console.log("cart at app", this.state.cart);
    return (
      <Switch>
        <Route path="/payment-success" render={() => <Success />} />
        <Route
          path="/cart"
          render={() => (
            <Cart
              cart={this.state.cart}
              cart_products={this.state.cart_products}
            />
          )}
        />
        <Route
          path="/product"
          render={(props) => (
            <ProductPage
              navHidden={this.state.navhidden}
              hideNav={this.handleHideNav}
              switchNavState={this.handleSwitchNavState}
              loggedIn={this.state.loggedIn}
              data={this.state.selectedProduct}
              addToCart={this.addToCart}
              {...props}
            />
          )}
        />

        <Route
          path="/products"
          render={(props) => (
            <Products
              navHidden={this.state.navhidden}
              hideNav={this.handleHideNav}
              switchNavState={this.handleSwitchNavState}
              loggedIn={this.state.loggedIn}
              user={this.state.user}
              setSelectedProduct={this.setSelectedProduct}
              {...props}
            />
          )}
        />

        <Route
          path="/about-us"
          render={(props) => (
            <AboutUs
              navHidden={this.state.navhidden}
              hideNav={this.handleHideNav}
              switchNavState={this.handleSwitchNavState}
              loggedIn={this.state.loggedIn}
              {...props}
            />
          )}
        />
        <Route
          path="/sign-in"
          render={(props) => (
            <SignIn
              navHidden={this.state.navhidden}
              hideNav={this.handleHideNav}
              switchNavState={this.handleSwitchNavState}
              setLogginStatus={this.setLogginStatus}
              loggedIn={this.state.loggedIn}
              setUserDets={this.setUser}
              {...props}
            />
          )}
        />
        <Route
          path="/sign-up"
          render={(props) => (
            <SignUp
              navHidden={this.state.navhidden}
              hideNav={this.handleHideNav}
              switchNavState={this.handleSwitchNavState}
              loggedIn={this.state.loggedIn}
              {...props}
            />
          )}
        />
        <Route
          path="/forgot-password-1"
          render={(props) => (
            <ForgotPassword1
              navHidden={this.state.navhidden}
              hideNav={this.handleHideNav}
              switchNavState={this.handleSwitchNavState}
              loggedIn={this.state.loggedIn}
              {...props}
            />
          )}
        />
        <Route
          path="/forgot-password-2"
          render={(props) => (
            <ForgotPassword2
              navHidden={this.state.navhidden}
              hideNav={this.handleHideNav}
              switchNavState={this.handleSwitchNavState}
              loggedIn={this.state.loggedIn}
              {...props}
            />
          )}
        />
        <Route
          path="/forgot-password-3"
          render={(props) => (
            <ForgotPassword3
              navHidden={this.state.navhidden}
              hideNav={this.handleHideNav}
              switchNavState={this.handleSwitchNavState}
              loggedIn={this.state.loggedIn}
              {...props}
            />
          )}
        />
        <Route
          path="/project-pricing"
          render={(props) => (
            <ProjectPricing
              navHidden={this.state.navhidden}
              hideNav={this.handleHideNav}
              switchNavState={this.handleSwitchNavState}
              loggedIn={this.state.loggedIn}
              {...props}
            />
          )}
        />
        <Route
          path="/project-details"
          render={(props) => (
            <ProjectDetails
              navHidden={this.state.navhidden}
              hideNav={this.handleHideNav}
              switchNavState={this.handleSwitchNavState}
              loggedIn={this.state.loggedIn}
              {...props}
            />
          )}
        />
        <Route
          path="/our-services"
          render={(props) => (
            <Services
              navHidden={this.state.navhidden}
              hideNav={this.handleHideNav}
              switchNavState={this.handleSwitchNavState}
              loggedIn={this.state.loggedIn}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={(props) => (
            <HomePage
              navHidden={this.state.navhidden}
              hideNav={this.handleHideNav}
              switchNavState={this.handleSwitchNavState}
              loggedIn={this.state.loggedIn}
              {...props}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
