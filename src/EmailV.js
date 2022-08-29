import React from 'react'
const emailState = {
    email: '',
    error: ''
}
class EmailV extends React.Component {  
    
    constructor(){
        super();
        this.state = emailState;
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({
            email : e.target.value
        });
    }
    emailValidation(){
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!this.state.email || regex.test(this.state.email) === false){
            this.setState({
                error: "Email is not valid"
            });
            return false;
        }
        return true;
    }
    onSubmit(){
        if(this.emailValidation()){
            console.log(this.state);
            this.setState(emailState);
        }
    }
    render(){
        return(
            <div>
                <div className="form-group mb-3">
                  
                    <input type="email" name="email" value={this.state.email} onChange={this.onChange} className="form-control" />
                    <span className="text-danger">{this.state.error}</span>
                </div>

            </div>
        )  
    }
}  
   
export default EmailV;