import { useState } from "react";
import { FormLogin } from "./containers/FormLogin";
import { FormReg } from "./containers/FormReg";
import React from "react";

export const ModalLogin: React.FC = () => {
  const [login, setLogin] = useState(false);
  return (
    <>
      <div
        className="modal fade"
        id="modalLogin"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="d-flex justify-content-between p-3">
              <h3 className="modal-title fs-5" id="staticBackdropLabel">
                {login ? "Регистрация" : "Вход"}
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Закрыть"
                id="close-modal-login"
                onClick={() => {
                  const loginAlert = document.getElementById(
                    "loginAlert"
                  ) as HTMLDivElement;
                  const regAlert = document.getElementById(
                    "regAlert"
                  ) as HTMLDivElement;
                  loginAlert?.classList.add("d-none");
                  regAlert?.classList.add("d-none");
                }}
              ></button>
            </div>
            <div className="py-1 px-3" style={{}}>
              {!login ? <FormLogin /> : <FormReg />}
              <div id="spinner"></div>
            </div>
            <div className="d-flex justify-content-center py-1">
              <button
                className="btn btn-link"
                id="staticBackdropLabel"
                onClick={() => setLogin(!login)}
                type="button"
              >
                {login ? "Войти" : "Зарегистрироваться"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
