import { Component } from "react";

export default class Vessel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Cargo Vessel",
      model: "Box ship",
      color: "red ",
      year: 1994,
    };
  }
  // add a button to change the color:
  changeColor = () => {
    this.setState({ color: "blue " });
  };
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <br></br>
        <p>
          It is a {this.state.color}
          {this.state.model} from {this.state.year}.
        </p>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}
