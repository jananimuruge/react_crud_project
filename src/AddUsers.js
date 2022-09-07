import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { values } from "lodash";
import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, NavLink, Switch, Route, Routes } from 'react-router-dom';
import validator from "validator";
import { useFormik } from 'formik';

class AddUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            number: '',
            email: '',
            formErrors: {},

        }
    }
    handleFormValidation() {
        const { userName, email, number } = this.state;
        let formErrors = {};
        let formIsValid = true;

        //Student name     
        if (!userName) {
            formIsValid = false;
            formErrors["userNameErr"] = "Name is required.";
        }

        //Email    
        if (!email) {
            formIsValid = false;
            formErrors["emailErr"] = "Email id is required.";
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {

            formIsValid = false;
            formErrors["emailErr"] = "Invalid email id.";
            // const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            // if (!this.state.email || regex.test(this.state.email) === false) {
            //     this.setState({
            //         emailError: "Email is not valid"
            //     });
            //     return false;
            // }   
        }

        //Phone number    
        if (!number) {
            formIsValid = false;
            formErrors["numberErr"] = "Number is required.";
        }

        if (email && formIsValid) {
            let emailExist = false;
            axios({
                url: `http://localhost:8080/user/insert/validate-email?email=${this.state.email}`,
                method: "GET"
            })
                // Handle the response from backend here
                .then((res) => {
                    let responseData = res.data.jData;
                    if (responseData && responseData.isAvailable) {
                        emailExist = true;
                    }
                    else {
                        emailExist = false;
                        formErrors["emailErr"] = "Email already exist.";
                        return;
                    }
                })
                // Catch errors if any
                .catch((err) => {
                    emailExist = false;
                    formErrors["emailErr"] = "Email validation fail.";
                    return;
                });

            formIsValid = emailExist;
        }

        this.setState({ formErrors: formErrors });
        return formIsValid;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.handleFormValidation());
        return;
        if (this.handleFormValidation()) {

            let dataObject = {
                'userName': this.state.userName,
                'number': this.state.number,
                "email": this.state.email
            }
            axios({
                url: "http://localhost:8080/user/insert",
                method: "POST",
                data: dataObject,
            })
                // Handle the response from backend here
                .then((res) => {
                    window.location.pathname = "/Details1";
                })
                // Catch errors if any
                .catch((err) => { });

            //   }
        }

    }

    handleChange = (e) => {
        const { name, value } = e.target;
        console.log([name] + " : " + value);
        this.setState({ [name]: value });
    }

    render() {
        // const { emailError } = this.state;
        const { userNameErr, emailErr, numberErr } = this.state.formErrors;
        return (
            <>
                <div className="saveandclose"><button type="button" onClick={this.handleSubmit}>Save and Close <i className="fa-solid fa-floppy-disk"></i></button></div>
                <div className="formDiv">
                    <div className="addUserDetails">Add Users Details</div>
                    <div >
                        <form onSubmit={this.handleSubmit} className="totalInput">
                            <div className="addname">
                                <div><label htmlFor="userName">Name</label></div>
                                <input type="text" name="userName"
                                    value={this.state.userName}
                                    onChange={this.handleChange}
                                    placeholder="Your name.."
                                    className={userNameErr ? ' showError' : ''} />
                                {userNameErr &&
                                    <div style={{ color: "red", paddingBottom: 10 }}>{userNameErr}</div>
                                }

                            </div>


                            <div className="addnumber">
                            <div><label htmlFor="number">Number</label></div>
                                <input type="number" name="number"
                                    onChange={this.handleChange}
                                    value={this.state.number}
                                    placeholder="Your number.."
                                    className={numberErr ? ' showError' : ''} />
                                {numberErr &&
                                    <div style={{ color: "red", paddingBottom: 10 }}>{numberErr}</div>
                                }
                            </div>

                            <div className="addemail">
                            <div><label htmlFor="email">Email Id</label></div>
                                <input type="text" name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    placeholder="Your email id.."
                                    className={emailErr ? ' showError' : ''} />
                                {emailErr &&
                                    <div style={{ color: "red", paddingBottom: 10 }}>{emailErr}</div>
                                }

                            </div>

                            {/* <input type="submit" value="Submit" /> */}
                        </form>
                    </div>
                </div >
            </>
        )
    }
}


export default AddUsers;