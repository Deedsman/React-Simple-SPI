import React from "react";
import cls from "./Company.module.css";
import CompanyItem from "./CompanyItem/CompanyItem";

const Company = props => {
  // debugger;

  //     id={i[0].id}
  //     imag={i.image}
  //     name={i.name}
  //     textTitle={i.textTitle}
  //     text={i.text}

  return (
    <div className={cls.services}>
      <h1 className={cls.s_title}>Наша компания</h1>
      <div className={cls.s_block}>
        <CompanyItem
          companyImage={props.companyTviceBlock.companyImage}
          // id={i.id}
          // image={i.image}
          // name={i.name}
          // textTitle={i.textTitle}
          // text={i.text}
        />
      </div>
    </div>
  );
};

export default Company;
