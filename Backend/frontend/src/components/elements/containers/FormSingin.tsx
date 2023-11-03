import { SendSingin } from "../../functions/SendSingin";
export const FormSingin: React.FC = () => {
  return (
    <form action="api/login" method="POST">
      <div className="form-group ">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="singinNameInput"
            name="singinNameInput"
            required
            placeholder="Введите ваше имя"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.currentTarget.classList.remove("error");
            }}
          />
        </div>

        <div
          className="mb-3 tooltip-element"
          tooltip-title={`Номер должен начинаться с 8 и содержать 11 цифр.`}
        >
          <input
            type="tel"
            className="form-control"
            id="singinTelInput"
            name="singinTelInput"
            required
            placeholder="Укажите действующий номер телефона"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.currentTarget.classList.remove("error");
            }}
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="singinMailInput"
            name="singinMailInput"
            required
            placeholder="Укажите действующую почту"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.currentTarget.classList.remove("error");
            }}
          />
        </div>

        <div
          className="mb-3 tooltip-element"
          tooltip-title={`Пароль должен cодержать не менее 8 символов.`}
        >
          <input
            type="password"
            className="form-control tooltip-element"
            id="singinPasswordInput"
            name="singinPasswordInput"
            required
            placeholder="Придумайте пароль"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.currentTarget.classList.remove("error");
            }}
          />
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="submit"
          className="btn btn-success"
          onClick={SendSingin()}
        >
          Зарегестрироваться
        </button>
      </div>
      <div
        className="alert alert-danger d-none mx-3"
        id="singinAlert"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.currentTarget.classList.add("d-none");
        }}
      >
        Для регистрации необходимо заполнить все обязательные поля
      </div>
    </form>
  );
};
