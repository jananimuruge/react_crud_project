import { AgGridColumn, AgGridReact } from "ag-grid-react";
import { values } from "lodash";
import React from "react";
import axios from "axios";
class AddUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
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
            "firstName": this.state.firstName,
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

    })
    render() {
        return (
            <>
                <button type="button" onClick={(e) => this.insertValues(e)}>Save and Close</button>
                <form className="addUserTable">
                    <label>USERDETAILS
                        <div className="valuesUpdate">
                            <label>First Name</label>
                            <div className=""><input type="text" class="form-control input-lg" onChange={(e) => { this.setState({ firstName: e.target.value }) }}></input></div>
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
