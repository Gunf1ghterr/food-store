import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export const Footer: React.FC = () => {
  const location = useLocation();

  const isCurrentPage = (path: string): string => {
    return location.pathname === path
      ? "link-primary selected-link"
      : "text-dark no-underline";
  };
  return (
    <>
      <div className="navbar bg-light border-bottom">
        <div className="container d-flex justify-content-center ">
          <div className="row ">
            <div className="col-md-3 text-center">
              <h5>Время доставки менее часа</h5>
            </div>
            <div className="col-md-3 text-center">
              <h5>Минимальная сумма заказа 0₽</h5>
            </div>
            <div className="col-md-3 text-center ">
              <h5>100₽ стоимость доставки</h5>
            </div>
            <div className="col-md-3 text-center ">
              <h5>От 500₽ доставка бесплатно</h5>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-light text-dark pt-1 mt-0">
        <div className="container">
          <div className="row mb-3 text-center">
            <div className="col-md-4">
              <NavLink
                className={` ${isCurrentPage("/agreement")}`}
                to="/agreement"
              >
                Пользовательские соглашения
              </NavLink>
            </div>
            <div className="col-md-4">
              <NavLink
                className={` ${isCurrentPage("/privacy-policy")} `}
                to="/privacy-policy"
              >
                Политика конфиденциальности
              </NavLink>
            </div>
            <div className="col-md-4">
              <NavLink
                className={` ${isCurrentPage("/payments")} `}
                to="/payments"
              >
                Правила оплаты
              </NavLink>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                Разработали Соловей Р. и Пермяков С. для курсового проекта.
                <br />
                2023
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
