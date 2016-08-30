import React from "react";


export default class PropertyLocale extends React.Component {
  constructor() {
    super();

    this.state = {
      
    };

    this._handleDedupe = this._handleDedupe.bind(this);
  }

  render() {
    let dedupeButton;
    if (!this.props.isDedupe) {
      dedupeButton =         
      <div  className="btn btn-xs btn-warning" 
            onClick={this._handleDedupe}>
        Dedupe    
      </div>
    };
     = this.props.isDedupe ? "Undedupe" : "Dedupe";

    return(
      <div>
        <br />
        <p className="delimiter">
          {this.props.locale} : {this.props.delimiter}
        </p>        
        {dedupeButton}
      </div>
    );
  }


  _handleDedupe(event) {
    event.preventDefault();
      this.props.onDedupe(this.props.delimiter);    
  }
}