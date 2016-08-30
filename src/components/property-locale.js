import React from "react";


export default class PropertyLocale extends React.Component {
  constructor() {
    super();

    this.state = {};

    this._handleDedupe = this._handleDedupe.bind(this);
  }

  render() {
    return(
      <div key={this.props.key}>
        <br />
        <p className="delimiter">
          {this.props.locale} : {this.props.delimiter}
        </p>        
        <div  className="btn btn-xs btn-warning" 
              onClick={(delimiter)=>this._dedupe(delimiter)}>
          Dedupe
        </div>
      </div>
    );
  }


  _handleDedupe(event) {
    event.preventDefault();
    this.props.onDedupe(this.props.id);
  }
}