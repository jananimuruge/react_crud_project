var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import axios from "axios";

var GetApi = function (_React$Component) {
  _inherits(GetApi, _React$Component);

  function GetApi(props) {
    _classCallCheck(this, GetApi);

    var _this = _possibleConstructorReturn(this, (GetApi.__proto__ || Object.getPrototypeOf(GetApi)).call(this, props));

    _this.state = {

      username: '',
      number: ''
    };
    return _this;
  }

  _createClass(GetApi, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch('http://192.168.1.124:8080/user/display').then(function (response) {
        return response.json();
      }).then(function (data) {
        return _this2.setState({ username: data.username, id: data.number });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var username = this.state.username;
      var number = this.state.number;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          "Name: ",
          this.state.username
        ),
        React.createElement(
          "p",
          null,
          "Number: ",
          this.state.number,
          " "
        )
      );
    }
  }]);

  return GetApi;
}(React.Component);

export default GetApi;