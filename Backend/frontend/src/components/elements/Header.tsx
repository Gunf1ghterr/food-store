
export const Header: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => {
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
                      title="Food-Store"
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
                  <div onClick={onOpenModal} className=" d-flex autorization-container" >
                    <div className="icon-user" style={{ fontSize: "30px" }} />
                    <p className=" my-auto">Вход</p>
                  </div>
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
