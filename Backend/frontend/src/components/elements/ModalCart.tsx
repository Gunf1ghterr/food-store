import React from "react";
import { useCart } from "../contexts/CartContext";
import { CartProductContainer } from "./containers/CartProductContainer";
import { NavLink } from "react-router-dom";
import { useRef } from "react";

export const ModalCart: React.FC = () => {
  const { cartItems } = useCart();
  const linkRef = useRef<HTMLAnchorElement>(null);

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
                  name={item.name}
                  image={item.image}
                  count={item.count}
                  price={item.price}
                />
              ))}
            </div>
            {cartItems.length !== 0 && (
              <div className="modal-footer d-flex justify-content-between">
                <p className="h3">
                  Всего:{" "}
                  {cartItems.reduce(
                    (total, item) => total + item.price * item.count,
                    0
                  )}{" "}
                  ₽
                </p>
                <NavLink to="/checkout" ref={linkRef} />

                <button
                  type="button"
                  className="btn btn-dark"
                  data-bs-dismiss="modal"
                  onClick={() => linkRef.current?.click()}
                >
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
