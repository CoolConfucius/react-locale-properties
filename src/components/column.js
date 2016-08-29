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
      <div className="locale">
        <h4>{this.props.propertyName}</h4>  
        {propertyLocales}
      </div>
    );
  }

  _propertyLocales(){
    console.log(this.props, "props");
    return this.props.propertyLocales.map((columnLocale)=>{
      <div className="delimiter" key={columnLocale.locale}>
          <p>{columnLocale.locale} : {columnLocale.delimiter}</p>
      </div>
    });
  }

}