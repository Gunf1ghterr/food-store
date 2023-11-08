import { SendLogin } from "../../functions/SendLogin";
import { InputChanged } from "../../functions/InputChenged";

export const FormLogin: React.FC = () => {
  return (
    <form action="api/login" method="POST" id="login-form" name="login-form">
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
      <div className="modal-footer">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={SendLogin()}
          form="login-form"
        >
          Войти
        </button>
      </div>
      <div
        className="alert alert-danger d-none mx-3"
        id="loginAlert"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.currentTarget.classList.add("d-none");
        }}
      >
        Для входа необходимо заполнить все обязательные поля
      </div>
    </form>
  );
};
