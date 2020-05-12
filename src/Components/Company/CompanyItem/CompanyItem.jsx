import React from "react";
import cls from "./CompanyItem.module.css";

const CompanyItem = props => {
  // debugger;
  // let companyImage = props.companyImage.map(i => (

  //     id={i[0].id}
  //     imag={i.image}
  //     name={i.name}
  //     textTitle={i.textTitle}
  //     text={i.text}

  // ));
  return (
    <div className={cls.itemBlock}>
      <div className={cls.ib_subBlock}>
        <div className={cls.image}>
          <img
            id={props.companyImage[0].id}
            src={props.companyImage[0].image}
            alt={props.companyImage[0].name}
          />
        </div>
        <div className={cls.i_textblock}>
          <h5 className={cls.it_titleText}>
            {props.companyImage[0].textTitle}
          </h5>
          <p className={cls.it_text}>{props.companyImage[0].text}</p>
        </div>
      </div>
      <div className={cls.ib_subBlock}>
        <div className={cls.image}>
          <img
            id={props.companyImage[1].id}
            src={props.companyImage[1].image}
            alt={props.companyImage[1].name}
          />
        </div>
        <div className={cls.i_textblockRight}>
          <h5 className={cls.it_titleText}>
            {props.companyImage[1].textTitle}
          </h5>
          <p className={cls.it_text}>{props.companyImage[1].text}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyItem;
