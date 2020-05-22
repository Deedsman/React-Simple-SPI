import React from "react";
import cls from "./ServicePage.module.css";
import { withRouter } from "react-router-dom";
import ServicePage from "./ServicePage";

class ServicePageContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={cls.services}>
        <ServicePage
          match={this.props.match}
          servImage={this.props.servImage}
          servicePage={this.props.servicePage}
        />
      </div>
    );
  }
}

let WithDataServiceContainerComponent = withRouter(ServicePageContainer);

export default WithDataServiceContainerComponent;
