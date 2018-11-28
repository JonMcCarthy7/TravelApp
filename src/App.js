import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Trips from "./components/Trips";
import NavBar from "./components/NavBar";
import NewTrip from "./components/NewTrip";
import Trip from "./components/Trip";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Trips} />
              <Route path="/new/trip" component={NewTrip} />
              <Route path="/trip/:name" component={Trip} />
            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
