import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import TripMemoryItem from "./TripMemoryItem";

class TripMemoryList extends Component {
  render() {
    const memoryListItem = this.props.memories
      .filter(mem => {
        return (
          mem.memorable_type === "Trip" &&
          mem.memorable_id === +this.props.match.params.id
        );
      })
      .map(item => {
        return <TripMemoryItem key={item.id} item={item} />;
      });
    return (
      <div className="green-text text-darken-4">
        <ul className="collection with-header">
          <li className="collection-header">
            <h4>
              Create A New Memory!
              <Link to={`/trips/${this.props.match.params.id}/memory/new`}>
                <i className="material-icons secondary-content">create</i>
              </Link>
            </h4>
          </li>
          {this.props.memories && memoryListItem}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ memories }, ownProps) => {
  return {
    memories
  };
};

export default withRouter(connect(mapStateToProps)(TripMemoryList));
