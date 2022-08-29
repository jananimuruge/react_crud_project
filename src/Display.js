import React from 'react';
import moment from 'moment';
import { ReactDOM } from 'react-dom';
import Details1 from './Details1';
class Display extends React.Component{
     constructor(props){
    
 super(props);   
  this.state={
        username:"",
        number:"",
        userdetail:[],
        
        
  }
     }

// onChange=props=>{
//     console.log(props.target.name);
//     let name=props.target.name;
//         this.setState({
//             [name]:props.target.value},
//              ()=> this.consolevalue()
//     );
    // console.log(name)
    // );
  
// }      

consolevalue=(event)=>{
    // window.location.pathname="/Formex1"; 
    // window.location.pathname="/Details1";
    console.log(this.state.username);
    console.log(this.state.number);
   let {userdetail}=this.state;
       
   let date=new moment();
   let currentdate=moment(date).format('MM-DD-YYYY H:MM:SS');
   let objectElements={
    "username":this.state.username,
    "number":this.state.number,
    "currentdate":currentdate
 
} 
console.log(objectElements);
userdetail.push(objectElements)
   this.setState({
    userdetail
   })
console.log(userdetail);

// const repitation=[];
// this.userdetail.filter(element => {
//     if(!repitation.some(o=>o.username===element.username)){
//         repitation.push(...element)
//     }
// });
// console.log(repitation);

}
    render()
    {
    const {username}=this.state;
    const {userdetail}=this.state;
       
    return (
        <>
           <div className='container'>
              <div className='form'>
              
                <div className='login'><div><b>Login</b></div>
               </div>
                <div className='userclass'>
                    <div className="usericon"><i className="fa-solid fa-user"></i></div>
                <div><input type="text" className="username" name="username" placeholder="Username" onChange={(e)=>{this.setState({username:e.target.value})}}  /><br></br><br></br></div></div>
                <div className='numberclass'>
                    <div className='numbericon'> <i className="fa-solid fa-lock"></i></div>
                <div><input type="number" className="number" name="number" placeholder="Password" onChange={(e)=>{this.setState({number:e.target.value})}}  /><br></br><br></br></div></div>
                
                <button onClick={this.consolevalue} className="update">Login</button>
                {/* <button className='update'><a type="button" href="Details.js" onClick={this.consolevalue} >Login</a></button> */}
                {/* <button className="update" onClick={}>Login</button> */}
                {/* <table className='table' id="show">
            <thead>
            <tr>
                <th>Username</th>
                <th>Values</th>
                <th>Date and Time</th>
            </tr>
            </thead>
            <tbody>
           
            {
                this.state?.userdetail.map((val,i)=> {
       
                    return(
                        
                        <tr key={i}>
                <td>{val.username}</td>
                <td>{val.number}</td>
                <td>{val.currentdate}</td>
               
            </tr>
                    );
                    

                })
                


            }
            </tbody>
        </table> */}
             
                </div>
        </div>
     
        
        </>
    )
}
}

export default Display;