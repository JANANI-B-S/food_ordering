import React from "react";
import { ListGroupItem } from "reactstrap";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
>>>>>>> 506e83d3a6354efcfc82e98c3e88d86a8c13e071

import "../../../styles/cart-item.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

<<<<<<< HEAD
const CartItem = ({ item, onClose }) => {
  const { id, title, price, image01, quantity, extraIngredients } = item;
  let navigate = useNavigate(); 

  const dispatch = useDispatch();

  const incrementItem = (event) => {
=======
const CartItem = ({ item }) => {
  const { id, title, price, image01, quantity, totalPrice } = item;

  const dispatch = useDispatch();

  const incrementItem = () => {
>>>>>>> 506e83d3a6354efcfc82e98c3e88d86a8c13e071
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
<<<<<<< HEAD
        extraIngredients
      })
    );
    event.stopPropagation();
  };

  const decreaseItem = (event) => {
    dispatch(cartActions.removeItem(id));
    event.stopPropagation();
  };

  const deleteItem = (event) => {
    dispatch(cartActions.deleteItem(id));
    event.stopPropagation();
  };

  const handlePizzaSelection = () =>  {
    navigate(`/pizzas/${id}`);
    onClose(); 
  }

  return (
    <ListGroupItem className="border-0 cart__item" onClick={handlePizzaSelection}>
      <div className="cart__item-info d-flex gap-4">
=======
      })
    );
  };

  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item-info d-flex gap-2">
>>>>>>> 506e83d3a6354efcfc82e98c3e88d86a8c13e071
        <img src={image01} alt="product-img" />

        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <p className=" d-flex align-items-center gap-5 cart__product-price">
<<<<<<< HEAD
              {quantity}x <span>${price}</span>
            </p>
            <div className="d-flex flex-column">
            {
              extraIngredients !== undefined && (
                Array.from(extraIngredients).map(value => {
                  return(
                    <span key={value} className="m-0">
                      {value}
                    </span>
                  )
                })
                )
              }
              </div>
            <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
              <span className="increase__btn" onClick={event => incrementItem(event)}>
                <i className="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease__btn" onClick={event => decreaseItem(event)}>
                <i className="ri-subtract-line"></i>
=======
              {quantity}x <span>${totalPrice}</span>
            </p>
            <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
              <span className="increase__btn" onClick={incrementItem}>
                <i class="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              <span className="decrease__btn" onClick={decreaseItem}>
                <i class="ri-subtract-line"></i>
>>>>>>> 506e83d3a6354efcfc82e98c3e88d86a8c13e071
              </span>
            </div>
          </div>

<<<<<<< HEAD
          <span className="delete__btn" onClick={event => deleteItem(event)}>
            <i className="ri-close-line"></i>
=======
          <span className="delete__btn" onClick={deleteItem}>
            <i class="ri-close-line"></i>
>>>>>>> 506e83d3a6354efcfc82e98c3e88d86a8c13e071
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;
