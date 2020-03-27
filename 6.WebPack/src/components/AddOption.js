import React from 'react';
export default class AddOption extends React.Component {
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
      console.log("testing");
      this.setState(() => {
        return {
           error
         };
      });
      if(!error){
        e.target.elements.option.value = '';
      }
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