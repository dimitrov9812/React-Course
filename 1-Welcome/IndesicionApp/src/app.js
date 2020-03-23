
class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        options: ["Hello","Test","Message"]
      };
    }
    handleDeleteOptions() {
      this.setState(() => {
        return {
          options: []
        };
      });
    }
    handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    }
    handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }
  
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
    render() {
      const title = 'Indecision';
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div id="wrap">
          <Header title={title} subtitle={subtitle} />
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>
      );
    }
  }
  
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
  
  class Option extends React.Component {
    render() {
      return (
        <div id="option">
          {this.props.optionText}
        </div>
      );
    }
  }
  
  class AddOption extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        error: undefined
      };
    }
    handleAddOption(e) {
      e.preventDefault();
  
      const option = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option);
  
      this.setState(() => {
        return { error };
      });
    }
    render() {
      return (
        <div id="add-option">
          {this.state.error && <p id="error">{this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
            <input type="text" id="text-field" name="option" />
            <button id="add-button">Add Option</button>
          </form>
        </div>
      );
    }
  }
  const componentDiv = $("#component-div")[0];
  ReactDOM.render(<IndecisionApp />,componentDiv);