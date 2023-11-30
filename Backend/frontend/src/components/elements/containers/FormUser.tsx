import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { SendNewUserData } from "../../functions/SendNewUserData";
import moment from "moment";
import { useUpdateUser } from "../../../hooks/useUpdateUser";
import { useDeleteUser } from "../../../hooks/useDeleteUser";
import React from "react";

export const FormUser: React.FC = () => {
  const { user } = useAuth();
  const { mutate: updateUser } = useUpdateUser();
  const [edit, setEdit] = useState(false);
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const { mutate: deleteUser } = useDeleteUser(user?.id as number);

  useEffect(() => {
    setUsername(user?.name as string);
    setPhone(user?.phone as string);
    setEmail(user?.mail as string);
    setBirthday(user?.birthday as string);
  }, [user]);
  return (
    <form action="api/new_user_data" method="POST" id="user-form">
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
          id="userBirthday"
          name="userBirthday"
          form="user-form"
          placeholder="День рождения"
          onChange={(e) => {
            setBirthday(e.target.value);
          }}
          value={birthday as string}
          disabled={!edit}
          required
        />
      </div>
      <div className="mb-3 tooltip-element" tooltip-title={`Имя`}>
        <input
          type="text"
          className="form-control"
          id="userUsername"
          name="userUsername"
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
          id="userPhone"
          name="userPhone"
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
          id="userMail"
          name="userMail"
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

        {(username !== user?.name ||
          phone !== user?.phone ||
          email !== user?.mail ||
          birthday !== user?.birthday) && (
          <button
            className="btn btn-success"
            form="user-form"
            type="submit"
            onClick={SendNewUserData(updateUser)}
          >
            Сохранить
          </button>
        )}

        {edit && (
          <button
            className="btn btn-danger mx-2"
            onClick={() => {
              setEdit(!edit);
              setUsername(user?.name as string);
              setPhone(user?.phone as string);
              setEmail(user?.mail as string);
            }}
          >
            Отменить
          </button>
        )}
      </div>
      {!edit && (
        <>
          <div className="d-flex justify-content-end mt-3">
            <button
              className="btn btn-danger"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapseDeleteUserData`}
              aria-expanded="false"
              aria-controls={`collapseDeleteUserData`}
              title="Отменить заказ"
            >
              Удалить данные
            </button>
          </div>
          <div className="collapse" id={`collapseDeleteUserData`}>
            <div className="card card-body mt-1">
              Вы уверены что хотите удалить все данные? <br />
              Отзывы и заказы будут так же удалены.
              <div className="d-flex justify-content-end mt-1">
                <button
                  type="button"
                  className="btn btn-danger mx-2"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapseDeleteUserData`}
                  onClick={() => {
                    deleteUser(user?.id as number);
                  }}
                >
                  Да
                </button>
                <button
                  type="button"
                  className="btn btn-dark"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapseDeleteUserData`}
                >
                  Нет
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <div
        className="alert alert-danger d-none m-3"
        id="userUpdateAlert"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.currentTarget.classList.add("d-none");
        }}
      ></div>
      <button
        type="button"
        className="d-none"
        id="cencel-user-update"
        onClick={() => setEdit(!edit)}
      />
    </form>
  );
};
