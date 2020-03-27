import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.state = {
        options: []
      };
    }
    //life cycle methods - fire only in class components
    componentDidMount(){
      const json = localStorage.getItem("options");
      const optionsJson = JSON.parse(json);
      console.log(optionsJson);
      if(options){
        this.setState(() => ({
          options: optionsJson
        }))
      }
    }
    //another life cycle method
    componentDidUpdate(prevProps, prevState){
      if(prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem("options",json);
      }
    } 
    //another life cycle method
    componentWillUnMount(){
      console.log("componentWillMount");
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
      } else if (this.state.options.includes(option) === true) {
        return 'This option already exists';
      }
  
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option),

        };
      });
    }
    handleDeleteOption(option){
      const index = this.state.options.indexOf(option);
      console.log("index is" + index);
      this.setState((prevState) => {
        return {
          options: prevState.options.splice(index)
        };
      });
    }
    render() {
      const title = 'Indecision';
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div id="wrap">
          <Header  title={title} subtitle={subtitle} />
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>
      );
    }
  }

export default IndecisionApp;