class IndecisionApp extends React.Component{
    render(){
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of a computer";
        const options = ["Thing one","Thing two","Thing three","Thing four"];
       return (
           <div>
                <Header title={title} subtitle={subtitle}/>
                <Action options={options}/>
                <Options options={options}/>
                <AddOption />
           </div>
       )
    }
};

class Header extends React.Component{
    render(){
        console.log(this.props);
       return (
           <div>
               <h1>{this.props.title}</h1>
               <h2>{this.props.subtitle}</h2>
           </div>
       )
    }
};

class Action extends React.Component{
    handlePick(){
        console.log("Random Option Picked");
    }
    render(){
        console.log(this.props);
        console.log(this.props.options.length);
        return (
            <div>
                <button onClick={this.handlePick}>What should i do?</button>
            </div>
        )
    }
};

//make class Options ->  Options component here
//Challenge: set up opions prop for Options component
//render the length of the array
class Options extends React.Component{
    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this);
    }
    removeAll(){
        console.log(this.props.options);
    }
    render(){
        console.log(this.props);
        return (
            <div>
                <ol>
                    <button onClick={this.removeAll}>RemoveAll</button>
                    {this.props.options.map((x)=> <Option key={x} optionText={x} />)}
                </ol>
            </div>
        )
    }
};
//make Option class -> render it in options as a child
class Option extends React.Component{
    render(){
        return (
            <div>
                <li>{this.props.optionText}</li> 
            </div>
        )
    }
};

//AddOption -> make AddOption component here
class AddOption extends React.Component{
    handleAddOption (e){
        e.preventDefault();
        const option = e.target.elements.text.value;
        if(option.length > 0){
            console.log("Option Added");
            e.target.elements.text.value="";
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="text" placeholder="Enter desired options" />
                    <button >Add Option</button>
                </form>
            </div>
        )
    }
};

const componentDiv = $("#component-div")[0];
ReactDOM.render(<IndecisionApp />,componentDiv);
