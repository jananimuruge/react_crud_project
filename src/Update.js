// import React from "react";
// import axios from "axios";
// // import UserService from "./UserService";
// class Update extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//            username:'',
//            number:'',
//            details:[]

//         }
//     }
//     // getValues() {

//     //     axios({
//     //         // Endpoint to send files
//     //         url: "http://192.168.1.124:8080/user/display",
//     //         method: "GET",
//     //       })
        
//             // Handle the response from backend here
//             // .then((res) => {
//             //     this.setState({ username: res.username, number: res.number })

//             //  })
        
//             // Catch errors if any
//     //         .catch((err) => { });
//     // }
//     // componentDidMount(){
//     //     this.getValues()
//     // }
//     // fetchName = () => {
//         // let { details } = this.state;
//         // let userElements = {
//         //     "username": this.state.username,
//         //     "number": this.state.number,
//         // }
//         // console.log(userElements);
//         // details.push(userElements)
//         // this.setState({
//         //     details
//         // });
        
      
//     //     axios.put(`http://192.168.1.124:8080/user/update?username=${this.state.username}&number=${this.state.number}`)
        
//     //         .then((response) => response.json())
//     //         .then(details => {
//     //             this.setState({details: details });
//     //         });
        
//     // }
//     fetchName() {
//         // Simple PUT request with a JSON body using fetch
//         const requestOptions = {
//             method: 'PUT',
//             // headers: { 'Content-Type': 'application/json' },
//             // body: JSON.stringify({ title: 'React PUT Request Example' })
//         };
//         fetch(`http://192.168.1.124:8080/user/update?username=${this.state.username}&number=${this.state.number}`, requestOptions)
//             .then(response => response.json())
//             .then(data => this.setState({ postId: data.id }));
//     }
  
//     render(){
//         return(
//             <>
//             <div>
//                 {/* <button onClick={()=>this.fetchName()}>Update</button> */}
//                 <button onClick={()=>this.fetchName()}>Update</button>
             
//             </div>
            
//             </>
//         )
//     }
// }
// export default Update;