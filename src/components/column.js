import React from "react";

export default class Column extends React.Component {
  constructor() {
    super();
    this.state = {

    };

    this._propertyLocales = this._propertyLocales.bind(this);
  }

  componentWillMount(){
    console.log(this.state);
  }

  render() {
    console.log("props", this.props);
    const propertyLocales = this._propertyLocales();
    
    return(
      <div className="col-md-3 col-xs-6">
        <h4>{this.props.propertyName}</h4>  
        {propertyLocales}
      </div>
    );
  }

  _propertyLocales(){
    console.log(this.props, "props");
    let propertyLocalesMap = this.props.propertyLocales.map((columnLocale)=>
      <p className="delimiter" key={columnLocale.locale}>
        {columnLocale.locale} : {columnLocale.delimiter}
      </p>
    );
    return (
      <div>
        {propertyLocalesMap}
      </div>
    );
  }

}