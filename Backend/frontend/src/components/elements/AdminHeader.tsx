

export const AdminHeader: React.FC = () => {
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
                    <p className="h2">Панель администрации</p>
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
