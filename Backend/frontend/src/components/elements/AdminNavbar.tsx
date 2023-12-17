import { NavLink,useLocation } from "react-router-dom";
import React from "react";

export const AdminNavbar: React.FC = () => {
    const location = useLocation();
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
                    to="/admin"
                  >
                    Главная
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link text-decoration-underline active ${isCurrentPage(
                        "/"
                      )}`}
                      aria-current="page"
                    to="/admin/products"
                  >
                    Товары
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className={`nav-link text-decoration-underline active ${isCurrentPage(
                        "/"
                      )}`}
                      aria-current="page"
                    to="#"
                  >
                    Акции
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link text-decoration-underline active ${isCurrentPage(
                        "/"
                      )}`}
                      aria-current="page"
                    to="#"
                  >
                    Отзывы
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link text-decoration-underline active ${isCurrentPage(
                        "/"
                      )}`}
                      aria-current="page"
                    to="#"
                  >
                    Выход
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
