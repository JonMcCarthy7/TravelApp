import React from "react";
import { Link } from "react-router-dom";

export default function TripCard({ trip }) {
  return (
    <div>
      <div className="col s6">
        <div className="card small">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" alt="default" src="/img/coding.jpg" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {trip.name}
              <i className="material-icons right">more_vert</i>
            </span>
            <div>
              <Link to={`/trip/${trip.id}`}>
                <i className="medium material-icons">pages</i>
              </Link>
              <br />
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              {trip.name}
              <i className="material-icons right">close</i>
            </span>
            <h6>Country: {trip.country}</h6>
            <p>Start Date: {trip.start_date}</p>
            <p>End Date: {trip.end_date}</p>
            <hr />
            <p>{trip.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
