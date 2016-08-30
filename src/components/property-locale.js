import React from "react";


export default class PropertyLocale extends React.Component {
  constructor() {
    super();

    this.state = {};

    this._handleDedupe = this._handleDedupe.bind(this);
  }

  render() {

    let propertyLocaleName this.props.locale;
    let delimiter this.props.delimiter;


    return(


      <div key={columnLocale.locale}>
        <br />
        <p className="delimiter">
          {columnLocale.locale} : {columnLocale.delimiter}
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