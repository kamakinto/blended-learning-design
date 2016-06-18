import React from "react";


export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    /** BASIC LOGIC STARTS HERE **/

    const name = "Robbie";

    /** BASIC LOGIC STOPS HERE **/
    return (
      <div>
          <h1> Blended Learning Builder</h1>
      </div>
    );
  }
}
