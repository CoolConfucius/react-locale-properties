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
    let dedupeButton = this.state.isDeduped ? 

    return(
      <div>
        <br />
        <p className="delimiter">
          {this.props.locale} : {this.props.delimiter}
        </p>        
        <div  className="btn btn-xs btn-warning" 
              onClick={this._handleDedupe}>
          Dedupe
        </div>
      </div>
    );
  }


  _handleDedupe(event) {
    event.preventDefault();
    if (this.state.isDedupe) {
      this.props.onUndedupe();
    } else {
      this.props.onDedupe(this.props.delimiter);
    }

    this.setState({
      isDedupe: !this.state.isDedupe
    })
  }
}