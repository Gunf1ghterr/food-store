import { NavLink } from "react-router-dom";
import React from "react";

export const ErrorPage: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div
            className="alert alert-danger my-3"
            style={{
              position: "fixed",
              top: "50%",
              right: "50%",
              transform: "translate(50%, -50%)",
            }}
            role="alert"
          >
            <p className="h3">
              Что-то пошло не так, вернитесь на{" "}
              <NavLink to="/">главную</NavLink> страницу.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
