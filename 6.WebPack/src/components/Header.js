import React from 'react';

  //Header stateless function
  const Header = (props) => {
    return (
      <div id="head">
        <h1>{props.title}</h1>
       {props.subtitle &&  <h2>{props.subtitle}</h2>}
      </div>
    );
  };
  //Set Default props values for the Header component
  Header.defaultProps = {
    title: "Indecision"
  };
  export default Header;

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