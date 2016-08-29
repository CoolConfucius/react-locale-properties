import React from "react";

export default class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: 0
    };

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  render() {
    return (
      <form className="comment-form" onSubmit={this._handleSubmit}>
        <label>Enter property</label>
        <div className="comment-form-fields">
          <input placeholder="Property Name:" ref={c => this._inputProperty = c} />
        </div>
        <div className="comment-form-actions">
          <button className="btn btn-success" type="submit">
            Add New Column
          </button>
        </div>
      </form>
    );
  }

  _handleSubmit(event) {
    event.preventDefault();

    this.props.addColumn(this._inputProperty.value);

    this._inputProperty.value = '';
  }

}