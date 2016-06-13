import React from "react";
import Header from "./Header";
import {Link} from "react-router";




export default class Main extends React.Component {

  render() {
    const { location } = this.props;
    return (
      <div>

        <div class="container">
          <div class="row">
            <div class="col-lg-12">
        <Header />
            {React.cloneElement(this.props.children, this.props)}
            </div>
            </div>

      </div>
      </div>
    );
  }
}
