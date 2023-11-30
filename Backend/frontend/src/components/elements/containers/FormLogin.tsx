import { SendLogin } from "../../functions/SendLogin";
import { InputChanged } from "../../functions/InputChenged";
import { useLogin } from "../../../hooks/useLogin";
import React from "react";

export const FormLogin: React.FC = () => {
  const { mutate } = useLogin();
  return (
    <form
      action="api/user/login"
      method="POST"
      id="login-form"
      name="login-form"
    >
      <div className="form-group">
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="loginMailInput"
            name="loginMailInput"
            required
            placeholder="Почта"
            onChange={InputChanged}
            form="login-form"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="loginPasswordInput"
            name="loginPasswordInput"
            required
            placeholder="Пароль"
            onChange={InputChanged}
            form="login-form"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={SendLogin(mutate)}
          form="login-form"
        >
          Войти
        </button>
      </div>
      <div
        className="alert alert-danger d-none m-3"
        id="loginAlert"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.currentTarget.classList.add("d-none");
        }}
      ></div>
    </form>
  );
};
