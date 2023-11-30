import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { LuTimer } from "react-icons/lu";
import React from "react";

export const About: React.FC = () => {
  return (
    <main>
      <div className="container ">
        <div className="row">
          <div className="col-12 col-lg-6 mt-3">
            <div className="card mb-3">
              <div className="card-header">
                <h3>Районы доставки</h3>
              </div>
              <div className="card-body">
                <div className="border-bottom d-flex justify-content-between">
                  <h6>Лепсе</h6>
                  <a
                    href="tel:000001"
                    className="text-decoration-none text-dark"
                  >
                    (тел: 000 001)
                  </a>
                </div>
                <div className="border-bottom d-flex justify-content-between">
                  <h6>Дворец Пионеров</h6>
                  <a
                    href="tel:000002"
                    className="text-decoration-none text-dark"
                  >
                    (тел: 000 002)
                  </a>
                </div>
                <div className="border-bottom d-flex justify-content-between">
                  <h6>Юго-Запад</h6>
                  <a
                    href="tel:000003"
                    className="text-decoration-none text-dark"
                  >
                    (тел: 000 003)
                  </a>
                </div>
                <div className="border-bottom d-flex justify-content-between">
                  <h6>Чистые Пруды</h6>
                  <a
                    href="tel:000004"
                    className="text-decoration-none text-dark"
                  >
                    (тел: 000 004)
                  </a>
                </div>
                <div className="border-bottom d-flex justify-content-between">
                  <h6>Филейка</h6>
                  <a
                    href="tel:000005"
                    className="text-decoration-none text-dark"
                  >
                    (тел: 000 005)
                  </a>
                </div>
                <div className="border-bottom d-flex justify-content-between">
                  <h6>Театральная площадь</h6>
                  <a
                    href="tel:000006"
                    className="text-decoration-none text-dark"
                  >
                    (тел: 000 006)
                  </a>
                </div>
              </div>
            </div>
            <div className="card ">
              <div className="card-header">
                <h3>Режим работы</h3>
              </div>
              <div className="card-body">
                <div className="border-bottom">
                  <h6>
                    <LuTimer
                      style={{ marginRight: "10px", paddingBottom: "3px" }}
                    />
                    Понедельник <i>10:00 - 22:00</i>
                  </h6>
                </div>
                <div className="border-bottom">
                  <h6>
                    <LuTimer
                      style={{ marginRight: "10px", paddingBottom: "3px" }}
                    />
                    Вторник <i>10:00 - 22:00</i>
                  </h6>
                </div>
                <div className="border-bottom">
                  <h6>
                    <LuTimer
                      style={{ marginRight: "10px", paddingBottom: "3px" }}
                    />
                    Среда <i>10:00 - 22:00</i>
                  </h6>
                </div>
                <div className="border-bottom">
                  <h6>
                    <LuTimer
                      style={{ marginRight: "10px", paddingBottom: "3px" }}
                    />
                    Четверг <i>10:00 - 22:00</i>
                  </h6>
                </div>
                <div className="border-bottom">
                  <h6>
                    <LuTimer
                      style={{ marginRight: "10px", paddingBottom: "3px" }}
                    />
                    Пятница <i>10:00 - 23:00</i>
                  </h6>
                </div>
                <div className="border-bottom">
                  <h6>
                    <LuTimer
                      style={{ marginRight: "10px", paddingBottom: "3px" }}
                    />
                    Суббота <i>10:00 - 23:00</i>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 my-3">
            <div className="card p-1">
              <div className="card-body p-0">
                <YMaps
                  enterprise
                  query={{ apikey: String(process.env.REACT_APP_API_KEY) }}
                >
                  <Map
                    defaultState={{
                      center: [58.602658, 49.666612],
                      zoom: 15,
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
                    height="700px"
                    onClick={(e: any) => {
                      console.log(e.get("coords"));
                    }}
                  >
                    <Placemark
                      modules={["geoObject.addon.balloon"]}
                      defaultGeometry={[58.602658, 49.666612]}
                      properties={{
                        balloonContentHeader: "Главные офис",
                        balloonContentBody: "Киров, Московская 36",
                      }}
                    />
                  </Map>
                </YMaps>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 mb-3">
            <div className="card">
              <div className="card-header">
                <h3>О компании</h3>
              </div>
              <div className="card-body">
                Наш Магазин — место, где еда — это главное. Именно поэтому мы не
                экономим на вкусе. Только свежие роллы и горячая пицца,
                приготовленные именно для вас после заказа! Доставим заказ за 60
                минут или любое блюдо в подарок!
              </div>
            </div>
          </div>
          <div className="col-12 mb-3">
            <div className="card">
              <div className="card-header">
                <h3>Контакты</h3>
              </div>
              <div className="card-body">
                Если у вас возникнут вопросы или пожелания, вы можете связаться
                с нами любым удобным способом: <br />
                {""}
                Email: pibstudents@internet.com <br />
                {""}
                Телефон: 8(800)-555-35-35
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
