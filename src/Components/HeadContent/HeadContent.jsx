import React from "react";
import "./HeadContent.css";

import Slider from "infinite-react-carousel";
import SliderItem from "./SliderItem/SliderItem";
import Header from "./Header/Header";

const HeadContent = props => {
  let imageMap = props.slideImage.map(i => (
    <SliderItem id={i.id} image={i.image} name={i.name} />
  ));

  return (
    <div className="header">
      <Header />
      <div className="Carusel">
        <Slider {...settings}>{imageMap}</Slider>
      </div>
    </div>
  );
};

const settings = {
  arrows: false,
  dots: true,
  autoplay: false,
  dotsClass: "carousel-dots",
  Class: "carousel-track"
};

export default HeadContent;
