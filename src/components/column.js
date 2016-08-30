import React from "react";

import PropertyLocale from "./property-locale";

export default class Column extends React.Component {
  constructor() {
    super();
    this.state = {
      propertyLocales: []
    };

    this._getPropertyLocales = this._getPropertyLocales.bind(this);
    this._handleDelete = this._handleDelete.bind(this);
    this._dedupe = this._dedupe.bind(this);
  }

  componentWillMount(){
    this.setState({ propertyLocales: this.props.propertyLocales});
  }

  render() {
    console.log("props", this.props);
    const propertyLocales = this._getPropertyLocales();
    
    return(
      <div className="col-md-3 col-xs-6">
        <h4>{this.props.propertyName}</h4>  
        {propertyLocales}
        <br />
        <div className="btn btn-small btn-danger" onClick={this._handleDelete}>
          <span className="glyphicon glyphicon-trash"></span>
        </div>
      </div>
    );
  }


  _getPropertyLocales(){
    console.log(this.props, "props");
    let propertyLocalesMap = this.state.propertyLocales.map((columnLocale)=>
      <PropertyLocale 
        locale={columnLocale.locale} 
        delimiter={columnLocale.delimiter} 
        onDedupe={this._dedupe}
        key={columnLocale.locale} />      
    );
    return (
      <div>
        {propertyLocalesMap}
      </div>
    );
  }

  _handleDelete(event) {
    console.log("props", this.props);
    event.preventDefault();

    this.props.onDelete(this.props.propertyName);
  }


  
  _dedupe(delimiter) {
    console.log("This props", this.props, delimiter);

    const deduped = this.state.propertyLocales.filter(
      propertyLocale => propertyLocale.delimiter === delimiter
    );
  
    this.setState({ propertyLocales: deduped });
    
  }

  _undedupe{
    this.setState({ propertyLocales: this.props.propertyLocales});
  }

}