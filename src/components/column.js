import React from "react";

export default class Column extends React.Component {
  constructor() {
    super();
    this.state = {

    };

    this._propertyLocales = this._propertyLocales.bind(this);
    this._handleDelete = this._handleDelete.bind(this);
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
        <br />
        <div className="btn btn-small btn-danger" onClick={this._handleDelete}>
          <span className="glyphicon glyphicon-trash"></span>
        </div>
      </div>
    );
  }

  _propertyLocales(){
    console.log(this.props, "props");
    let propertyLocalesMap = this.props.propertyLocales.map((columnLocale)=>
      <div key={columnLocale.locale}>
        <br />
        <p className="delimiter">
          {columnLocale.locale} : {columnLocale.delimiter}
        </p>        
        <div className="btn btn-xs btn-warning" onClick={this._handleDedupe}>
          Dedupe
        </div>
      </div>
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

  _handleDepupe(event) {
    console.log("props", this.props);
    event.preventDefault();

    // this.props.onDedupe(this.props.propertyName);
  }

}