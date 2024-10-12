/*export default function Color({ teint }) {
  return <h2>Hi, I am {teint} Car!</h2>;
}*/

// export default function LastName({ LastName }) {
//   return <h3>Mon nom est Hicham et mon LastName est {LastName} </h3>;
// }
//Avec la class

/*import { Component } from "react";

export default class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teint: props.teint,
    };
  }
  render() {
    console.log(this);
    return <h2>Hi, I am a {this.props.teint} Truck!</h2>;
  }
}
*/
import { Component } from "react";
export default class HelloWorld extends Component {
  render() {
    console.log(this);
    return <h1>Hi, my name Hicham and my LastName is {this.props.LastName}</h1>;
  }
}
