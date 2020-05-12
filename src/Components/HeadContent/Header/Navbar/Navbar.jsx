import React from "react";
import cls from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={cls.nav}>
      <nav>
        <ul>
          <li>
            <a href="#" onClick={e => e.preventDefault()}></a>Главная
            <span></span>
          </li>
          <li>
            <a href="#" onClick={e => e.preventDefault()}></a>Услуги
            <span></span>
          </li>
          <li>
            <a href="#" onClick={e => e.preventDefault()}></a>Наши работы
            <span></span>
          </li>
          <li>
            <a href="#" onClick={e => e.preventDefault()}></a>О нас
            <span></span>
          </li>
          <li>
            <a href="#" onClick={e => e.preventDefault()}></a>Контакты
            <span></span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
