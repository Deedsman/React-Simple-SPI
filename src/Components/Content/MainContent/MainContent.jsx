import React from "react";
import "../../../App.scss";
import Company from "./Company/Company";
import Slider from "infinite-react-carousel";
import SliderItem from "./SliderItem/SliderItem";
import ServicePageContainer from "./ServicePage/ServicePageContainer";

const MainContent = (props) => {
  debugger;
  let imageMap = props.state.slideImage.map((i) => (
    <SliderItem key={i.id} image={i.image} name={i.name} />
  ));
  return (
    <div className="App constant">
      <div className="Carusel">
        <Slider {...settings}>{imageMap}</Slider>
      </div>

      <ServicePageContainer
        servImage={props.state.servImage}
        servicePage={props.state.servicePage}
      />

      <Company
        companyTviceBlock={props.state.companyTviceBlock}
        companyMobileBlock={props.state.companyMobileBlock}
      />
    </div>
  );
};

export default MainContent;

const settings = {
  arrows: false,
  dots: true,
  autoplay: true,
  dotsClass: "carousel-dots",
  Class: "carousel-track",
};
