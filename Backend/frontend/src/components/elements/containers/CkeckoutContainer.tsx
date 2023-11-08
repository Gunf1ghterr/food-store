import { ICartProductContainer } from "../../../interfaces/ICartProductContainer";

export const CheckoutContainer: React.FC<ICartProductContainer> = ({
  id,
  image,
  prodName,
  price,
  count,
}) => {
  return (
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
          <p className="h6 text-start border-bottom">{count} шт.</p>
          <p className="h6 text-start border-bottom">{price * count}₽</p>
        </div>
      </div>
    </div>
  );
};
