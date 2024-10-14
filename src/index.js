import React from "react";
import ReactDOM from "react-dom/client";
import "./NavBarStyle.css";
import "./index.css";
// import Header3 from "./Styling/StylingScss";
import FavoriteColor from "./Hooks/favoriteColor";
import Navbar from "./NavBar/NavBar";
import Car from "./Hooks/UseState";
import Machine from "./Hooks/UpdateState";
import Timer from "./Hooks/UseEffect";
import Counter from "./Hooks/UseEffect2";
import Timer2 from "./Hooks/EffectCleanUp";
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
    <br></br>
    <Car />
    <br></br>
    <Machine />
    <br></br>
    <Timer />
    <br></br>
    <Counter />
    <br></br>
    <Timer2 />
  </>
);
