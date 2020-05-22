import React from "react";
import cls from "./SliderItem.module.css";

const SliderItem = props => {
  return (
    <div className={cls.header}>
      <img className={cls.headerslider} src={props.image} />
    </div>
  );
};

export default SliderItem;
