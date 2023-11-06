import React from "react";
import { useCart } from "../contexts/CartContext";
import { CartProductContainer } from "./containers/CartProductContainer";

export const ModalCart: React.FC = () => {
  const { cartItems } = useCart();

  return (
    <>
      <div
        className="modal fade"
        id="modalCart"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Корзина
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Закрыть"
              ></button>
            </div>
            <div className="modal-body" id="modalCartBody">
              {cartItems.length === 0 && <p className="h3">Пусто ;(</p>}

              {cartItems.map((item) => (
                <CartProductContainer
                  key={item.id}
                  id={item.id}
                  prodName={item.prodName}
                  image={item.image}
                  count={item.count}
                  price={item.price}
                />
              ))}
            </div>
            {cartItems.length !== 0 && (
              <div className="modal-footer d-flex justify-content-between">
                <p className="h3">
                  Всего: {" "}
                  {cartItems.reduce(
                    (total, item) => total + item.price * item.count,
                    0
                  )}{" "}
                  ₽
                </p>
                <button type="button" className="btn btn-dark">
                  Оформить заказ
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
