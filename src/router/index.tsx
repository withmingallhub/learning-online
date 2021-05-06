import React from 'react';
import {Route} from 'react-router-dom';
import Recorders from '../components/recorder/index';
import VedioFather from '../components/vedio-play/vedioFather';
import DrawingFather from '../components/drawing/drawingFather';

function Rout() {
  return (
    <>
      <Route path="/audio" component={Recorders}></Route>
      <Route path="/vedio" component={VedioFather}></Route>
      <Route path="/drawing" component={DrawingFather}></Route>
    </>
  );
}

export default Rout;
