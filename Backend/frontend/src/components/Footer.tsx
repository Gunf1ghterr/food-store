import {NavLink} from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-light text-dark pt-1">
      <div className="container">
        <div className="row mb-3 text-center">
          <div className="col-md-4">
            <NavLink className="text-dark no-underline" to="/agreement">Пользовательские соглашения</NavLink>
          </div>
          <div className="col-md-4">
            <NavLink className="text-dark no-underline" to="/privacy-policy">Политика конфиденциальности </NavLink>
          </div>
          <div className="col-md-4">
            <NavLink className="text-dark no-underline" to="/payments">Правила оплаты</NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>Разработали Соловей Р. и Пермяков С. для курсового проекта.<br />
            2023</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

