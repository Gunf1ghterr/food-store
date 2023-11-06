import { ICartProductContainer } from "../../../interfaces/ICartProductContainer";
import { useCart } from "../../contexts/CartContext";

export const CartProductContainer: React.FC<ICartProductContainer> = ({
  id,
  prodName,
  image,
  count,
  price,
}) => {
  const { addItemToCart, removeItemFromCart } = useCart();

  const handleAddToCart = () => {
    if (count < 10) {
      addItemToCart({
        id,
        prodName,
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
          <div className="col-3 px-0">
            <img
              className="rounded-circle"
              style={{ width: "100px", height: "auto" }}
              src={image}
              alt="product"
            />
          </div>
          <div className="col-6 px-0 text-center d-flex flex-column justify-content-center">
            <p className="h5 text-start border-bottom">{prodName}</p>
            <p className="h6 text-start border-bottom">{count}</p>
            <p className="h6 text-start border-bottom">{price * count}₽</p>
          </div>
          <div className="col-3 px-0 d-flex  justify-content-center mt-4">
            <button
              className="btn btn-danger rounded-circle p-0 mx-1"
              type="button"
              style={{ width: "40px", height: "40px" }}
            >
              <p className="cart-plus-minus" onClick={handleRemoveFromCart}>
                -
              </p>
            </button>
            <button
              className="btn btn-success rounded-circle p-0 mx-1"
              type="button"
              style={{ width: "40px", height: "40px" }}
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
