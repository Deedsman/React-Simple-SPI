import React from "react";
import cls from "./../Footer.module.css";

const FooterDesktop = (props) => {
  return (
    <div className={cls.centered}>
      <div className={cls.about}>
        <h3>O компании</h3>
        <a href="#">Наши работы</a>
        <a href="#">Контакты</a>
        <a href="#">Доставка</a>
        <a href="#">Форма заказа</a>
      </div>
      <div className={cls.service}>
        <h3>Услуги</h3>
        <div className={cls.s_center}>
          <div className={cls.service_block}>
            <a href="#">Производство оборудования</a>
            <a href="#">Металлическая мебель</a>
            <a href="#">Металлоконструкции</a>
            <a href="#">Металлообработка</a>
          </div>
          <div className={cls.service_block}>
            <a href="#">Раскрой металла</a>
            <a href="#">Конструкторское бюро </a>
            <a href="#">Аренда техники</a>
            <a href="#">Ремонт техники</a>
          </div>
        </div>
      </div>
      <div className={cls.contact}>
        <div className={cls.contacnt_block}>
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

export default FooterDesktop;
