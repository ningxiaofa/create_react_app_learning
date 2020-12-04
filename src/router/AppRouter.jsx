import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";

import Home from "../views/home/home";
import Login from "../views/login/login";
import NotFound from "../views/not-found/notFound";

export default class AppRouter extends React.Component {

    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/*" component={NotFound}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
