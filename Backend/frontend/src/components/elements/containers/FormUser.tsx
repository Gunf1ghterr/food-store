import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { SendNewUserData } from "../../functions/SendNewUserData";
import moment from "moment";

export const FormUser: React.FC = () => {
  const { user } = useAuth();
  const [edit, setEdit] = useState(false);
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState<Date | null>(null);

  useEffect(() => {
    setUsername(user?.username as string);
    setPhone(user?.phone as string);
    setEmail(user?.email as string);
    setBirthday(user?.birthday as Date);
  }, [user]);
  return (
    <form action="api/new_user_data" method="POST" id="user-form">
      <div className="mb-3 tooltip-element" tooltip-title={`ID пользователя`}>
        <input
          type="text"
          className="form-control"
          id="user-id"
          name="user-id"
          form="user-form"
          placeholder="ID пользователя"
          value={user?.id || ""}
          disabled
        />
      </div>
      <div className="mb-3 tooltip-element" tooltip-title={`Дата регистрации`}>
        <input
          type="text"
          className="form-control"
          id="user-date"
          name="user-date"
          form="user-form"
          placeholder="Дата регистрации"
          value={moment(user?.date).format("DD.MM.YYYY")}
          disabled
        />
      </div>

      <div
        className="mb-3 tooltip-element"
        tooltip-title={`День рождения (дд.мм.гггг)`}
      >
        <input
          type="text"
          className="form-control"
          id="user-birthday"
          name="user-birthday"
          form="user-form"
          placeholder="День рождения"
          onChange={(e) => {
            const parts = e.target.value.split("."); // Разбиваем строку по символу "."
            const day = parseInt(parts[0], 10); // Получаем день и преобразуем его в число
            const month = parseInt(parts[1], 10) - 1; // Получаем месяц и преобразуем его в число (0 - январь, 1 - февраль, и т.д.)
            const year = parseInt(parts[2], 10); // Получаем год и преобразуем его в число
            const date = new Date(year, month, day); // Создаем объект даты
            setBirthday(date); // Устанавливаем значение в состояние
          }}
          value={birthday?.toLocaleDateString("ru-RU") || ""}
          disabled={!edit}
          required
        />
      </div>
      <div className="mb-3 tooltip-element" tooltip-title={`Имя`}>
        <input
          type="text"
          className="form-control"
          id="user-username"
          name="user-username"
          form="user-form"
          placeholder="Имя"
          value={username || ""}
          disabled={!edit}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="mb-3 tooltip-element" tooltip-title={`Телефон`}>
        <input
          type="tel"
          className="form-control"
          id="user-phone"
          name="user-phone"
          form="user-form"
          placeholder="Телефон"
          value={phone || ""}
          disabled={!edit}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="mb-3 tooltip-element" tooltip-title={`Электронная почта`}>
        <input
          type="email"
          className="form-control"
          id="user-email"
          name="user-email"
          form="user-form"
          placeholder="Электронная почта"
          value={email || ""}
          disabled={!edit}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="d-flex justify-content-end">
        {!edit && (
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => setEdit(!edit)}
          >
            Редактировать
          </button>
        )}

        {(username !== user?.username ||
          phone !== user?.phone ||
          email !== user?.email ||
          birthday !== user?.birthday) && (
          <button
            className="btn btn-success"
            form="user-form"
            type="submit"
            onClick={SendNewUserData(username, phone, email, birthday as Date)}
          >
            Сохранить
          </button>
        )}

        {edit && (
          <button
            className="btn btn-danger mx-2"
            onClick={() => {
              setEdit(!edit);
              setUsername(user?.username as string);
              setPhone(user?.phone as string);
              setEmail(user?.email as string);
            }}
          >
            Отменить
          </button>
        )}
      </div>
    </form>
  );
};
