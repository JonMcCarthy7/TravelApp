import React, { Component } from "react";
import { connect } from "react-redux";
import { addTripMemory } from "../Redux/actions/tripMemoriesActions";

class NewMemory extends Component {
  state = {
    name: "",
    description: "",
    location: "",
    start_date: "",
    end_date: ""
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTripMemory(
      +this.props.match.params.id,
      this.state,
      this.props.history
    );
  };

  render() {
    return (
      <div>
        <div className="col s12 m6">
          <div className="card">
            <form onSubmit={this.handleSubmit}>
              <div className="card-content">
                <span className="card-title">New Trip Memory</span>
                <div className="row card-body">
                  <div className="input-field col s12">
                    <input
                      id="name"
                      onChange={this.handleChange}
                      type="text"
                      className="validate"
                    />
                    <label htmlFor="name">Memory Name</label>
                  </div>
                  <div className="input-field col s12">
                    <input
                      id="location"
                      onChange={this.handleChange}
                      type="text"
                      className="validate"
                    />
                    <label htmlFor="location">Location</label>
                  </div>
                  <div className="input-field col s6">
                    <input
                      id="start_date"
                      onChange={this.handleChange}
                      type="date"
                      className="validate"
                    />
                    <label htmlFor="start_date">Start Date</label>
                  </div>
                  <div className="input-field col s6">
                    <input
                      id="end_date"
                      onChange={this.handleChange}
                      type="date"
                      className="validate"
                    />
                    <label htmlFor="end_date">End Date</label>
                  </div>
                  <div className="input-field col s12">
                    <label htmlFor="description">Memory Description</label>
                    <textarea
                      className="materialize-textarea validate"
                      id="description"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="card-action">
                <button
                  className="btn waves-effect waves-light green"
                  type="submit"
                  name="action"
                >
                  Submit <i className="material-icons right">send</i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addTripMemory }
)(NewMemory);
