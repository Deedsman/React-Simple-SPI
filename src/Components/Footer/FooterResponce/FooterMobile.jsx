import React from "react";
import cls from "./../Footer.module.css";

const FooterMobile = (props) => {
  return (
    <div className={cls.mob_centered}>
      <div className={cls.mob_list}>
        <div className={cls.mob_about}>
          <h3>O компании</h3>
          <a href="#">Наши работы</a>
          <a href="#">Контакты</a>
          <a href="#">Доставка</a>
          <a href="#">Форма заказа</a>
        </div>
        <div className={cls.mob_service}>
          <h3>Услуги</h3>
          <div className={cls.mob_center}>
            <a href="#">Производство оборудования</a>
            <a href="#">Арт-объекты</a>
            <a href="#">Металлическая мебель</a>
            <a href="#">Металлообработка</a>
            <a href="#">Лазерная резка</a>
            <a href="#">Металлоконструкции</a>
            <a href="#">Аренда спецтехники</a>
          </div>
        </div>
      </div>
      <div className={cls.mob_contact}>
        <div className={cls.mob_contacnt_block}>
          <h3>Контактная информация</h3>
          <p>
            Заводская улица, 2В,Буча,<span>Киевская область, 08292</span>
          </p>
          <p>ПН - ПТ: 09:00 - 18:00</p>
          <p>+38(097)123-45-67</p>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
