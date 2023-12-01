import { NavLink, useLocation } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";
import { FaShoppingCart } from "react-icons/fa";
import React from "react";

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { user } = useAuth();
  const { cartItems } = useCart();

  const isCurrentPage = (path: string): string => {
    return location.pathname === path ? "link-primary selected-link" : "";
  };

  return (
    <div className="navbar-sticky">
      <main className="navbar navbar-expand-lg bg-body-tertiary py-1">
        <div className="container-fluid">
          <div className="container p-0">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className={`nav-link text-decoration-underline active ${isCurrentPage(
                      "/"
                    )}`}
                    aria-current="page"
                    to={{ pathname: "/", search: "?param=all" }}
                  >
                    Главная
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link text-decoration-underline active ${isCurrentPage(
                      "/offers"
                    )}`}
                    to="offers"
                  >
                    Акции
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className={`nav-link text-decoration-underline active ${isCurrentPage(
                      "/feedback"
                    )}`}
                    to="feedback"
                  >
                    Отзывы
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link text-decoration-underline active ${isCurrentPage(
                      "/about"
                    )}`}
                    to="about"
                  >
                    О нас
                  </NavLink>
                </li>
              </ul>

              <button
                data-bs-target="#modalCart"
                data-bs-toggle="modal"
                style={{ border: "none", background: "none" }}
              >
                {location.pathname === "/checkout" || !user ? (
                  <></>
                ) : (
                  <div className="d-flex basket-container">
                    <FaShoppingCart style={{fontSize: "30px", margin: "7px"}}/>
                    <p className="my-auto text-in-header">
                      {cartItems.length === 0
                        ? "Корзина"
                        : cartItems.reduce(
                            (total, item) => total + item.price * item.count,
                            0
                          ) + " ₽"}
                    </p>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
