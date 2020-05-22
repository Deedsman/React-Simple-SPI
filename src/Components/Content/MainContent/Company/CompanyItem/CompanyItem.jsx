import React, { useState, useEffect } from "react";
import cls from "./CompanyItem.module.css";

const CompanyItem = (props) => {
  const [windowWidth, setWindowWidth] = useState(0);

  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return (
    <div className={cls.itemBlock}>
      <div className={cls.ib_subBlock}>
        <div className={cls.image}>
          {windowWidth <= 568 ? (
            <img
              id={props.companymob[0].id}
              src={props.companymob[0].image}
              alt={props.companymob[0].name}
            />
          ) : (
            <img
              id={props.companyImage[0].id}
              src={props.companyImage[0].image}
              alt={props.companyImage[0].name}
            />
          )}
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
          {window.innerWidth <= 568 ? (
            <img
              id={props.companymob[1].id}
              src={props.companymob[1].image}
              alt={props.companymob[1].name}
            />
          ) : (
            <img
              id={props.companyImage[1].id}
              src={props.companyImage[1].image}
              alt={props.companyImage[1].name}
            />
          )}
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
