import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default function TripCard({ trip }) {
  return (
    <div>
      <div className="col s6">
        <div className="card small">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" alt="default" src="/img/coding.jpg" />
          </div>
          <div className="card-content">
            <div className="row valign-wrapper">
              <div className="col m6 card-title activator green-text text-darken-2">
                {trip.name}
              </div>
              <div className="col m6">
                <Link to={`/trips/${trip.id}`}>
                  <i className="medium material-icons green-text text-darken-2 right">
                    pages
                  </i>
                </Link>
              </div>
            </div>
          </div>
          <div className="card-reveal green-text text-darken-2">
            <span className="card-title">
              {trip.name}
              <i className="material-icons right">close</i>
            </span>
            <h6>Country: {trip.country}</h6>
            <p>Start Date: {moment(trip.start_date).format("MMMM Do YY")}</p>
            <p>End Date: {moment(trip.end_date).format("MMMM Do YY")}</p>
            <hr />
            <p>{trip.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
