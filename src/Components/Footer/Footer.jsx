import React, { useState, useEffect } from "react";
import cls from "./Footer.module.css";
import FooterDesktop from "./FooterResponce/FooterDesktop";
import FooterMobile from "./FooterResponce/FooterMobile";

const Footer = (props) => {
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
    <div className={cls.responce}>
      {window.innerWidth <= 568 ? <FooterMobile /> : <FooterDesktop />}
    </div>
  );
};

export default Footer;
