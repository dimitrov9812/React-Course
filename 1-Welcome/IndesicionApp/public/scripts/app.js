"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Challenge - setup default prop value to 0
var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.handleAddOne = _this.handleAddOne.bind(_this);
        _this.handleMinusOne = _this.handleMinusOne.bind(_this);
        _this.handleRestart = _this.handleRestart.bind(_this);
        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Counter, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log("App Started");
            var json = localStorage.getItem("count");
            var countJson = JSON.parse(json);
            console.log(countJson);
            this.setState(function () {
                return {
                    count: countJson
                };
            });
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevState, prevProps) {
            console.log("Updated");
            var json = JSON.stringify(this.state.count);
            localStorage.setItem("count", json);
        }
    }, {
        key: "handleAddOne",
        value: function handleAddOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: "handleMinusOne",
        value: function handleMinusOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count - 1
                };
            });
        }
    }, {
        key: "handleRestart",
        value: function handleRestart() {
            this.setState(function () {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Count: ",
                    React.createElement(
                        "span",
                        { id: "count" },
                        this.state.count
                    )
                ),
                React.createElement(
                    "button",
                    { id: "plusButton", onClick: this.handleAddOne },
                    "+1"
                ),
                React.createElement(
                    "button",
                    { id: "minusButton", onClick: this.handleMinusOne },
                    "-1"
                ),
                React.createElement(
                    "button",
                    { id: "resetButton", onClick: this.handleRestart },
                    "reset"
                )
            );
        }
    }]);

    return Counter;
}(React.Component);
//Left from the exercise when we used defaultProps
/*
Counter.defaultProps = {
    count: 0
}; 
*/

// Create 3 methods : handleAddOne, handleMinusOne, handleReset
// Use console.log to print the method name
// Wire up onClick & bind in the constructor 

var counterDiv = $("#counter-div")[0];
//if we want to start the count from 100
/*
ReactDOM.render(<Counter count = {100}/>,counterDiv);
*/
//if we do not specify count value 
ReactDOM.render(React.createElement(Counter, null), counterDiv);
