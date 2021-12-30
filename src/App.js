import React from "react";
import {BrowserRouter as Router, Switch, withRouter} from "react-router-dom";

import RouteLayout from "./layout/RouteLayout";
import DefaultLayout from "./layout/Default";

import Home from "./route/Home";
import Board from "./route/Board";
import Introduction from "./route/Introduction";
import Member from "./route/Member";
import Postview from "./route/PostView";
import Postwrite from "./route/PostWrite";
import Project from "./route/Project";

const App = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <RouteLayout
                    exact
                    path = "/"
                    layout = {DefaultLayout}
                    component = {withRouter(Home)} />
                <RouteLayout
                    exact
                    path = "/board"
                    layout = {DefaultLayout}
                    component = {withRouter(Board)} />
                <RouteLayout
                    exact
                    path = "/introduction"
                    layout = {DefaultLayout}
                    component = {withRouter(Introduction)} />
                <RouteLayout
                    exact
                    path = "/member"
                    layout = {DefaultLayout}
                    component = {withRouter(Member)} />
                <RouteLayout
                    exact
                    path = "/postview"
                    layout = {DefaultLayout}
                    component = {withRouter(Postview)} />
                <RouteLayout
                    exact
                    path = "/postwrite"
                    layout = {DefaultLayout}
                    component = {withRouter(Postwrite)} />
                <RouteLayout
                    exact
                    path = "/project"
                    layout = {DefaultLayout}
                    component = {withRouter(Project)} />
            </Switch>
        </Router>
    );
}

export default App;