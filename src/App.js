import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Main } from "./Components/Main";
import { About } from "./Components/About";
import { Contacts } from "./Components/Contacts";
import { PageError } from "./Components/PageError";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
            <Route component={PageError} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
