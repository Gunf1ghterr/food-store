import { NavLink, useLocation } from "react-router-dom";

export const Navbar: React.FC = () => {
  const location = useLocation();

  const isCurrentPage = (path: string): string => {
    return location.pathname === path ? "link-primary" : "";
  };

  return (
    <div className=" navbar-sticky">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
                    to="/"
                  >
                    Главная
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link text-decoration-underline active`}
                    to="#"
                  >
                    Акции
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className={`nav-link text-decoration-underline active`}
                    to="#"
                  >
                    Отзывы
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={`nav-link text-decoration-underline  active`}
                    to="#"
                  >
                    О нас
                  </NavLink>
                </li>
              </ul>
              <div className="d-flex basket-container">
                <div className="icon-basket" style={{ fontSize: "30px" }} />
                <p className="my-auto">Корзина</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
