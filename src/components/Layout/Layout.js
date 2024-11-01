import React from "react";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers";
<<<<<<< HEAD
import Carts from "../UI/cart/Carts.jsx";

=======

import Carts from "../UI/cart/Carts.jsx";
>>>>>>> 506e83d3a6354efcfc82e98c3e88d86a8c13e071
import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
<<<<<<< HEAD

  return (
    <div className="d-flex flex-column vh-100 justify-content-between">
      <Header />
      {showCart && <Carts />}
      <div>
        <Routes />
      </div>
   


=======
  return (
    <div>
      <Header />

      {showCart && <Carts />}

      <div>
        <Routes />
      </div>
      <Footer />
>>>>>>> 506e83d3a6354efcfc82e98c3e88d86a8c13e071
    </div>
  );
};

export default Layout;
