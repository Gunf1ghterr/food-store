import React from "react";
import { IChildrenElement } from "../../interfaces/IChildrenElement";

export const Modal: React.FC<IChildrenElement> = ({
  children,
  modalTitle,
  modalId,
}) => {
  return (
    <>
      {children}
      <div
        className="modal fade"
        id={`staticBackdrop-${modalId}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="staticBackdropLabel"
                title="Расширенный просмотр"
              >
                👀
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Закрыть"
              ></button>
            </div>
            <div style={{ fontSize: "1.2rem" }}>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
