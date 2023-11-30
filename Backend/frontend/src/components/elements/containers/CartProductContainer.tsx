import { ICartProductContainer } from "../../../interfaces/ICartProductContainer";
import { useCart } from "../../contexts/CartContext";
import React from "react";
export const CartProductContainer: React.FC<ICartProductContainer> = ({
  id,
  name,
  image,
  count,
  price,
}) => {
  const { addItemToCart, removeItemFromCart } = useCart();

  const handleAddToCart = () => {
    if (count < 10) {
      addItemToCart({
        id,
        name,
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
    <>
      <div className="container mb-2 " id={"product-" + String(id)}>
        <div className="row p-1">
          <div className="col-4 px-0">
            <img
              className="rounded-circle"
              style={{ width: "100px", height: "auto" }}
              src={image}
              alt="product"
            />
          </div>
          <div className="col-5 px-0 text-center d-flex flex-column justify-content-center">
            <p className="h5 text-start border-bottom">{name}</p>
            <p className="h6 text-start border-bottom">{count} шт.</p>
            <p className="h6 text-start border-bottom">{price * count}₽</p>
          </div>
          <div className="col-3 px-0 d-flex  justify-content-center mt-4">
            <button
              className="btn btn-danger rounded-circle p-0 mx-1 circle-plus-minus"
              type="button"
            >
              <p className="cart-plus-minus" onClick={handleRemoveFromCart}>
                -
              </p>
            </button>
            <button
              className="btn btn-success rounded-circle p-0 mx-1 circle-plus-minus"
              type="button"
            >
              <p className="cart-plus-minus" onClick={handleAddToCart}>
                +
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
