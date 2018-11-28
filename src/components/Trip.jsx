import React, { Component } from "react";
import { connect } from "react-redux";

class Trip extends Component {
  render() {
    console.log("THIS IS TRIP SHOW PAGE", this.props.trips);
    const tripsArr = this.props.trips.filter(
      trip => trip.id === +this.props.match.params.id
    );
    const trip = tripsArr[0];
    return (
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
  null
)(Trip);
