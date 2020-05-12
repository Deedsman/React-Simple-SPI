import React from "react";
import cls from "./Header.module.css";
import Navbar from "./Navbar/Navbar";
import RightBlock from "./RightBlock/RightHeaderBlock";

let Header = () => {
  return (
    <div className={cls.headers}>
      <div className={cls.logo}>
        <a href="#" onClick={e => e.preventDefault()}>
          <img src="./logo.png" alt="logo" />
        </a>
      </div>
      <Navbar />
      <RightBlock />
    </div>
  );
};

export default Header;
