import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTripMemories } from "../Redux/actions/tripMemoriesActions";
import TripMemoryList from "./TripMemoryList";

class Trip extends Component {
  componentDidMount() {
    this.props.fetchTripMemories(+this.props.match.params.id);
  }
  render() {
    const tripsArr = this.props.trips.filter(
      trip => trip.id === +this.props.match.params.id
    );
    const trip = tripsArr[0];

    return (
      <div className="row">
        <div className="row">
          <div className="col s12">
            <div className="card grey darken-1">
              <div className="card-content white-text">
                <span className="card-title center-align">
                  <h1>{trip && trip.name}</h1>
                </span>
              </div>
              <div className="card-action">
                <a href="#">Edit</a>
                <a className="right" href="#">
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <TripMemoryList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ trips }, ownProps) => {
  return {
    trips
  };
};

export default connect(
  mapStateToProps,
  { fetchTripMemories }
)(Trip);
