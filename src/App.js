import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Main } from "./Components/Main";
import About from "./Components/About";
import { Contacts } from "./Components/Contacts";
import { PageError } from "./Components/PageError";

import { Layout } from "./Components/Stylecom/Layout";
import { NaviBar } from "./Components/NaviBar";
import { Jumbotron } from "./Components/Stylecom/Jumbotron";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NaviBar />
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/about" component={About} />
              <Route path="/contacts" component={Contacts} />
              <Route component={PageError} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
