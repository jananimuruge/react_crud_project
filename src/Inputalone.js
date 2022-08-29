import React from "react";
import Details1 from "./Details1";
class Inputalone extends React.Component{
    constructor(props){
     super(props);
     this.state={
        username1:'',
        password:''
     }
    }
    render(){
        return(
            <>
        <div>
            <input type="text" placeholder="username"/>
            <input type="text" placeholder="number"/>
        </div>
            </>
        )
    }
}
export default Inputalone;