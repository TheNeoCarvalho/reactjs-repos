import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Repos from "./pages/Repos";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/repository/:repo" component={Repos} />
      </Switch>
    </Router>
  );
}
