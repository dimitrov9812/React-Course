 import React from 'react';
 import Option from './Option';

 //Options stateless function
 const Options = (props) => (
      <div id="options">
        <div id="remove-div">
          <button id="remove-button" onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
        {props.options.length === 0 && <p>Please add an option to get started</p>}
        {
          props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
  );

  
  export default Options;
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