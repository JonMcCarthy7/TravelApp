import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTripMemories } from "../Redux/actions/tripMemoriesActions";
import { deleteTrip } from "../Redux/actions/tripsAction";
import TripMemoryList from "./TripMemoryList";
import { Link } from "react-router-dom";

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
        <br />

        <div className="row">
          <div className="col s12">
            <div className="card teal darken-2">
              <div className="card-content white-text">
                <span className="card-title center-align">
                  <h1>{trip && trip.name}</h1>
                </span>
              </div>
              <div className="card-action">
                <Link to={`/trips/${this.props.match.params.id}/edit`}>
                  <i className="small white-text material-icons">edit</i>
                </Link>
                <i
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    this.props.deleteTrip(trip.id, this.props.history);
                  }}
                  className="small material-icons right white-text"
                >
                  delete
                </i>
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
  { fetchTripMemories, deleteTrip }
)(Trip);
