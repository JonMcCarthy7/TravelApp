import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

export default function TripMemoryItem({ item }) {
  return (
    <div>
      <li key={item.id} className="collection-item avatar">
        <img src="/img/coding.jpg" alt="" className="circle" />
        <span className="title">{item.name}</span>
        <p>
          Location: {item.location}
          <br />
          {moment(item.created_at).format("MMMM Do YYYY, h:mma")}
        </p>
        <Link
          to={`/trips/${item.memorable_id}/memory/${item.id}`}
          className="secondary-content"
        >
          <i className="small material-icons">send</i>
        </Link>
        <hr />
      </li>
    </div>
  );
}
