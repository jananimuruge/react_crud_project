// import React from "react";
// class NormalApi extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             username:'',
//             number:''
//         };
//         this.create = this.create.bind(this);
//         this.update = this.update.bind(this);
//         this.delete = this.delete.bind(this);
//         this.handleChange = this.handleChange.bind(this); 
//     }
    
//   create(e) {
//     e.preventDefault();
//   }
//   update(e) {
//     e.preventDefault();
//   }
//   delete(e) {
//     e.preventDefault();
//   }
//   handleChange(changeObject) {
//     this.setState(changeObject)
//   }
//     render(){

//         return(
//             <>
//             <div>
//                 <input name="name"
//                     id="name"
//                     type="text"
//                     className="form-control"
//                     value={this.state.name}
//                     onChange={(e) => this.handleChange({ name: e.target.value })}/>
//                 <input name="notes"
//                     id="notes"
//                     type="test"
//                     className="form-control"
//                     value={this.state.notes}
//                     onChange={(e) => this.handleChange({ notes: e.target.value })}/>
//                 <button className="btn btn-primary" type='button' onClick={(e) => this.create(e)}>Add</button>
//                 <button className="btn btn-info" type='button' onClick={(e) => this.update(e)}>Update</button>
//                 <button className="btn btn-danger" type='button' onClick={(e) => this.delete(e)}>delete</button>
//             </div>
//             </>
//         )
//     }
// }
// export default NormalApi;

// let domContainer = document.querySelector('#App');
// ReactDOM.render(<App />, domContainer);
import React, { Component } from "react";
import axios from 'axios';

export default class NormalApi extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
    username:'',
    number:'',
    givenDetails:''
  };

  componentDidMount() {
    axios.get("http://192.168.1.124:8080/user/update?number=102&username=raj").then(
        result => {
            this.setState({
              isLoaded: true,
              items: result.data,
              username:result.data,
              number:result.data
            });
          },
         
          error => {
            this.setState({
              isLoaded: true,
              error

            });
          }
          );
      }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {this.state?.username.map(item => (
            <li key={item.id}>
              {item.username}: {item.name}
            </li>
          ))}
        </ul>
      );
    }
  }
}