import React from "react";

export default class Column extends React.Component {
  constructor() {
    super();
    this.state = {
      propertyLocales: []
    };

    this._propertyLocales = this._propertyLocales.bind(this);
    this._handleDelete = this._handleDelete.bind(this);
    // this._dedupe = this._dedupe.bind(this);
  }

  componentWillMount(){
    this.setState({ propertyLocales: this.props.propertyLocales});
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
    let propertyLocalesMap = this.state.propertyLocales.map((columnLocale)=>
      <div key={columnLocale.locale}>
        <br />
        <p className="delimiter">
          {columnLocale.locale} : {columnLocale.delimiter}
        </p>        
        <div className="btn btn-xs btn-warning" onClick={({columnLocale.delimiter})=>this._dedupe}>
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

  _dedupe(delimiter) {
    console.log("This props", this.props);

    const deduped = this.state.propertyLocales.filter(
      propertyLocale => propertyLocale.delimiter !== delimiter
    );
  

    this.setState({ propertyLocales: deduped });
    
  }


  _dedupeValue(columnProperty, locale) {
  }

}