// // import React from "react";
// import axios from "axios";
// import React, { Component } from 'react';
// import UserValues from './UserValues';
// class GetApi extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//                 details1: []
//         }
//         this.addEmployee = this.addEmployee.bind(this);
//         this.editEmployee = this.editEmployee.bind(this);
//         this.deleteEmployee = this.deleteEmployee.bind(this);
//     }

//     deleteEmployee(id){
//         UserValues.deleteEmployee(id).then( res => {
//             this.setState({details1: this.state.details1.filter(details1 => details1.id !== id)});
//         });
//     }
//     viewEmployee(id){
//         this.props.history.push(`/view-employee/${id}`);
//     }
//     editEmployee(id){
//         this.props.history.push(`/add-employee/${id}`);
//     }

//     componentDidMount(){
//       UserValues.getEmployees().then((res) => {
//             this.setState({ details1: res.data});
//         });
//     }

//     addEmployee(){
//         this.props.history.push('/add-employee/_add');
//     }

//     render() {
//         return (
//             <div>
//                  <h2 className="text-center">Employees List</h2>
//                  <div className = "row">
//                     <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
//                  </div>
//                  <br></br>
//                  <div className = "row">
//                         <table className = "table table-striped table-bordered">

//                             <thead>
//                                 <tr>
//                                     <th> Employee First Name</th>
//                                     <th> Employee Last Name</th>
//                                     <th> Employee Email Id</th>
//                                     <th> Actions</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {
//                                     this.state.employees.map(
//                                         employee => 
//                                         <tr key = {employee.id}>
//                                              <td> { employee.firstName} </td>   
//                                              <td> {employee.lastName}</td>
//                                              <td> {employee.emailId}</td>
//                                              <td>
//                                                  <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
//                                                  <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
//                                                  <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>
//                                              </td>
//                                         </tr>
//                                     )
//                                 }
//                             </tbody>
//                         </table>

//                  </div>

//             </div>
//         )
//     }
// }

// export default Getapi();
