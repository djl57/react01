import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./NotFound";
import App from "./App/index";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/app/home" push />} />
      <Route path="/app" component={App} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
