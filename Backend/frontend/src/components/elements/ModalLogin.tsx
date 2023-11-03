import { useState } from "react";
import { FormLogin } from "./containers/FormLogin";
import { FormSingin } from "./containers/FormSingin";

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
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                {!login ? "Вход" : "Регистрация"}
              </h1>
              <div className="form-check form-switch mx-3 mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  onClick={() => setLogin(!login)}
                />
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Закрыть"
              ></button>
            </div>
            <div className="modal-body">
              {!login ? <FormLogin /> : <FormSingin />}
              <div id="spinner"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
