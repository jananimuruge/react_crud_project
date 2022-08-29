import axios from "axios";
const User_Rest_Api_URL='http://192.168.1.124:8080/user/display';

class DisplayValues{
    getUsers(){
        return axios.get(User_Rest_Api_URL);
    }
}
export default new DisplayValues();