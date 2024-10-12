import React from "React";

export default class Truck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: props.model,
    };
  }
  render() {
    return <h2>Hi, I am a {this.props.model} Truck!</h2>;
  }
}
