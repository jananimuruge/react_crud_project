var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var NormalApi = function (_Component) {
  _inherits(NormalApi, _Component);

  function NormalApi() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NormalApi);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NormalApi.__proto__ || Object.getPrototypeOf(NormalApi)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      error: null,
      isLoaded: false,
      items: [],
      username: '',
      number: '',
      givenDetails: ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NormalApi, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      axios.get("http://192.168.1.124:8080/user/update?number=102&username=raj").then(function (result) {
        _this2.setState({
          isLoaded: true,
          items: result.data,
          username: result.data,
          number: result.data
        });
      }, function (error) {
        _this2.setState({
          isLoaded: true,
          error: error

        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          error = _state.error,
          isLoaded = _state.isLoaded,
          items = _state.items;

      if (error) {
        return React.createElement(
          'div',
          null,
          'Error: ',
          error.message
        );
      } else if (!isLoaded) {
        return React.createElement(
          'div',
          null,
          'Loading...'
        );
      } else {
        return React.createElement(
          'ul',
          null,
          this.state.username.map(function (item) {
            return React.createElement(
              'li',
              { key: item.id },
              item.username,
              ': ',
              item.name
            );
          })
        );
      }
    }
  }]);

  return NormalApi;
}(Component);

export default NormalApi;