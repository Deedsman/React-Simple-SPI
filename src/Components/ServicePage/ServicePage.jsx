import React from "react";
import cls from "./ServicePage.module.css";
import ServiceItem from "./ServiceItem/ServiceItem";
import { ScrollRotate } from "react-scroll-rotate";

const ServicePage = (props) => {
  let serviceItem = props.servImage.map((i) => (
    <ServiceItem id={i.id} image={i.image} name={i.name} text={i.text} />
  ));

  return (
    <div className={cls.services}>
      <h1 className={cls.s_title}>Услуги</h1>
      <ScrollRotate method={"perc"} loops={1}>
        <div>
          <img className={cls.s_Shar5} src="./sharnir1.png" />
        </div>
      </ScrollRotate>
      {/* <div className={cls.s_Sharnir}>
        <div className={cls.s_leftSharnir}>
          <ScrollRotate>
            <img className={cls.s_Shar1} src="./sharnir1.png" />
          </ScrollRotate>
          <img className={cls.s_Shar2} src="./sharnir2.png" />
          <img className={cls.s_Shar3} src="./sharnir3.png" />
        </div>
        <div className={cls.s_rightSharnir}>
          <img className={cls.s_Shar3} src="./sharnir3.png" />
          <img className={cls.s_Shar1} src="./sharnir1.png" />
          <img className={cls.s_Shar2} src="./sharnir2.png" />
        </div>
      </div> */}
      <div className={cls.s_block}>{serviceItem}</div>
      <button type="button" className={cls.s_calculate}>
        Быстрый рвсчет по чертежу
      </button>
    </div>
  );
};

export default ServicePage;
