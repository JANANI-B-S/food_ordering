import React from "react";
import "../../../styles/product-card.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { wishlistActions } from "../../../store/shopping-cart/wishlistSlice"; // Import wishlist actions
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { id, title, image01, price, extraIngredients } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
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
      })
    );
  };

  return (
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
      </div>
    </div>
  );
};

export default ProductCard;
