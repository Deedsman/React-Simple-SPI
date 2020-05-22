import React from "react";
import "./App.scss";
import HeadContent from "./Components/HeadContent/HeadContent";
import Footer from "./Components/Footer/Footer";
import MainContent from "./Components/Content/MainContent/MainContent";
import { Route } from "react-router-dom";
import Services from "./Components/Content/Services/Services";
import OurWorks from "./Components/Content/OurWorks/OurWorks";
import About from "./Components/Content/About/About";
import Contacts from "./Components/Content/Contacts/Contacts";
import MainContentContainer from "./Components/Content/MainContent/MainContentContainer";

const App = (props) => {
  debugger;

  return (
    <div className="App constant">
      <HeadContent />
      <div className="contRouter">
        <Route
          exact
          path="/"
          render={() => <MainContent state={props.state} />}
        />
        <Route
          exact
          path="/and:id?"
          render={() => <MainContentContainer state={props.state} />}
        />
        <Route
          exact
          path="/services"
          render={() => <Services state={props.state} />}
        />

        <Route exact path="/ourworks" render={() => <OurWorks />} />
        <Route exact path="/about" render={() => <About />} />
        <Route exact path="/contacts" render={() => <Contacts />} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
