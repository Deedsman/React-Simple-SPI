import React from "react";
import cls from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={cls.nav}>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Главная</NavLink>
            <span></span>
          </li>
          <li>
            <NavLink to="/services">Услуги</NavLink>

            <span></span>
          </li>
          <li>
            <NavLink to="/ourworks">Наши работы</NavLink>
            <span></span>
          </li>
          <li>
            <NavLink to="/about">О нас</NavLink>
            <span></span>
          </li>
          <li>
            <NavLink to="/contacts">Контакты</NavLink>
            <span></span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
