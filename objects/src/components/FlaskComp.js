import React, { Component } from "react";
import ExcelInfo from './ExcelInfo.js';
import '../App.css';

class FlaskComp extends Component {
  
  state = {}
 
  callExcel = async () => {
    const excelItems = await fetch('http://127.0.0.1:5000/load_excel/', {
      method: 'GET',
     headers: { 'Content-Type': 'application/json' }
   });
    const jsonexcelItems = await excelItems.json()
    console.log("???", jsonexcelItems)
    this.setState({ jsonexcelItems:jsonexcelItems })
  }
  
  renderExcel = () => {
    const jsonexcelItems =  this.state.jsonexcelItems.map((excel, index) => {
      console.log(excel);
      return <ExcelInfo
      date = {excel.Date}
      name = {excel.Name}
      invoice = {excel.Invoice}
      items = {excel.Items}
      amount = {excel.Amount}
      key = {index} />
    })
    return jsonexcelItems
  }

  render() {
    const {jsonexcelItems} = this.state
    
    return (
      <div>
        <div>
          <button id='btn2' onClick={this.callExcel}>Customer List</button>
        </div>
        <div>
          <table><thead><tr><td>Date</td>
          <td>Client Name</td>
          <td>Invoice #</td>
          <td>Items</td>
          <td>$ Amount</td></tr></thead></table>
        </div>
        <div>{jsonexcelItems ? this.renderExcel() : 'loading'}</div>
      </div>
    )
  }
}

export default FlaskComp;