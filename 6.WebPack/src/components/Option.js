import React from 'react';

class Option extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }
     handleDeleteOption(e){
     const deleteID = e.target.id;
     console.log(deleteID);
     const error = this.props.handleDeleteOption(option);
   }
    render() {
      return (
        <div id="option">
          <span id="option-text">{this.props.optionText}</span>
            <div className="deleteDiv" id={this.props.optionText} onClick={this.handleDeleteOption}>
              <span id={this.props.optionText}>X</span>
            </div>
        </div>
      );
    }
  }

  export default Option;

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