import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Trips from "./components/Trips";
import NavBar from "./components/NavBar";
import NewTrip from "./components/NewTrip";
import Trip from "./components/Trip";
import NewMemory from "./components/NewMemory";
import EditTrip from "./components/EditTrip";
import TripMemory from "./components/TripMemory";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Trips} />
              <Route exact path="/trips/new" component={NewTrip} />
              <Route exact path="/trips/:id/edit" component={EditTrip} />
              <Route exact path="/trips/:id/memory/new" component={NewMemory} />
              <Route
                exact
                path="/trips/:id/memory/:memory_id"
                component={TripMemory}
              />
              <Route exact path="/trips/:id" component={Trip} />
            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
