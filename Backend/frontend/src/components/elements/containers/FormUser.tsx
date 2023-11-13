import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { SendNewUserData } from "../../functions/SendNewUserData";

export const FormUser: React.FC = () => {
  const { user } = useAuth();
  const [edit, setEdit] = useState(false);
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    setUsername(user?.username as string);
    setPhone(user?.phone as string);
    setEmail(user?.email as string);
    setBirthday(user?.birthday as string);
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
          value={user?.date || ""}
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
          onChange={(e) => setBirthday(e.target.value)}
          value={birthday || ""}
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
      <div>
        {!edit && (
          <button
            type="button"
            className="btn btn-primary"
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
            onClick={SendNewUserData(username, phone, email, birthday)}
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
            Отменить редактирование
          </button>
        )}
      </div>
    </form>
  );
};
