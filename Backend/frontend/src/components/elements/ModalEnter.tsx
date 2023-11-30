import React, { useState } from "react";
export const ModalEnter = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [enter, setModalEnter] = useState<boolean>(true);

  const isRegister = () => {
    setModalEnter(false);
  };

  if (!isOpen) {
    return null;
  }

  const handleClose = () => {
    setModalEnter(true);
    onClose();
  };

  return (
    <>
      {isOpen && enter && (
        <>
          <div
            className="modal-backdrop"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1050 }}
            onClick={onClose}
          ></div>
          <div
            className="modal fade show"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
            role="dialog"
            style={{ display: "block" }}
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Вход</h5>
                  <button type="button" className="close" onClick={handleClose}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label>Email адрес</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Введите email"
                      />
                    </div>
                    <div className="form-group">
                      <label>Пароль</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Введите пароль"
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={isRegister}
                  >
                    Зарегистрироваться
                  </button>
                  <button type="button" className="btn btn-primary">
                    Войти
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {isOpen && !enter && (
        <>
          <div
            className="modal-backdrop"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1050 }}
            onClick={onClose}
          ></div>
          <div
            className="modal fade show"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
            role="dialog"
            style={{ display: "block" }}
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Регистрация</h5>
                  <button type="button" className="close" onClick={handleClose}>
                    <span>&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label>Имя</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Имя"
                      />
                    </div>
                    <div className="form-group">
                      <label>Номер телефона</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Номер телефона"
                      />
                    </div>
                    <div className="form-group">
                      <label>Email адрес</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Введите email"
                      />
                    </div>
                    <div className="form-group">
                      <label>Пароль</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Введите пароль"
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={isRegister}
                  >
                    Зарегистрироваться
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
