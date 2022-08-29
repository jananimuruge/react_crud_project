import React from "react";
import axios from "axios";
import { render } from "@testing-library/react";
class Edit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            number:'',
            details:[]
            
        }
    

    }

insertValues=()=>{
    this.gridApi.applyTransaction({add:[{}]})
    let { details } = this.state;
    const userElements = {
        "username": this.state.username,
        "number": this.state.number,
    }
    console.log(userElements);
    details.push(userElements)
    this.setState({
        details
    });
    // axios.post('http://192.168.1.124:8080/user/insert',userElements)
    // .then(res => console.log(res.data));

    axios({
        // Endpoint to send files
        url: "http://192.168.1.124:8080/user/insert",
        method: "POST",
        data: userElements,
      })
    
        // Handle the response from backend here
        .then((res) => {
            console.log(res.data)

         })
    
        // Catch errors if any
        .catch((err) => { });
}

render(){
    return(
    <>
        <div><button onClick={()=> this.insertValues()}>insert</button></div>   

    
    
    
    </>
    )
}
}
export default Edit;