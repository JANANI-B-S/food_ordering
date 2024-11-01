import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { wishlistActions } from "../store/shopping-cart/wishlistSlice";
import "../styles/wishlist.css"; // Import the CSS file

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const dispatch = useDispatch();

  return (
    <Helmet title="Wishlist">
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {wishlistItems.length === 0 ? (
                <h5 className="text-center">Your wishlist is empty</h5>
              ) : (
                <>
                  <h5 className="mb-5">Your Wishlist</h5>
                  <table className="table table-borderless mb-5 align-middle">
                    <tbody>
                      {wishlistItems.map((item) => (
                        <WishlistItem item={item} key={item.id} />
                      ))}
                    </tbody>
                  </table>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const WishlistItem = (props) => {
  const { id, image01, title, price } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(wishlistActions.deleteItemFromWishlist(id));
  };

  return (
    <tr>
      <td className="text-center wishlist__img-box">
        <img src={image01} alt={title} />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center wishlist__item-del">
        <i className="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default Wishlist;
