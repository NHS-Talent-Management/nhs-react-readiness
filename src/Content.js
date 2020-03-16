// Content.js
import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Login from './Login';
import PrivateRoute from './Utils/PrivateRoute';
import Readiness from './Component/Readiness/Summary';
import QuestionEdit from "./Component/Readiness/Question/QuestionEdit";
import ThankYou from "./Component/Readiness/ThankYou";
import Introduction from "./Component/Readiness/Introduction";

export default class Content extends Component {
    render() {
        return (
            <div className="nhsuk-width-container">
                <div className="container  py-3">
                    <div className="nhsuk-grid-row">
                        <div className="nhsuk-grid-column-one">
                            <Switch>
                                <Route exact path="/" component={Login}/>
                                <PrivateRoute path="/introduction" component={Introduction}/>
                                <PrivateRoute path="/readiness" component={Readiness}/>
                                <PrivateRoute path="/edit" component={QuestionEdit}/>
                                <PrivateRoute path="/thankYou" component={ThankYou}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}