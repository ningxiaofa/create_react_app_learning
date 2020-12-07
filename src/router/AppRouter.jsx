import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";

import Home from "../views/home/home";
import Login from "../views/login/login";
import NotFound from "../views/not-found/not-found";

export default class AppRouter extends React.Component {

    render(){
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/*" component={NotFound} />
                </Switch>
            </HashRouter>
        )
    }
}
