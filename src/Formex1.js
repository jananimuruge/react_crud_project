// import React from 'react';
import moment from 'moment';
import { ReactDOM } from 'react-dom';
// import Details1 from './Details1';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import React, { Component } from 'react';
import Inputalone from './Inputalone';
import axios from 'axios';
import UserService from './UserService';
export class Formex1 extends Component {
    constructor(props) {

        super(props);
        this.state = {
            name: "",
            number: "",
            userdetail: [],
            
            // userId:""
            // users:"",
           
        }
    }
  
    // componentDidMount(){
    //     UserService.getUsers().then((response)=>{
    //         this.setState({users:response.data})
    //     })
    // }

    consolevalue = (event) => {
        let { userdetail } = this.state;

        let date = new moment();
        let currentdate = moment(date).format('MM-DD-YYYY H:MM:SS');
        let objectElements = {
            // "userId":this.state.userdetail,
            "name": this.state.name,
            "number": this.state.number,
            // "currentdate": currentdate
        }
        console.log(objectElements);
        userdetail.push(objectElements)
        this.setState({
            userdetail
        });
        

        localStorage.setItem("currentuserdetail", JSON.stringify(userdetail));
        console.log("msg" + this.state.userdetail);

        // window.location.pathname = "/Logout";
        window.location.pathname = "/Details1";


    }
    render() {
        const { user } = this.state;
        const { userdetail } = this.state;

        return (
            <>
                <div className='container'>
                    <div className='form'>

                        <div className='login'><div><b>Login</b></div>
                        </div>
                        <div className='userclass'>
                            <div className="usericon"><i className="fa-solid fa-user"></i></div>
                            <div><input type="text" className="username" name="name" placeholder="Username" onChange={(e) => { this.setState({ username: e.target.value }) }} /><br></br><br></br></div></div>
                        <div className='numberclass'>
                            <div className='numbericon'> <i className="fa-solid fa-lock"></i></div>
                            <div><input type="number" className="number" name="number" placeholder="Password" onChange={(e) => { this.setState({ number: e.target.value }) }} /><br></br><br></br></div></div>

                        <button onClick={this.consolevalue} className="update">Login</button>

 
                    </div>
                </div>


            </>
        )
    }
}

export default Formex1;