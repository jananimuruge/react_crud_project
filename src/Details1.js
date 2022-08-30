// import React from "react";
import Formex1 from "./Formex1";
import ReactDOM from 'react-dom';
import Display from "./Display";
import React, { Component } from 'react'
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
// import { GridApi, RowHighlightPosition } from "ag-grid-community";
import Inputalone from "./Inputalone";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment, { updateLocale } from 'moment';
import "flatpickr/dist/themes/material_green.css";
import DateTime from './DateTime';
import Delete from './Delete';
import 'ag-grid-community/dist/styles/ag-grid.css'
import axios from "axios";
import Flatpickr from "react-flatpickr";
import UserService from "./UserService";
import Update from "./Update";
import DisplayValues from "./DisplayValues";
import Edit from "./Edit";
import { GridApi, GridOptionsWrapper, RowNode } from "ag-grid-community";
import CustomDateComponent from "./CustomeDateComponent";
import _, { countBy, values } from 'lodash';
import NumericCellEditor from './NumericCellEditor.js';
import NumericEditor from "./NumericCellEditor.js";
import EmailV from "./EmailV";
// import { toBeEmpty } from "@testing-library/jest-dom/dist/matchers";
// import "path/to/font-awesome/less/font-awesome.less";
// import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const rowStyle = { background: '#CCCFE7' };
// const emailState={
//   email:'',
//   error:''
// }
export class Details1 extends Component {
  constructor(props) {
    super(props);
    // this.state.emailState;
    // this.onChange = this.onChange.bind(this);
    this.state = {
      username: "",
      number: "",
      // emailState:'',
      userdetails: [],
      rowData: [],
      details: [],
      updateRows: [],
      rowObject: {},
      columnDefs: [
        {
          headerName: "USERDETAILS", resizable: 'true',
          children: [
            {
              field: 'username', className: "username", width: 350, suppressSizeToFit: true, headerName: 'User Name', autocomplete: "off", cellStyle: { font: '21px' }, filter: 'agTextColumnFilter', headerClass: "ag-center-header", sortable: 'true', editable: true, resizable: 'true', floatingFilter: 'true', filterParams: {
                buttons: ['reset', 'apply'],
              },
            },
            {
              field: 'number', headerName: 'Number', cellStyle: { font: '21px' }, filter: 'agTextColumnFilter', editable: true, cellEditor: NumericEditor,headerClass: "ag-center-header", sortable: 'true', resizable: 'true', floatingFilter: 'true', filterParams: {
                buttons: ['reset', 'apply'],
              }, closeOnApply: true,
            },
            {field:'email',headerName:'Email',editable:true,cellStyle:{font:'21px'},filter: 'agTextColumnFilter', headerClass: "ag-center-header", sortable: 'true', resizable: 'true', floatingFilter: 'true', filterParams: {
              buttons: ['reset', 'apply'],
            },},
            // cellRenderer: (params) => {
            //   params.eGridCell.addEventListener('change', (e) => {
            //       this.getDetails(e.target.value);
            //   })}},
            {
              field: 'currentdate', filterParams: filterParams, className: "date", filterParams: {
                buttons: ['reset', 'apply'],
              }, headerName: 'Date and Time', cellStyle: { font: '21px' }, filter: 'agDateColumnFilter', headerClass: "ag-center-header", editable: true, resizable: 'true', floatingFilter: 'true',
              // cellRenderer: (data) => {
              // return moment(data.createdAt).format('MM/DD/YYYY HH:mm:ss')
              // }
              cellRenderer: DateTime,
            },
            { field: 'delete', headerName: 'delete', cellStyle: { font: '21px' }, cellRenderer: Delete, resizable: 'true', headerClass: "ag-center-header" },

            // components: {
            //     agDateInput: CustomDateComponent,
            //   },
            // date: new Date(),

            // }
          ],

        },
      ],
      components: {
        agDateInput: CustomDateComponent,
      },
    }
    this.getRowStyle = params => {
      if (params.node.rowIndex % 2 === 0) {
        return { background: '#E6E7F3' };
      }
      this.getRowId = params => params.data.id;
    };



  }
  componentDidMount() {

    axios({
      // Endpoint to get user details
      url: `http://localhost:8080/user/display`,
      method: "GET",
    })

      // Handle the response from backend here
      .then((res) => {
        console.log(res)
        let userdetails = res.data.userdetails;
        this.setState({
          rowData: userdetails
        })

      })

      // Catch errors if any
      .catch((err) => { });

  }

  onFilterOpened = (e) => {
    console.log('onFilterOpened', e);
  };

  onFilterChanged = (e) => {
    console.log('onFilterChanged', e);
    console.log('gridApi.getFilterModel() =>', e.api.getFilterModel());
  };

  onFilterModified = (e) => {
    console.log('onFilterModified', e);
    console.log('filterInstance.getModel() =>', e.filterInstance.getModel());
    console.log(
      'filterInstance.getModelFromUi() =>',
      e.filterInstance.getModelFromUi()
    );
  };
//   onChange(e) {
//     this.setState({
//         email : e.target.value
//     });
// }
// emailValidation(){
//   const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//   if(!this.state.email || regex.test(this.state.email) === false){
//       this.setState({
//           error: "Email is not valid"
//       });
//       return false;
//   }
//   return true;
// }

onCellValueChanged=((e)=>{
  console.log("onChange",e);
  this.state.rowData.forEach(element => {
    console.log("ele",element);
    if(element.email===e.data.email){
      alert("This email is already exist");
      return;
      
    }
    else{
      this.saveValues();
    }
    
  });

})

  updateValues = () => {
    let userdetails = [];
    let isEmpty = false;
    this.gridApi.forEachNode(rowNode => {
      console.log(rowNode);
      userdetails.push(rowNode.data);

      //  console.log(_.compact([userdetails]));
      if (Object.keys(rowNode.data).length == 0) {
        isEmpty = true;
      }
    })
    let totalObject = {

      "userdetails": userdetails

    };

    if (isEmpty) {

      alert("fields cannot be empty");

      return false;

    }
    axios({

      // Endpoint to send files
      url: `http://localhost:8080/user/update`,
      method: "PUT",
      data: totalObject,
    })
      // Handle the response from backend here

      .then((res) => {

        console.log(res.data)
      })
      .catch((err) => { });

  }
  saveValues = (e) => {
  //   if(this.emailValidation()){
  //     console.log(this.state);
  //     this.setState(emailState);
  // }

    var userdetails = [];
    let isEmpty = false;
    this.gridApi.forEachNode(rowNode => {
      console.log(rowNode);
      // if(rowNode.data.email!=userdetails.email){

        userdetails.push(rowNode.data);
  
      // }
      if (Object.keys(rowNode.data).length == 0) {
        isEmpty = true
      }
    })
    let totalObject = {
      "userdetails": userdetails
    };
    if (isEmpty) {
      alert("fields cannot be empty");
      return;
    }
    axios({
      // Endpoint to send files
      url: "http://localhost:8080/user/insert",
      method: "POST",
      data: totalObject,
    })
      // Handle the response from backend here
      .then((res) => {
        console.log(res.data)
      })
      // Catch errors if any
      .catch((err) => { });
  }
// emailVerification=((params)=>{
//   console.log(params,"emaildata");

//   return <input  type="text" value={params.data.email} onChange={(e)=>this.setEmailValue(e)}/>

// })
// setEmailValue=((e)=>{
//   console.log(e,"emailvalues");
  
//   if(e.target.value)
//   {
//     console.log("please enter correct value");
//   }
// })
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.ColumnApi;
    this.gridApi.sizeColumnsToFit();
    const updateData = (data) => params.api.setRowData(data);
  }
  onRowEditingStarted = (event) => {
    console.log('never called - not doing row editing');
  };

  onRowEditingStopped = (event) => {
    console.log('never called - not doing row editing');
  };

  onCellEditingStarted = (event) => {
    console.log('cellEditingStarted');
  };

  onCellEditingStopped = (event) => {
    console.log('cellEditingStopped');
  };


  render() {
    const { date } = this.state;
    return (
      <>
        <div className="tablestyle">
          <div
            className="ag-theme-alpine"
            style={{
              marginTop: '20px',
              height: '450px',
              width: '100%',
            }}
          >
            <div className="addbutton">
              <div className="addrowbutton"><button type="button" onClick={() => this.gridApi.applyTransaction({ add: [{}] })}>Add Field<i className="fa fa-plus" aria-hidden="true"></i></button></div>
              <div className="savebutton"><button type="button" onClick={(e) => this.saveValues(e)}>Save<i className="fa-solid fa-floppy-disk"></i></button></div>
              <div className="updatebutton"><button type="button" onClick={() => this.updateValues()}>Update<i className="fa fa-pencil" aria-hidden="true"></i></button></div>
            </div>

            <AgGridReact

              columnDefs={this.state.columnDefs}
              rowData={this.state.rowData}
              onGridReady={this.onGridReady}
              components={this.state.components}
              rowStyle={rowStyle}
              getRowStyle={this.getRowStyle}
              pagination={true}
              paginationPageSize={3}
              paginationAutoPageSize={true}
              getRowId={this.getRowId}
              gridOptions={this.gridOptions}
              onFilterOpened={this.onFilterOpened.bind(this)}
              onFilterChanged={this.onFilterChanged.bind(this)}
              onFilterModified={this.onFilterModified.bind(this)}
              onRowEditingStarted={this.onRowEditingStarted.bind(this)}
              onRowEditingStopped={this.onRowEditingStopped.bind(this)}
              onCellEditingStarted={this.onCellEditingStarted.bind(this)}
              onCellEditingStopped={this.onCellEditingStopped.bind(this)}
              onCellValueChanged={this.onCellValueChanged.bind(this)}
            >
            </AgGridReact>
          </div>
        </div>
      </>
    )

  }

}
const filterParams = {
  comparator: (filterLocalDateAtMidnight, cellValue) => {
    const dateAsString = cellValue;
    const dateParts = dateAsString.split('/');
    const cellDate = new Date(
      Number(dateParts[2]),
      Number(dateParts[1]) - 1,
      Number(dateParts[0])
    );
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
  },
};



export default Details1;




