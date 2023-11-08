import { useCart } from "../contexts/CartContext";
import { CheckoutContainer } from "../elements/containers/CkeckoutContainer";
import { useEffect, useState } from "react";
import { SendCheckout } from "../functions/SendCheckout";
import { InputChanged } from "../functions/InputChenged";

export const Checkout: React.FC = () => {
  const { cartItems } = useCart();

  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      cartItems.reduce((total, item) => total + item.price * item.count, 0)
    );
    if (cartItems.length === 0) {
      window.location.href = "/";
    }
  }, [cartItems]);

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
                    prodName={item.prodName}
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
                <p className="h5">Отправитель</p>
              </div>
              <form
                action="api/newOrder"
                method="POST"
                id="checkout-form"
                name="checkout-form"
              >
                <div className="card-body">
                  <div className="row">
                    <input
                      type="text"
                      className="form-control w-25 m-2"
                      placeholder="Имя"
                      required
                      id="checkout-name"
                      name="checkout-name"
                      form="checkout-form"
                      onChange={InputChanged}
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
                        id="checkout-phone"
                        name="checkout-phone"
                        form="checkout-form"
                        onChange={InputChanged}
                      />
                    </div>
                    <input
                      type="email"
                      className="form-control w-25 m-2"
                      placeholder="E-mail"
                      required
                      id="checkout-email"
                      name="checkout-email"
                      form="checkout-form"
                      onChange={InputChanged}
                    />
                  </div>
                  <div className="row">
                    <input
                      type="text"
                      className="form-control w-75 m-2"
                      placeholder="Адрес"
                      required
                      id="checkout-address"
                      name="checkout-address"
                      form="checkout-form"
                      onChange={InputChanged}
                    />
                  </div>
                  <div className="row">
                    <textarea
                      className="form-control m-2 w-75"
                      name="checkout-comment"
                      id="checkout-comment"
                      placeholder="Комментарий"
                      style={{ resize: "none" }}
                      maxLength={200}
                      form="checkout-form"
                      onChange={InputChanged}
                      rows={3}
                    ></textarea>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-end">
                  <button
                    className="btn btn-dark"
                    type="submit"
                    onClick={SendCheckout()}
                    form="checkout-form"
                  >
                    Заказать
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
