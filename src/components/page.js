import React from "react";

import Locale from "./locale";
import SearchBar from "./searchbar";
import Column from "./column";

export default class Page extends React.Component {
  constructor(){
    super();
    this.state = {
      displayOutput: false, 
      locales: [],
      columns: []
    }

    this._toggleDisplay = this._toggleDisplay.bind(this);
    this._addColumn = this._addColumn.bind(this);
    this._deleteColumn = this._deleteColumn.bind(this);
    this._getColumnLocales = this._getColumnLocales.bind(this);
    this._getColumns = this._getColumns.bind(this);
  }

  componentWillMount() {
    this._fetchLocales();
  }

  render(){
    const locales = this._getLocales() || [];
    const columnNodes = this._getColumns() || [];
    let allData;
    if (this.state.displayOutput){
      allData = <div className="allData">{locales}</div>
    }
    let toggleDisplayText = this.state.displayOutput ? 'Hide Data' : 'Show All Available Data';
    return(
      <div className="page container">
        <h1 className="jumbotron">Locale Properties</h1>      
        <SearchBar addColumn={this._addColumn}/>
        <div className="row">
          {columnNodes}
        </div>
        <br />
        <br />
        <div className="btn btn-info btn-sm" onClick={this._toggleDisplay}>{toggleDisplayText}</div>
        {allData}
      </div>
    )
  }

  componentDidMount() {
    console.log(this.state);
  }

  _toggleDisplay(){
    this.setState({ displayOutput: !this.state.displayOutput});
  }
  
  _getColumnLocales(property){
    const propertyLocales = [];
    this.state.locales.forEach(locale => {
      if (locale.delimiters.hasOwnProperty(property)) {
        propertyLocales.push({
          locale: locale.identity.language,
          delimiter: locale.delimiters[property]
        });
      }
    })
    return propertyLocales; 
  }

  _addColumn(property) {
    
    const column = {
      propertyName: property,
      propertyLocales: this._getColumnLocales(property)
    };

    if (column.propertyLocales.length === 0) {
      alert("No locales in the data has that property name.")
    } else {
      this.setState({
        columns: this.state.columns.concat([column])
      }, ()=>{
        console.log(this.state, "update columns");
      });
    }


    
  }


  _getColumns() {
    return this.state.columns.map((column) => {
      return <Column
               {...column}
               onDelete={this._deleteColumn}
               key={column.propertyName || ''} />
    });
  }


  _deleteColumn(columnProperty) {
    const columns = this.state.columns.filter(
      column => column.propertyName !== columnProperty
    );

    this.setState({ columns });
  }

  


  _getLocales() {
    return this.state.locales.map((locale) => {
      return <Locale
               {...locale}
               key={locale.identity.language || ''} />
    });
  }

  _fetchLocales() {
    $.ajax({
      method: 'GET',
      url: 'locales.json',
      success: (locales) => {
        this.setState({ locales });
        console.log(this.state);
      }
    });
  }
}





