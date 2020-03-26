"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//stateless functional component
var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    _this.state = {
      options: []
    };
    return _this;
  }
  //life cycle methods - fire only in class components


  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var json = localStorage.getItem("options");
      var optionsJson = JSON.parse(json);
      console.log(optionsJson);
      if (options) {
        this.setState(function () {
          return {
            options: optionsJson
          };
        });
      }
    }
    //another life cycle method

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
      }
    }
    //another life cycle method

  }, {
    key: "componentWillUnMount",
    value: function componentWillUnMount() {
      console.log("componentWillMount");
    }
  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.includes(option) === true) {
        return 'This option already exists';
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)

        };
      });
    }
  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(option) {
      var index = this.state.options.indexOf(option);
      console.log("index is" + index);
      this.setState(function (prevState) {
        return {
          options: prevState.options.splice(index)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = 'Indecision';
      var subtitle = 'Put your life in the hands of a computer';

      return React.createElement(
        "div",
        { id: "wrap" },
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

//Header stateless function


var Header = function Header(props) {
  return React.createElement(
    "div",
    { id: "head" },
    React.createElement(
      "h1",
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      "h2",
      null,
      props.subtitle
    )
  );
};
//Set Default props values for the Header component
Header.defaultProps = {
  title: "Indecision"
};

//Old class based component: 
/*
class Header extends React.Component {
  render() {
    return (
      <div id="head">
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}
*/
//Action stateless function
var Action = function Action(props) {
  return React.createElement(
    "div",
    { id: "action" },
    React.createElement(
      "button",
      {
        id: "action-button",
        onClick: props.handlePick,
        disabled: !props.hasOptions
      },
      "What should I do?"
    )
  );
};
//Old class based component:
/*
class Action extends React.Component {
  render() {
    return (
      <div id="action">
        <button
          id="action-button"
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
}
*/
//Options stateless function
var Options = function Options(props) {
  return React.createElement(
    "div",
    { id: "options" },
    React.createElement(
      "div",
      { id: "remove-div" },
      React.createElement(
        "button",
        { id: "remove-button", onClick: props.handleDeleteOptions },
        "Remove All"
      )
    ),
    props.options.length === 0 && React.createElement(
      "p",
      null,
      "Please add an option to get started"
    ),
    props.options.map(function (option) {
      return React.createElement(Option, { key: option, optionText: option });
    })
  );
};
//Old class based component: 
/*
class Options extends React.Component {
  render() {
    return (
      <div id="options">
        <button id="remove-button" onClick={this.props.handleDeleteOptions}>Remove All</button>
       
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
        
      </div>
    );
  }
}
*/
//Option tateless function
/*
const Option = (props) => {
 
 return (
   <div id="option">
     {props.optionText}
     <span id={props.optionText}>X</span>
   </div>
 );
};
*/
//Old class based component: 

var Option = function (_React$Component2) {
  _inherits(Option, _React$Component2);

  function Option(props) {
    _classCallCheck(this, Option);

    var _this2 = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

    _this2.handleDeleteOption = _this2.handleDeleteOption.bind(_this2);
    return _this2;
  }

  _createClass(Option, [{
    key: "handleDeleteOption",
    value: function handleDeleteOption(e) {
      var deleteID = e.target.id;
      console.log(deleteID);
      var error = this.props.handleDeleteOption(option);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "option" },
        React.createElement(
          "span",
          { id: "option-text" },
          this.props.optionText
        ),
        React.createElement(
          "div",
          { className: "deleteDiv", id: this.props.optionText, onClick: this.handleDeleteOption },
          React.createElement(
            "span",
            { id: this.props.optionText },
            "X"
          )
        )
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component3) {
  _inherits(AddOption, _React$Component3);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this3 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this3.handleAddOption = _this3.handleAddOption.bind(_this3);
    _this3.state = {
      error: undefined
    };
    return _this3;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);
      this.setState(function () {
        return {
          error: error
        };
      });
      if (!error) {
        e.target.elements.option.value = '';
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { id: "add-option" },
        this.state.error && React.createElement(
          "p",
          { id: "error" },
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", id: "text-field", name: "option" }),
          React.createElement(
            "button",
            { id: "add-button" },
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

// Stateless function example:
/*
const User =(props) =>{
  return(
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}
*/
//Challenge -> Convert all methods(int this case - Action,Option,Options,Header)which will not affect the IndecisionApp to stateless functions


var componentDiv = $("#component-div")[0];
ReactDOM.render(React.createElement(IndecisionApp, null), componentDiv);
