import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid bg-light">
          <div className="container ">
            <div className="navbar">
              <div className="d-flex ">
                <NavLink className="navbar-brand" to="/">
                  <img
                    className="rounded-circle logo-img"
                    src="./logo.jpg"
                    alt="Logo"
                    width="50"
                    height="50"
                  />
                </NavLink>
                <div className="my-auto">
                  <p className="h2">Доставка еды в Кирове!</p>
                </div>
              </div>
              <div className=" d-flex autorization-container">
                <div className="icon-user" style={{ fontSize: "30px" }} />
                <p className=" my-auto">Вход</p>
              </div>
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
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
