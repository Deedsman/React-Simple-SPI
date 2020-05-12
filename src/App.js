import React from "react";
//import logo from "./logo.svg";
import "./App.scss";
import HeadContent from "./Components/HeadContent/HeadContent";
import ServicePage from "./Components/ServicePage/ServicePage";
import Company from "./Components/Company/Company";
import Footer from "./Components/Footer/Footer";

const App = props => {
  return (
    <div className="App constant">
      <HeadContent slideImage={props.state.slideImage} />
      <ServicePage servImage={props.state.servImage} />
      <Company companyTviceBlock={props.state.companyTviceBlock} />
      <Footer />
    </div>
  );
};

export default App;
