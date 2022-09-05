import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { values } from "lodash";
import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, NavLink, Switch, Route, Routes } from 'react-router-dom';

class AddUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            lastName: '',
            number: '',
            saveValues: [],
            email:'',

        }
    }
    insertValues = ((e) => {
        // e.preventDefault();
        let { saveValues } = this.state;
        const userValues = {
            "username": this.state.username,
            // "lastName": this.state.lastName,
            "number": this.state.number,
            "email":this.state.email,
        }
        // console.log(userValues);
        saveValues.push(userValues)
        this.setState({
            saveValues
        });
  
        console.log("saveValues",saveValues);
        // let array1=this.state.saveValues;
        // console.log("array1",array1);
        
        localStorage.setItem("enteredPageValues", JSON.stringify(saveValues));
        // console.log(saveValues);
            //   if(this.emailValidation()){
            //     console.log(this.state);
            //     this.setState(emailState);
            // }
        
          
            axios({
              // Endpoint to send files
              url: "http://localhost:8080/user/insert",
              method: "POST",
              data: saveValues,
            })
              // Handle the response from backend here
              .then((res) => {
                console.log(res.data)
              })
              // Catch errors if any
              .catch((err) => { });
        
        //   }

    })
    render() {
        return (
            <>
              {/* <Link to="/AddUsers" style={{ textDecoration: 'none' }}><div className="addUsers"><button type="button" onClick={()=>this.addUsers()}>AddUsers<i class="fa-regular fa-user-plus"></i></button></div></Link> */}

               <Link to ="Details1" style={{textDecoration:'none'}} ><div className="saveandclose"><button type="button" onClick={(e) => this.insertValues(e)}>Save and Close <i className="fa-solid fa-floppy-disk"></i></button></div></Link>
                <form className="addUserTable">
                    <label>USERDETAILS
                        <div className="valuesUpdate">
                            <label>username</label>
                            <div className=""><input type="text" class="form-control input-lg" onChange={(e) => { this.setState({ username: e.target.value }) }}></input></div>
                            {/* <label>Last Name</label>
                            <div><input type="text" class="form-control input-lg" onChange={(e) => { this.setState({ lastName: e.target.value }) }}></input></div> */}
                            <label>Number</label>
                            <div><input type="number" class="form-control input-lg" onChange={(e) => { this.setState({ number: e.target.value }) }}></input></div>
                            <label>Email</label>
                            <div><input type="text" class="form-control input-lg" onChange={(e) => { this.setState({email: e.target.value }) }}></input></div>
                        </div>
                    </label>
                </form>
            </>
        )
    }
}
export default AddUsers;
