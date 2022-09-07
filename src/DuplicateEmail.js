import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { values } from "lodash";
import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, NavLink, Switch, Route, Routes } from 'react-router-dom';
import validator from "validator";
import { useFormik } from 'formik';
const emailState = {
    email: '',
    error: ''
}
class AddUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            lastName: '',
            number: '',
            saveValues: '',
            userdetails: [],
            email: '',
            isDisabled: true,
            usererror: '',
            // ErrorStatus : true,

        }
    }

    onChange(e) {
        this.setState({
            email: e.target.value
        });
    }
    emailValidation() {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!this.state.email || regex.test(this.state.email) === false) {
            this.setState({
                error: "Email is not valid"
            });
            return false;
        }

        return true;

    }

    insertValues = ((e) => {
        window.location.pathname = "/Details1";
        // e.preventDefault();
        let { userdetails } = this.state;
        if (this.state.username.trim().length !== 0 && this.state.number.trim().length !== 0 && this.state.email) {
            // this.setState({TextInputValue : TextInputValue, ErrorStatus : true})

            const userValues = {
                // "username": this.state.username,
                // "lastName": this.state.lastName,
                // "number": this.state.number,
                "email": this.state.email,
            }
            // console.log(userValues);
            userdetails.push(userValues)
            this.setState({
                userdetails
            });

            console.log("saveValues", userdetails);
            if (userdetails.some(value => value.email === userdetails.email)) {
                alert("email is already exist");
                return
            }


            localStorage.setItem("enteredPageValues", JSON.stringify(userdetails));
            // console.log(saveValues);
            if (this.emailValidation()) {
                console.log(this.state);
                this.setState(emailState);


            }
            else {
                alert("please enter valid email");
                return;
            }
        }
        else {
            alert("please enter the values");
            this.setState({userdetails : userdetails, ErrorStatus : false}) 
        }
        let totalObject = {
            "userdetails": userdetails,

        };

        axios({
            // Endpoint to send files
            // url: `http://localhost:8080/user/insert?email=${this.state.email}`,
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

        //   }

    })
    render() {
        return (
            <>
                {/* <Link to="/AddUsers" style={{ textDecoration: 'none' }}><div className="addUsers"><button type="button" onClick={()=>this.addUsers()}>AddUsers<i class="fa-regular fa-user-plus"></i></button></div></Link> */}

                <Link to="Details1" style={{ textDecoration: 'none' }} ><div className="saveandclose"><button type="button" onClick={(e) => this.insertValues(e)}>Save and Close <i className="fa-solid fa-floppy-disk"></i></button></div></Link>
                <form className="addUserTable">
                    <div className="userDetails"> <label className="userDetails">USERDETAILS   </label></div>
                    <div className="valuesUpdate">
                        <label>UserName
                            <div className="name"><input type="text" class="form-control input-lg" placeholder="please enter your name" onChange={(e) => { this.setState({ username: e.target.value }) }} ></input></div>
                            {/* <div className="namemsg" onChange={(e) => { this.setState({ usererror:e.target.values }) }}>username cannot be empty</div> */}
                            </label>
                        {/* <label>Last Name</label>
                            <div><input type="text" class="form-control input-lg" onChange={(e) => { this.setState({ lastName: e.target.value }) }}></input></div> */}
                        <label>Number
                            <div className="number2"><input type="number" class="form-control input-lg" placeholder="please enter your number" onChange={(e) => { this.setState({ number: e.target.value }) }}></input></div>
                            {/* <div className="namemsg" onChange={(e) => { this.setState({ usererror:e.target.values }) }}>username cannot be empty</div> */}
                            </label>
                       
                        <label>Email
                            {/* <div><input type="text" class="form-control input-lg" onChange={(e) => { this.setState({email: e.target.value }) }}></input></div> */}
                            {/* <div><input type="text" class="form-control input-lg" onChange={(e)=>{this.handleChange(e)}}></input>
                            {this.state.emailError ? <span style={{color: "red"}}>Please Enter valid email address</span> : ''}</div> */}
                            <div className="email"><input type="text" class="form-control input-lg" placeholder="please enter your email" onChange={(e) => this.onChange(e)} /></div>
                        <span className="text-danger">{this.state.error}</span>
                        {/* <div className="namemsg" onChange={(e) => { this.setState({ usererror:e.target.values }) }}>username cannot be empty</div> */}
                        </label>
                        {/* { this.state.ErrorStatus == false ? (
             <div style={styles.errorMessage}>
               * Please enter the values.
             </div>
            ) : null  } */}

                    </div>


                </form>
            </>
        )
    }
}

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundColor: "#e5e5e5"
//     },
//     errorMessage: {
//       fontSize: 20,
//       color:"red",
//       marginLeft:-80,
//     }
//   });
export default AddUsers;

// axios({
//     // Endpoint to get user details
//     url: `http://localhost:8080/user/display`,
//     method: "GET",
//   })

//     // Handle the response from backend here
//     .then((res) => {
//       console.log(res)
//       let userdetails = res.data.userdetails;
//       this.setState({
//         rowData: userdetails
//       })

//     })

//     // Catch errors if any
//     .catch((err) => { });
