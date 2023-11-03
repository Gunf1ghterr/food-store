import { SendReg } from "../../functions/SendReg";
export const FormReg: React.FC = () => {
  return (
    <form action="api/login" method="POST"
    id="reg-form"
    name="reg-form"
    >
      <div className="form-group ">
        <div className="mb-5">
          <input
            type="text"
            className="form-control"
            id="regNameInput"
            name="regNameInput"
            required
            placeholder="Введите ваше имя"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.currentTarget.classList.remove("error");
            }}
            form="reg-form"
          />
        </div>

        <div
          className="mb-5 tooltip-element"
          tooltip-title={`Номер должен начинаться с 8 и содержать 11 цифр.`}
        >
          <input
            type="tel"
            className="form-control"
            id="regTelInput"
            name="regTelInput"
            required
            placeholder="Укажите действующий номер телефона"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.currentTarget.classList.remove("error");
            }}
            form="reg-form"
          />
        </div>

        <div className="mb-5">
          <input
            type="email"
            className="form-control"
            id="regMailInput"
            name="regMailInput"
            required
            placeholder="Укажите действующую почту"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.currentTarget.classList.remove("error");
            }}
            form="reg-form"
          />
        </div>

        <div
          className="mb-5 tooltip-element"
          tooltip-title={`Пароль должен cодержать не менее 8 символов.`}
        >
          <input
            type="password"
            className="form-control tooltip-element"
            id="regPasswordInput"
            name="regPasswordInput"
            required
            placeholder="Придумайте пароль"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.currentTarget.classList.remove("error");
            }}
            form="reg-form"
          />
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="submit"
          className="btn btn-success"
          onClick={SendReg()}
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
