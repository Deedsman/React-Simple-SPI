import React from "react";
import cls from "./ServiceItem.module.css";

const ServiceItem = (props) => {
  return (
    <div className={cls.itemBlock}>
      <div className={cls.image}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={cls.i_textblock}>
        <h5 className={cls.it_text}>{props.text}</h5>
      </div>
    </div>
  );
};

export default ServiceItem;
