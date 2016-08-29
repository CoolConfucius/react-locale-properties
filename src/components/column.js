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

    const propertyLocales = this._propertyLocales();
    
    return(
      <div className="locale">
        <h4>{this.props.identity.language}</h4>  
        {propertyLocales}
      </div>
    );
  }

  _propertyLocales(){
    const locales = [];
    // console.log(this.state);
    for (let key in this.state.locales){
      locales.push(
        <div className="property" key={key}>
          <p>{key} : {this.props.propertyLocales[key]}</p>
        </div>
      );
    }
    return locales;
  }

}