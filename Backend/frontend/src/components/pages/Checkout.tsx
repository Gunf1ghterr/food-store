import { useCart } from "../contexts/CartContext";
import { CheckoutContainer } from "../elements/containers/CkeckoutContainer";
import { useEffect, useRef, useState } from "react";
import { SendCheckout } from "../functions/SendCheckout";
import { InputChanged } from "../functions/InputChenged";
import { Navigate } from "react-router-dom";
import { CheckoutMap } from "../elements/CheckoutMap";
import { useCurrentOrder } from "../contexts/CurrentOrderContext";
import { useSendOrder } from "../../hooks/useSendOrder";
import { useAuth } from "../contexts/AuthContext";
import React from "react";

export const Checkout: React.FC = () => {
  const { user } = useAuth();
  const { mutate } = useSendOrder(user?.id || 0);
  const { currentOrder, setCurrentOrder } = useCurrentOrder();
  const { cartItems } = useCart();
  const [address, setAddress] = useState("");
  const [total, setTotal] = useState(0);
  const form = useRef(null);
  useEffect(() => {
    setTotal(
      cartItems.reduce((total, item) => total + item.price * item.count, 0)
    );
  }, [cartItems]);

  useEffect(() => {
    if (address) {
      setCurrentOrder({ ...currentOrder, address });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  return (
    <main>
      <div id="spinner-checkout" />
      {/* ======================================================================== */}
      <div style={{ display: "none" }}>
        <form method="POST" action="https://yoomoney.ru/quickpay/confirm">
          <input type="hidden" name="receiver" value="4100118434949092" />
          <input type="hidden" name="label" value="$order_id" />
          <input type="hidden" name="quickpay-form" value="button" />
          <input type="hidden" name="sum" value="10" data-type="number" />
          <input className="btn btn-dark" type="submit" value="Перевести" />
        </form>
      </div>
      {/* ======================================================================== */}
      <div className="container ">
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-sm-12 my-3">
            <div className="card">
              <div className="card-header">
                <p className="h5">Выбранные товары</p>
              </div>
              <div className="card-body">
                {cartItems.map((item) => (
                  <CheckoutContainer
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    count={item.count}
                    price={item.price}
                  />
                ))}
              </div>
              <div className="card-footer">
                {total >= 500 ? (
                  <p className="h3">Всего: {total} ₽</p>
                ) : (
                  <>
                    <p className="h3">Всего: {total + 100} ₽</p>
                    <p className="h6 text-danger">Стоимость доставки 100 ₽</p>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="col-xl-8 col-lg-6 col-sm-12 my-3">
            <div className="card">
              <div className="card-header">
                <p className="h5">Получатель</p>
              </div>
              <form
                action="api/order/new"
                method="POST"
                id="checkout-form"
                name="checkout-form"
                encType="multipart/form-data"
                ref={form}
              >
                <div className="card-body">
                  <div className="row">
                    <input
                      type="text"
                      className="form-control w-25 m-2"
                      placeholder="Имя"
                      required
                      id="checkoutName"
                      name="checkoutName"
                      form="checkout-form"
                      onChange={(e) => {
                        InputChanged(e);
                        setCurrentOrder({
                          ...currentOrder,
                          recipient: e.target.value,
                        });
                      }}
                      value={currentOrder.recipient}
                    />
                    <div
                      className="tooltip-element w-25 m-0 p-0"
                      tooltip-title={`Номер должен начинаться с 8 и содержать 11 цифр`}
                    >
                      <input
                        type="tel"
                        className="form-control my-2"
                        placeholder="Номер телефона"
                        required
                        id="checkoutPhone"
                        name="checkoutPhone"
                        form="checkout-form"
                        onChange={(e) => {
                          InputChanged(e);
                          setCurrentOrder({
                            ...currentOrder,
                            recipient_phone: e.target.value,
                          });
                        }}
                        value={currentOrder.recipient_phone}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <textarea
                      className="form-control w-75 m-2"
                      placeholder="Адрес"
                      required
                      id="checkoutAddress"
                      name="checkoutAddress"
                      form="checkout-form"
                      value={currentOrder.address}
                      onChange={(e) => {
                        InputChanged(e);
                        setCurrentOrder({
                          ...currentOrder,
                          address: e.target.value,
                        });
                        setAddress(e.target.value);
                      }}
                      maxLength={200}
                      style={{ resize: "none" }}
                      rows={3}
                    />
                  </div>
                  <div className="row">
                    <textarea
                      className="form-control m-2 w-75"
                      name="checkoutComment"
                      id="checkoutComment"
                      placeholder="Комментарий"
                      style={{ resize: "none" }}
                      maxLength={200}
                      form="checkout-form"
                      onChange={(e) => {
                        InputChanged(e);
                        setCurrentOrder({
                          ...currentOrder,
                          comment: e.target.value,
                        });
                      }}
                      value={currentOrder.comment}
                      rows={3}
                    ></textarea>
                  </div>
                  <div className="row">
                    <h6 className="text-dark">
                      Оплата производится наличными или картой при получении
                      заказа.
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-end">
                  <button
                    className="btn btn-dark"
                    type="submit"
                    onClick={SendCheckout(mutate)}
                    form="checkout-form"
                  >
                    Заказать
                  </button>
                </div>
              </form>
            </div>
          </div>
          <CheckoutMap setAddress={setAddress} />
        </div>
      </div>
      {!cartItems.length && <Navigate to="/" replace={true} />}
    </main>
  );
};
