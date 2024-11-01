import React from "react";
<<<<<<< HEAD
import "../../../styles/product-card.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { wishlistActions } from "../../../store/shopping-cart/wishlistSlice"; // Import wishlist actions
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { id, title, image01, price, extraIngredients } = props.item;
=======

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
>>>>>>> 506e83d3a6354efcfc82e98c3e88d86a8c13e071
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
<<<<<<< HEAD
        extraIngredients,
      })
    );
  };

  // Add to Wishlist function
  const addToWishlist = () => {
    dispatch(
      wishlistActions.addItemToWishlist({
        id,
        title,
        image01,
        price,
=======
>>>>>>> 506e83d3a6354efcfc82e98c3e88d86a8c13e071
      })
    );
  };

  return (
<<<<<<< HEAD
    <div className="product__item d-flex flex-column justify-content-between">
      <div className="product__content">
        <img className="product__img w-50" src={image01} alt="Pizza" />
        <h5>
          <Link to={`/pizzas/${id}`}>{title}</Link>
        </h5>
      </div>
      <div className="d-flex flex-column align-items-center justify-content-between">
        <span className="product__price mb-2">{price} € </span>
        <button className="addTOCART__btn mb-2" onClick={addToCart}>
          Add to Cart
        </button>
        {/* Wishlist Button */}
        <button className="addToWishlist__btn" onClick={addToWishlist}>
          Add to Wishlist
        </button>
=======
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">${price}</span>
          <button className="addTOCart__btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
>>>>>>> 506e83d3a6354efcfc82e98c3e88d86a8c13e071
      </div>
    </div>
  );
};

export default ProductCard;
