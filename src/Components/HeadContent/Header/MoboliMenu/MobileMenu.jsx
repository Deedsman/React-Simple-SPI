import React from "react";
import cls from "./MobileMenu.module.css";

const MobileMenu = () => {
  return (
    <div className={cls.mobileMenu_container}>
      <input type="checkbox" className={cls.mob_toggler} />
      <div className={cls.hamburger_btn}>
        <div></div>
      </div>
      <div className={cls.mobileMenu_block}>
        <div>
          <ul className={cls.mobile_list}>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()}></a>Главная
              <div className={cls.wrapperlang}>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <img src="./lUkraine.png" alt="logo" />
                </a>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <img src="./lEnglish.png" alt="logo" />
                </a>
                <a href="#" onClick={(e) => e.preventDefault()}>
                  <img src="./lPoland.png" alt="logo" />
                </a>
              </div>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()}></a>Услуги
              <span>></span>
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()}></a>Наши работы
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()}></a>О нас
            </li>
            <li>
              <a href="#" onClick={(e) => e.preventDefault()}></a>Контакты
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
