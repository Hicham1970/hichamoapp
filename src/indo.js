import React from "react";
import ReactDOM from "react-dom/client";

import Garage from "./Props/Garage";
import Football from "./Events/shoot";
import Tire from "./Events/tirage";
import Goal from "./Conditions/Goal";
import Fleet from "./Conditions/Garage";
import Target from "./Conditions/TernaryGoal";
import Clients from "./Lists/Clients";
import MyForm from "./Forms/form";
import MyForm2 from "./Forms/UseStatForm";
import SubmitForm from "./Forms/SubmitForm";
import MyForm3 from "./Forms/MultipleInputs";
import MyForm4 from "./Forms/TexteArea";
import MySelect from "./Forms/Select";
const root = ReactDOM.createRoot(document.getElementById("root"));

const cars = ["Ford", "BMW", "Audi", "Mercedes"];
root.render(
  <>
    <Garage />
    <Football />
    <Tire />
    <Goal isGoal={true} />
    <Fleet cars={cars} />
    <Target isGoal={true} />
    <Clients />
    <MyForm />
    <MyForm2 />
    <SubmitForm />
    <MyForm3 />
    <MyForm4 />
    <MySelect />
  </>
);
