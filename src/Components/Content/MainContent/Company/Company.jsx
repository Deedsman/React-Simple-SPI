import React from "react";
import cls from "./Company.module.css";
import CompanyItem from "./CompanyItem/CompanyItem";

const Company = (props) => {
  return (
    <div className={cls.services}>
      <h1 className={cls.s_title}>Наша компания</h1>
      <div className={cls.s_block}>
        <CompanyItem
          companyImage={props.companyTviceBlock.companyImage}
          companymob={props.companyMobileBlock.companyMobImage}
        />
      </div>
    </div>
  );
};

export default Company;
