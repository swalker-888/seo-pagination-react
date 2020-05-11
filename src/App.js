import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PaginationExample from "./PaginationExample";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={PaginationExample} />
            <Route path="/page/:pageNo" component={PaginationExample} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}
