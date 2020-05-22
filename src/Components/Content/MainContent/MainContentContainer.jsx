import React from "react";
import { withRouter } from "react-router-dom";
import MainContent from "./MainContent";

class MainContentContainer extends React.Component {
  // componentDidMount() {
  //   debugger;
  //   alert("montirovana");

  //   if (Number(this.props.match.params.id) == NaN) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  render() {
    return (
      <div>
        <MainContent state={this.props.state} match={this.props.match} />
      </div>
    );
  }
}

const WithRouterMainContent = withRouter(MainContentContainer);

export default WithRouterMainContent;
