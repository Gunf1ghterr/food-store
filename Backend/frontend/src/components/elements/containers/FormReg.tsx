import { SendReg } from "../../functions/SendReg";
import { InputChanged } from "../../functions/InputChenged";

export const FormReg: React.FC = () => {
  return (
    <form action="api/login" method="POST" id="reg-form" name="reg-form">
      <div className="form-group ">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="regNameInput"
            name="regNameInput"
            required
            placeholder="Введите ваше имя"
            onChange={InputChanged}
            form="reg-form"
          />
        </div>

        <div
          className="mb-3 tooltip-element"
          tooltip-title={`Номер должен начинаться с 8 и содержать 11 цифр`}
        >
          <input
            type="tel"
            className="form-control"
            id="regTelInput"
            name="regTelInput"
            required
            placeholder="Укажите действующий номер телефона"
            onChange={InputChanged}
            form="reg-form"
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="regMailInput"
            name="regMailInput"
            required
            placeholder="Укажите действующую почту"
            onChange={InputChanged}
            form="reg-form"
          />
        </div>

        <div
          className="mb-3 tooltip-element"
          tooltip-title={`Пароль должен cодержать не менее 8 символов.`}
        >
          <input
            type="password"
            className="form-control"
            id="regPasswordInput"
            name="regPasswordInput"
            required
            placeholder="Придумайте пароль"
            onChange={InputChanged}
            form="reg-form"
          />
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="submit"
          className="btn btn-success"
          onClick={SendReg()}
          form="reg-form"
        >
          Зарегестрироваться
        </button>
      </div>
      <div
        className="alert alert-danger d-none mx-3"
        id="regAlert"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.currentTarget.classList.add("d-none");
        }}
      >
        Для регистрации необходимо заполнить все обязательные поля
      </div>
    </form>
  );
};
