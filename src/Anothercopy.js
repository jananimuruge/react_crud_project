import React,{Components} from "react";
import axios from "axios";
class AnotherCopy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            number: '',
            details:[]
        }
       

    }
    insertValues() {
        // e.preventDefault();
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
        axios.post('http://192.168.1.124:8080/user/insert', userElements)
        .then(res => console.log(res.data));
    }

    componentDidMount() {
        fetch("http://192.168.1.124:8080/user/display")
        .then(response => response.json())
        .then(data => this.setState({ username: data.username, number: data.number }))
        
    }
    // componentDidMount(){
    //     this.getValues()
    // }
   
   
    fetchName = () => {
        let { details } = this.state;
        let userElements = {
            "username": this.state.username,
            "number": this.state.number,
        }
        console.log(userElements);
        details.push(userElements)
        this.setState({
            details
        });
        
        fetch(`http://192.168.1.124:8080/user/update?username=${this.state.username}&number=${this.state.number}`)
        
            .then((response) => response.json())
            .then(details => {
                this.setState({details: details });
            });
    }
    deleteValues(e) {
        e.preventDefault();
        axios.delete(`http://192.168.1.124:8080/user/delete?${this.state.username}`)
        .then(res => console.log(res.data));
    }

    render() {
        // const {username,number,details}=this.state;
        return (
            <>
                <div>
                <input type="text" onChange={(e) => { this.setState({ username: e.target.value }) }}></input>
                <input type="text" onChange={(e) => { this.setState({ number: e.target.value }) }}></input>
                {/* <button onClick={()=>this.getValues()}>get</button> */}
                    <button onClick={()=>this.insertValues()}>insert</button>
                   
                {/* <p>Name: {this.state.username}</p>
              <p>Number: {this.state.number} </p> */}
              
              <button onClick={() => this.fetchName()}>Update</button>
                  
                    {/* {this.books.length > 0 && ( */}
                        <ul>
                            {this.state.details.map((book) => (
                                <li>
                                <li key={book.username}>{book.username},{book.number}</li>
                                {/* <li key={book.number}>{book.number}</li>  */}
                                </li>
                                
                            ))}
                        </ul>
                    {/* )} */}
                    <button onClick={(e)=>this.deleteValues(e)}>delete</button>

                </div>
            </>
        )
    }
}
export default AnotherCopy;