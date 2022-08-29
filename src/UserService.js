import axios from "axios";

const User_Rest_Api_URL='http://192.168.1.124:8080/user/update?number=102&username=raj';

class UserService{
    getUsers(){
        return axios.get(User_Rest_Api_URL);

    }
    // render(){
    //     return(
    //         <>
    //           <div>
    //             <button onClick={()=>this.getUsers}>Update</button>
    //           </div>
    //         </>
    //     )
    // }    
}
export default new UserService();