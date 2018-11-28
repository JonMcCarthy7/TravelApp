import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import NewTripCard from "./NewTripCard";
import TripCard from "./TripCard";
import { fetchTrips } from "../Redux/actions/tripsAction";

class Trips extends Component {
  componentDidMount() {
    this.props.fetchTrips();
  }
  render() {
    const tripsList = this.props.trips.map(trip => {
      return <TripCard trip={trip} key={trip.id} />;
    });
    return (
      <div className="row">
        <NewTripCard />
        {this.props.trips && tripsList}
      </div>
    );
  }
}

const mapDispatchToProps = ({ trips }) => {
  return {
    trips
  };
};
export default connect(
  mapDispatchToProps,
  { fetchTrips }
)(Trips);
