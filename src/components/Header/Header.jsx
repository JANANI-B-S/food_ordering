import React, { useRef, useEffect } from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
>>>>>>> 506e83d3a6354efcfc82e98c3e88d86a8c13e071

import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import "../../styles/header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
<<<<<<< HEAD
    path: "/pizzas",
=======
    path: "/foods",
>>>>>>> 506e83d3a6354efcfc82e98c3e88d86a8c13e071
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
<<<<<<< HEAD
  {
    display: "Wishlist",
    path: "/wishlist",
  },
=======
>>>>>>> 506e83d3a6354efcfc82e98c3e88d86a8c13e071
];

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
<<<<<<< HEAD
  let navigate = useNavigate();
=======
>>>>>>> 506e83d3a6354efcfc82e98c3e88d86a8c13e071

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

<<<<<<< HEAD
  console.log(menuRef?.current?.classList.value);

=======
>>>>>>> 506e83d3a6354efcfc82e98c3e88d86a8c13e071
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll");
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
<<<<<<< HEAD
          <div className="logo" onClick={() => navigate("/home")}>
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>
          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div
              className="menu d-flex align-items-center gap-5"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="header__closeButton">
                <span onClick={toggleMenu}>
                  <i className="ri-close-fill"></i>
                </span>
              </div>
=======
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>

          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
>>>>>>> 506e83d3a6354efcfc82e98c3e88d86a8c13e071
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
<<<<<<< HEAD
                  onClick={toggleMenu}
=======
>>>>>>> 506e83d3a6354efcfc82e98c3e88d86a8c13e071
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <span className="cart__icon" onClick={toggleCart}>
<<<<<<< HEAD
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>
            
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
=======
              <i class="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>

            <span className="user">
              <Link to="/login">
                <i class="ri-user-line"></i>
              </Link>
            </span>

            <span className="mobile__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
>>>>>>> 506e83d3a6354efcfc82e98c3e88d86a8c13e071
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
