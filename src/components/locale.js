import React from "react";

export default class Locale extends React.Component {
  constructor() {
    super();
    this.state = {

    };

    this._delimiters = this._delimiters.bind(this);
  }

  render() {
    const delimiters = this._delimiters();
    
    return(
      <div className="locale">
        <h4>{this.props.identity.language}</h4>  
        {delimiters}
      </div>
    );
  }

  _delimiters(){
    const array = [];
    for (let key in this.props.delimiters){
      array.push(
        <div className="property" key={key}>
          <p>{key} : {this.props.delimiters[key]}</p>
        </div>
      );
    }
    return array;
  }

}