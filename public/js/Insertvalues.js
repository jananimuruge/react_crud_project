var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

import axios from "axios";

var User_Rest_Api_URL = 'http://192.168.1.124:8080/user/insert';

var InsertValue = function () {
    function InsertValue() {
        _classCallCheck(this, InsertValue);
    }

    _createClass(InsertValue, [{
        key: "getUsers",
        value: function getUsers() {
            return axios.get(User_Rest_Api_URL);
        }
    }]);

    return InsertValue;
}();

export default new InsertValue();