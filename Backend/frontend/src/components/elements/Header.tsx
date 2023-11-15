import { ModalLogin } from "./ModalLogin";
import { useAuth } from "../contexts/AuthContext";
import { ModalUser } from "./ModalUser";
import { FaUser } from "react-icons/fa";

export const Header: React.FC = () => {
  const { user } = useAuth();
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
          <div className="container-fluid bg-light">
            <div className="container p-0">
              <div className="navbar">
                <div className="d-flex ">
                  <div>
                    <img
                      className="rounded-circle logo-img"
                      src="./logo.jpg"
                      alt="Logo"
                      width="50"
                      height="50"
                      title="🍴"
                    />
                  </div>
                  <div className="my-auto px-2">
                    <p className="h2">Доставка еды в Кирове!</p>
                  </div>
                </div>
                <div className="d-flex text-center">
                  <a
                    href="tel:+7(912) 733-05-71"
                    className="my-auto px-3 h5 "
                    style={{ textDecoration: "none" }}
                  >
                    +7(912) 733-05-71
                  </a>
                  {!user ? <ModalLogin /> : <ModalUser />}

                  {!user ? (
                    <button
                      data-bs-target={!user ? "#modalLogin" : "#modalUser"}
                      data-bs-toggle="modal"
                      style={{ border: "none", background: "none" }}
                    >
                      <div className=" d-flex autorization-container">
                        <FaUser style={{fontSize: "30px", margin: "7px"}}/>
                        <p className=" my-auto">Вход</p>
                      </div>
                    </button>
                  ) : (
                    <button
                      data-bs-target={!user ? "#modalLogin" : "#modalUser"}
                      data-bs-toggle="modal"
                      style={{ border: "none", background: "none" }}
                    >
                      <div className="d-flex autorization-container p-2">
                        <p className="my-auto text-in-header">Кабинет</p>
                      </div>
                    </button>
                  )}
                </div>
                <button
                  className="navbar-toggler mt-1"
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
    </>
  );
};
