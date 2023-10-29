import { NavLink } from "react-router-dom";

export const NavbarMenu: React.FC = () => {
  return (
    <nav className="navbar navbar-menu-sticky">
      <div className="container bg-body-tertiary rounded-5">
        <NavLink className="nav-link d-inline p-2" to="#">
          Все
        </NavLink>
        <NavLink className="nav-link d-inline p-2" to="#">
          Комбо
        </NavLink>
        <NavLink className="nav-link d-inline p-2" to="#">
          Говядина
        </NavLink>
        <NavLink className="nav-link d-inline p-2" to="#">
          Курица
        </NavLink>
        <NavLink className="nav-link d-inline p-2" to="#">
          Закуски
        </NavLink>
        <NavLink className="nav-link d-inline p-2" to="#">
          Десерты
        </NavLink>
        <NavLink className="nav-link d-inline p-2" to="#">
          Напитки
        </NavLink>
      </div>
    </nav>
  );
};
