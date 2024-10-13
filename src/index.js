import React from "react";
import ReactDOM from "react-dom/client";
// import Header3 from "./Styling/StylingScss";
import FavoriteColor from "./Hooks/favoriteColor";
import Navbar from "./NavBar/NavBar";
import "./NavBarStyle.css";
import "./index.css";
import Car from "./Hooks/UseState";
import Machine from "./Hooks/UpdateState";
// import "./my-sass.scss";
// import "./header.css";
// import Header from "./Styling/InlineStyle"
// import Header2 from "./Styling/StyleSheet";
// import Carousel from "./Styling/StylingModule";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <Header /> */}
    {/* <Header2 /> */}
    {/* <Carousel /> */}
    {/* <Header3 /> */}
    <Navbar />
    <FavoriteColor />
    <Car />
    <Machine />
  </>
);
