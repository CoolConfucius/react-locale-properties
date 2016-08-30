import React from "react";


export default class PropertyLocale extends React.Component {
  constructor() {
    super();

    this.state = {
      isDeduped: false
    };

    this._handleDedupe = this._handleDedupe.bind(this);
  }

  render() {
    let dedupeText = this.state.isDeduped ? "Undedupe" : "Dedupe";

    return(
      <div>
        <br />
        <p className="delimiter">
          {this.props.locale} : {this.props.delimiter}
        </p>        
        <div  className="btn btn-xs btn-warning" 
              onClick={this._handleDedupe}>
          {dedupeText}
        </div>
      </div>
    );
  }


  _handleDedupe(event) {
    event.preventDefault();

    if (this.props.isDedupe) {
      this.setState({isDedupe: false});
      this.props.onUndedupe();
    } else {
      this.setState({isDedupe: true});
      this.props.onDedupe(this.props.delimiter);
    }

    
  }
}