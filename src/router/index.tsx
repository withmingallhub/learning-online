import React from 'react';
import { Route } from 'react-router-dom';
import main from '../components/main/index';
import every from '../components/every/index';
import Hot from '../components/hot/index';
import Lovers from '../components/lovers/index';
import ProType from '../components/proType/index';
import UserInfo from '../components/userInfo/index';


function Rout() {
    return (
        <>
            <Route exact path="/" component={main}></Route>
            <Route path="/every" component={every}></Route>
            <Route path="/hot" component={Hot}></Route>
            <Route path="/lovers" component={Lovers}></Route>
            <Route path="/proType" component={ProType}></Route>
            <Route path="/userInfo" component={UserInfo}></Route>
        </>
    )
}

export default Rout;