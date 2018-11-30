import React from "react";
import { Link } from "react-router-dom";

export default function NewTripCard() {
  return (
    <div className="col s6">
      <div className="card small">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" alt="default" src="/img/map.jpg" />
        </div>
        <div className="card-content">
          <div className="row valign-wrapper">
            <div className="col m6 card-title activator green-text text-darken-2">
              Add A New Trip
            </div>
            <div className="col m6">
              <Link to="/trips/new">
                <i className="medium material-icons green-text text-darken-2 right">
                  add_circle_outline
                </i>
              </Link>
            </div>
          </div>
        </div>
        <div className="card-reveal green-text text-darken-2">
          <span className="card-title">
            Add A New Trip
            <i className="material-icons right">close</i>
          </span>
          <p>
            Select This option to create a new Trip, jot down memories, add new
            Contacts, and upload photos.
          </p>
        </div>
      </div>
    </div>
  );
}
