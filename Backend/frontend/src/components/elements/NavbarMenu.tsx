import { useLocation, NavLink } from "react-router-dom";
import React from "react";

export const NavbarMenu: React.FC = () => {
  const param: string | null = new URLSearchParams(useLocation().search).get(
    "param"
  );

  return (
    <nav className="navbar navbar-menu-sticky">
      <div
        className="container col-10 bg-body-tertiary rounded-5"
        style={{ boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.4)" }}
      >
        <NavLink
          className={`nav-link d-inline p-2 ${
            param === "all" || param === null
              ? "link-primary selected-link"
              : ""
          }`}
          to={{ pathname: "/", search: "?param=all" }}
        >
          Все
        </NavLink>
        <NavLink
          className={`nav-link d-inline p-2 ${
            param === "combo" ? "link-primary selected-link" : ""
          }`}
          to={{ pathname: "/", search: "?param=combo" }}
        >
          Комбо
        </NavLink>
        <NavLink
          className={`nav-link d-inline p-2 ${
            param === "beef" ? "link-primary selected-link" : ""
          }`}
          to={{ pathname: "/", search: "?param=beef" }}
        >
          Говядина
        </NavLink>
        <NavLink
          className={`nav-link d-inline p-2 ${
            param === "chicken" ? "link-primary selected-link" : ""
          }`}
          to={{ pathname: "/", search: "?param=chicken" }}
        >
          Курица
        </NavLink>
        <NavLink
          className={`nav-link d-inline p-2 ${
            param === "snacks" ? "link-primary selected-link" : ""
          }`}
          to={{ pathname: "/", search: "?param=snacks" }}
        >
          Закуски
        </NavLink>
        <NavLink
          className={`nav-link d-inline p-2 ${
            param === "desserts" ? "link-primary selected-link" : ""
          }`}
          to={{ pathname: "/", search: "?param=desserts" }}
        >
          Десерты
        </NavLink>
        <NavLink
          className={`nav-link d-inline p-2 ${
            param === "drinks" ? "link-primary selected-link" : ""
          }`}
          to={{ pathname: "/", search: "?param=drinks" }}
        >
          Напитки
        </NavLink>
      </div>
    </nav>
  );
};
