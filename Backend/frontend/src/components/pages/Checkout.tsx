import { useCart } from "../contexts/CartContext";
import { CheckoutContainer } from "../elements/containers/CkeckoutContainer";
import { useEffect, useState } from "react";
import { SendCheckout } from "../functions/SendCheckout";
import { InputChanged } from "../functions/InputChenged";
import { useAuth } from "../contexts/AuthContext";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export const Checkout: React.FC = () => {
  const { cartItems } = useCart();
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [placemarkCoordinates, setPlacemarkCoordinates] = useState<number[]>(
    []
  );
  const [showMap, setShowMap] = useState(false);

  const { user } = useAuth();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      cartItems.reduce((total, item) => total + item.price * item.count, 0)
    );
    if (cartItems.length === 0) {
      window.location.href = "/";
    }

    if (user) {
      setUsername(user.username);
      setPhone(user.phone);
    }
  }, [cartItems, user]);

  const getAddressFromCoordinates = async (coords: any) => {
    const coordsToString = coords.reverse().join(",");
    placemarkCoordinates.reverse().join(",");
    const connect = `https://geocode-maps.yandex.ru/1.x/?apikey=${process.env.REACT_APP_API_KEY}&geocode=${coordsToString}&format=json`;

    try {
      const response = await fetch(connect, {
        method: "GET",
      });

      const data = await response.json();

      const newAddress =
        data.response.GeoObjectCollection.featureMember[0].GeoObject
          .description +
        ", " +
        data.response.GeoObjectCollection.featureMember[0].GeoObject.name;

      setAddress(newAddress);
    } catch (error) {
      setAddress("Не удалось определить адрес");
      console.error("Ошибка при выполнении запроса:", error);
    }
  };

  const handleMapClick = (e: any) => {
    const clickedCoords: number[] = e.get("coords");
    setPlacemarkCoordinates(clickedCoords);

    getAddressFromCoordinates(clickedCoords.slice());
  };

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
                <p className="h5">Получатель</p>
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
                      onChange={(e) => {
                        InputChanged(e);
                        setUsername(e.target.value);
                      }}
                      value={username}
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
                        onChange={(e) => {
                          InputChanged(e);
                          setPhone(e.target.value);
                        }}
                        value={phone}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <textarea
                      className="form-control w-75 m-2"
                      placeholder="Адрес"
                      required
                      id="checkout-address"
                      name="checkout-address"
                      form="checkout-form"
                      value={address.toString()}
                      onChange={(e) => {
                        InputChanged(e);
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

          <div className="col-12 mb-3 ">
            <div className="card">
              <div className="card-header d-flex justify-content-center">
                <p className="h4">Карта</p>
                <div className="form-check form-switch mx-3 mt-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    onClick={() => setShowMap(!showMap)}
                  />
                </div>
              </div>

              {showMap && (
                <div className="card-body p-0">
                  <YMaps
                    enterprise
                    query={{ apikey: String(process.env.REACT_APP_API_KEY) }}
                  >
                    <Map
                      defaultState={{
                        center: [58.602658, 49.666612],
                        zoom: 14,
                        controls: ["zoomControl", "fullscreenControl"],
                      }}
                      modules={[
                        "control.ZoomControl",
                        "control.FullscreenControl",
                      ]}
                      options={{
                        suppressMapOpenBlock: true,
                      }}
                      width="100%"
                      height="500px"
                      onClick={handleMapClick}
                    >
                      <Placemark
                        geometry={placemarkCoordinates}
                        id="position"
                        modules={["geoObject.addon.balloon"]}
                        properties={{ balloonContentHeader: "Доставить сюда" }}
                        options={{
                          preset: "islands#redDotIcon",
                        }}
                      />
                    </Map>
                  </YMaps>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
