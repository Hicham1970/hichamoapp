// export default function Car({ color }) {
//   return <h2>Hi, I am {color} Car!</h2>;
// }

//Avec la class

import { Component } from "react";

export default class Car extends Component {
  render() {
    return <h2>Hi, I am a Truck!</h2>;
  }
}
