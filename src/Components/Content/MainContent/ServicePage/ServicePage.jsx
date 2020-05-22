import React from "react";
import cls from "./ServicePage.module.css";
import ServiceItem from "./ServiceItem/ServiceItem";
import { ScrollRotate } from "react-scroll-rotate";
import { NavLink } from "react-router-dom";
import ServiceDirectionContainer from "./ServiceDireaction/ServiceDirectionContainer";

const ServicePage = (props) => {
  const {
    params: { id },
  } = props.match;
  let serviceItem = props.servImage.map((i, index) => (
    <NavLink to={"and" + i.id}>
      <ServiceItem key={i.id} image={i.image} name={i.name} text={i.text} />
    </NavLink>
  ));

  return (
    <div className={cls.services}>
      <h1 className={cls.s_title}>Услуги</h1>
      <div className={cls.s_sharnir_area}>
        <div className={cls.s_sharnir_area_left}>
          <div className={cls.s_sharnir_block1}>
            <ScrollRotate method={"perc"} loops={1}>
              <img className={cls.s_Shar5} src="./sharnir1.png" />
            </ScrollRotate>
          </div>
          <div className={cls.s_sharnir_block2}>
            <ScrollRotate method={"perc"} loops={1}>
              <img className={cls.s_Shar3} src="./sharnir3.png" />
            </ScrollRotate>
          </div>
          <div className={cls.s_sharnir_block3}>
            <ScrollRotate method={"perc"} loops={-1}>
              <img className={cls.s_Shar2} src="./sharnir2.png" />
            </ScrollRotate>
          </div>
        </div>
        <div className={cls.s_sharnir_area_right}>
          <div className={cls.s_sharnir_block6}>
            <ScrollRotate method={"perc"} loops={-1}>
              <img className={cls.s_Shar2} src="./sharnir2.png" />
            </ScrollRotate>
          </div>
          <div className={cls.s_sharnir_block5}>
            <ScrollRotate method={"perc"} loops={1}>
              <img className={cls.s_Shar3} src="./sharnir3.png" />
            </ScrollRotate>
          </div>

          <div className={cls.s_sharnir_block4}>
            <ScrollRotate method={"perc"} loops={1}>
              <img className={cls.s_Shar5} src="./sharnir1.png" />
            </ScrollRotate>
          </div>
        </div>
      </div>

      {id > 0 ? (
        <div className={cls.s_services_popup}>
          <ServiceDirectionContainer servicePage={props.servicePage} />
        </div>
      ) : (
        <div className={cls.s_block}>{serviceItem}</div>
      )}
      {/* <div className={cls.s_block}>{serviceItem}</div> */}
      <button type="button" className={cls.s_calculate}>
        Быстрый рвсчет по чертежу
      </button>
      <button type="button" className={cls.s_calculate_mobile}>
        Расчет стоимости
      </button>
    </div>
  );
};

export default ServicePage;
