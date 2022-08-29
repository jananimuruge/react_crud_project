var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import { Icon } from '@iconify/react';

var DeleteButton = function (_React$Component) {
    _inherits(DeleteButton, _React$Component);

    function DeleteButton(props) {
        _classCallCheck(this, DeleteButton);

        var _this = _possibleConstructorReturn(this, (DeleteButton.__proto__ || Object.getPrototypeOf(DeleteButton)).call(this, props));

        _this.buttonClick = function (e) {

            _this.setState({
                visible: true
            });
            var deletedRow = _this.props.node.data;
            _this.gridApi.updateRowData({ remove: [deletedRow] });
        };

        return _this;
    }

    _createClass(DeleteButton, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.gridApi = this.props.api;
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: function onClick() {
                            return _this2.buttonClick(_this2.props.node);
                        } },
                    React.createElement(Icon, { icon: "ion:trash-bin", style: { color: 'red' } })
                )
            )
            //    <>

            //    </>
            ;
        }
    }]);

    return DeleteButton;
}(React.Component);

export default DeleteButton;