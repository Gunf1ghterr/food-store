import { IProductContainerProps } from "../../../interfaces/IProductContainerProps";
import { Modal } from "../Modal";
import React from "react";
import { useCart } from "../../contexts/CartContext";
import { useAuth } from "../../contexts/AuthContext";

export const ProductContainer: React.FC<IProductContainerProps> = ({
  name,
  description,
  image,
  id,
  price,
}) => {
  const { addItemToCart, removeItemFromCart, cartItems } = useCart();
  const cartItem = cartItems.find((item) => item.id === id);
  const count = cartItem ? cartItem.count : 0;
  const { user } = useAuth();

  const handleAddToCart = () => {
    if (count < 10) {
      addItemToCart({
        id,
        name: name,
        image,
        price,
        count: count + 1,
      });
    }
  };

  const handleRemoveFromCart = () => {
    if (count > 0) {
      removeItemFromCart(id);
    }
  };

  return (
    <div
      className="col-xxl-3 col-lg-4 col-md-6 col-sm-12 px-1 d-flex justify-content-center"
      id={String(id)}
    >
      <div className="card m-3 rounded-top-5">
        <Modal modalId={"product-" + String(id)}>
          <div className="img-scale-wrapper">
            <img
              src={image}
              className="card-img-top img-scale"
              loading="lazy"
              alt={"product-" + String(id)}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>

            {user && (
              <div className="d-flex justify-content-between text-center">
                {count !== 0 && (
                  <button
                    className="btn btn-danger rounded-circle p-0 mx-1"
                    type="button"
                    style={{ width: "40px", height: "40px" }}
                    onClick={handleRemoveFromCart}
                  >
                    <p className="cart-plus-minus">-</p>
                  </button>
                )}

                <p className="h5 my-auto">{count === 0 ? "" : count}</p>
                <button
                  className="btn btn-dark rounded-circle p-0 mx-1"
                  type="button"
                  style={{ width: "40px", height: "40px" }}
                  onClick={handleAddToCart}
                >
                  <p className="cart-plus-minus">+</p>
                </button>
              </div>
            )}

            <div className="d-flex justify-content-center">
              <p className="h3">{String(price)} ₽</p>
            </div>
          </div>
        </Modal>
        <button
          data-bs-toggle="modal"
          data-bs-target={`#staticBackdrop-product-${id}`}
          className="btn btn-light "
        >
          Расширить
        </button>
      </div>
    </div>
  );
};
