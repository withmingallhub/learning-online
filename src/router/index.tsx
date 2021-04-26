import React from "react";
import { Route } from "react-router-dom";
import main from "../components/main/index";
import Login from "../components/every/index";
import StudentMain from "../components/student/studentMain";
import Recorders from "../components/recorder/index";
import VedioFather from "../components/vedio-play/vedioFather";
import DrawingFather from "../components/drawing/drawingFather";
import AnimationFather from "../components/animation/animation";

function Rout() {
  return (
    <>
      <Route exact path="/teacher" component={main}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/studentMain" component={StudentMain}></Route>
      <Route path="/audio" component={Recorders}></Route>
      <Route path="/vedio" component={VedioFather}></Route>
      <Route path="/drawing" component={DrawingFather}></Route>
      <Route path="/animation" component={AnimationFather}></Route>
    </>
  );
}

export default Rout;
