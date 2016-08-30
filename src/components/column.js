import React from "react";

import PropertyLocale from "./property-locale";

export default class Column extends React.Component {
  constructor() {
    super();
    this.state = {
      propertyLocales: [],
      isDedupe: false
    };

    this._getPropertyLocales = this._getPropertyLocales.bind(this);
    this._handleDelete = this._handleDelete.bind(this);
    this._dedupe = this._dedupe.bind(this);
    this._undedupe = this._undedupe.bind(this);
  }

  componentWillMount(){
    this.setState({ propertyLocales: this.props.propertyLocales});
  }

  render() {
    const propertyLocales = this._getPropertyLocales();
    let undedupeButton; 
    if (this.state.isDedupe) {
      undedupeButton =         
      <div  className="btn btn-sm btn-warning" 
            onClick={this._undedupe}>
        Undedupe    
      </div>
    };

    return(
      <div className="col-md-3 col-xs-6">
        <h4>{this.props.propertyName}</h4>  
        {propertyLocales}
        <br />
        {undedupeButton}
        <div className="btn btn-small btn-danger" onClick={this._handleDelete}>
          <span className="glyphicon glyphicon-trash"></span>
        </div>
      </div>
    );
  }


  _getPropertyLocales(){    
    let propertyLocalesMap = this.state.propertyLocales.map((columnLocale)=>
      <PropertyLocale 
        locale={columnLocale.locale} 
        delimiter={columnLocale.delimiter} 
        isDedupe={this.state.isDedupe}
        onDedupe={this._dedupe}
        onUndedupe={this._undedupe}
        key={columnLocale.locale} />      
    );
    return (
      <div>
        {propertyLocalesMap}
      </div>
    );
  }

  _handleDelete(event) {    
    event.preventDefault();

    this.props.onDelete(this.props.propertyName);
  }


  
  _dedupe(delimiter) {    

    const deduped = this.state.propertyLocales.filter(
      propertyLocale => propertyLocale.delimiter === delimiter
    );
  
    this.setState({ propertyLocales: deduped, isDedupe: true });
    
  }

  _undedupe(){
    this.setState({ propertyLocales: this.props.propertyLocales, isDedupe: false});
  }

}