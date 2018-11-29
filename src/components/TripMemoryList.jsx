import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

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
        return (
          <li key={item.id} className="collection-item avatar">
            <img src="/img/coding.jpg" alt="" className="circle" />
            <span className="title">{item.name}</span>
            <p>
              Location: {item.location}
              <br />
              Created At: {item.created_at}
            </p>
            <a href="#!" className="secondary-content">
              <i className="material-icons">send</i>
            </a>
          </li>
        );
      });
    return (
      <div>
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
