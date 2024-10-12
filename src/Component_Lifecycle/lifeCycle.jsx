import { component } from "react";

export default class Header extends component {
  constructor(props) {
    super(props);
    this.state = {favoriteColor: "red"};
C}
  static getDerivedStateFromProps(props, state) {
    return {favoriteColor: props.favCol };
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoriteColor}</h1>
    C;
  }
}
