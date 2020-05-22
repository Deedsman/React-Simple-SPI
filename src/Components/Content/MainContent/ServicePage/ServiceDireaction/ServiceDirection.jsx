import React from "react";
import cls from "./ServiceDirection.module.css";
const ServiceDirection = ({ match, servicePage, history }) => {
  const {
    params: { id },
  } = match;
  return (
    <>
      <div className={cls.services}>
        <button className={cls.button} onClick={history.goBack}>
          Назад
        </button>
        <div className={cls.sd_container}>
          <img className={cls.img} src={servicePage[id - 1].image} alt="" />
          <div className={cls.s_description}>
            <p className={cls.text}>{servicePage[id - 1].text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDirection;
