import React from 'react';
import { Route } from 'react-router-dom';
import main from '../components/main/index';
import Login from '../components/every/index';
import StudentMain from '../components/student/studentMain';


function Rout() {
    return (
        <>
            <Route exact path="/teacher" component={main}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/studentMain" component={StudentMain}></Route>
        </>
    )
}

export default Rout;