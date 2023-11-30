import { useEffect, useState } from "react";
import { History } from "./History";
import { FormUser } from "./containers/FormUser";
import { useLogout } from "../../hooks/useLogout";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
import React from "react";

export const ModalUser: React.FC = () => {
  const [history, setHistory] = useState(false);
  const [exit, setExit] = useState(false);
  const { isSuccess } = useLogout(exit);
  const { setUser } = useAuth();
  const { setCartItems } = useCart();

  useEffect(() => {
    if (isSuccess) {
      setUser(null);
      const modal = document.getElementById("close-modal-user");
      if (modal) {
        modal.click();
      }
    }
  }, [isSuccess, setCartItems, setUser]);

  return (
    <>
      <div
        className="modal fade"
        id="modalUser"
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
                {!history ? "Данные пользователя" : "История заказов"}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Закрыть"
                id="close-modal-user"
              ></button>
            </div>
            <div className="modal-body">
              <div id="spinner"></div>
              {!history ? <FormUser /> : <History />}
            </div>
            <div className="modal-footer d-flex justify-content-between">
              {!history ? (
                <button
                  className="btn btn-dark"
                  type="button"
                  onClick={() => setHistory(!history)}
                >
                  История заказов
                </button>
              ) : (
                <button
                  className="btn btn-dark"
                  type="button"
                  onClick={() => setHistory(!history)}
                >
                  Данные пользователя
                </button>
              )}
              <button
                className="btn btn-danger"
                type="button"
                onClick={() => {
                  setExit(!exit);
                }}
              >
                Выйти из аккаунта
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
