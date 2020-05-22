import React from "react";
import cls from "./ServiceDirection.module.css";
import ServiceDirection from "./ServiceDirection";
import { withRouter } from "react-router-dom";
class ServiceDirectionContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={cls.services}>
        <ServiceDirection
          match={this.props.match}
          history={this.props.history}
          servicePage={this.props.servicePage}
        />
      </div>
    );
  }
}
let WithDataContainerComponent = withRouter(ServiceDirectionContainer);

export default WithDataContainerComponent;
