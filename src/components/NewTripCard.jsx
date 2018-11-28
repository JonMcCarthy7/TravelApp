import React from "react";
import { Link } from "react-router-dom";

export default function NewTripCard() {
  return (
    <div className="col s6">
      <div className="card small">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" alt="default" src="/img/coding.jpg" />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            Add A New Trip
            <i className="material-icons right">more_vert</i>
          </span>
          <div>
            <Link to="/new/trip">
              <i className="medium material-icons">add_circle_outline</i>
            </Link>
            <br />
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
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
