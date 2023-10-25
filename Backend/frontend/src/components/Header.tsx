import React from "react";
import "../styles/css/style.css";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
        <div className="container-fluid bg-light">
          <a className="navbar-brand" href="#">
            <img
              className="rounded-circle"
              src="./logo.jpg"
              alt="Logo"
              width="50"
              height="50"
            />
          </a>
          <p className="h2">Доставка еды в Кирове!</p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Переключатель навигации"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div className="d-flex autorization-container">
              <div className="icon-user" style={{ fontSize: "30px" }} />
              <p className="nav-link text-dark my-auto">Вход</p>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-decoration-underline active" aria-current="page" href="#">
                  Главная
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-decoration-underline active" href="#">
                  Акции
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-decoration-underline active" href="#">
                  Меню
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-decoration-underline active" href="#">
                  Отзывы
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-decoration-underline  active" href="#">
                  О нас
                </a>
              </li>
            </ul>
            <div className="d-flex basket-container">
              <div className="icon-basket" style={{ fontSize: "30px" }} />
              <p className="nav-link text-white my-auto">Корзина</p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
