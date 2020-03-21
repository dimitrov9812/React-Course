class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: ["Dimi","Suny","Sashko"],
            error: ""
        };
    }
    // hadnleDeleteOptions
    handleDeleteOptions() {
        this.setState(() =>{
            return{
                options: []
            };
        });
    }
    //Challenge -> create handlePick -> pass it to Action and bind it here
    //randomly pick an option and alert it 
    handlePick() {
        const rand = Math.floor(Math.random()* this.state.options.length);
        console.log(rand);
        const option = this.state.options[rand];
        alert(option);
    }
    handleAddOption (e){
        e.preventDefault();
        const option = e.target.elements.text.value;
        if(option.length > 0){
            console.log("Option Added");
            if(this.state.options.indexOf(option) > -1){
                this.state.error = "This option already exists";
                return this.state.error;
            }
            else{
                this.state.options.push(option);
                e.target.elements.text.value="";
                console.log(this.state.options);
            }
        }
        else if(!option){
            return"Enter valid value to add item";
        }
        this.setState(() =>{
            return{
                options: this.state.options,
            };
        });
    }

    render(){
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of a computer";

       return (
           <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                hasOptions={this.state.options.length > 0}
                handlePick = {this.handlePick}
                 />
                <Options
                options={this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
                 />
                 <Error error={this.state.error}/>
                <AddOption handleAddOption={this.handleAddOption} />
           </div>
       )
    }
}; 
class Error extends React.Component{
    render(){
        console.log(this.props);
       return (
           <div>
              <h6>{this.props.error}</h6>
           </div>
       )
    }
}
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
    render(){
        return (
            <div>
                <button 
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
                >
                    What should i do?
                </button>
            </div>
        )
    }
};

//make class Options ->  Options component here
//Challenge: set up opions prop for Options component
//render the length of the array
class Options extends React.Component{
    
    render(){
        return (
            <div>
                <ol>
                    <button onClick={this.props.handleDeleteOptions}>RemoveAll</button>
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
    render(){
        return (
            <div>
                <form onSubmit={this.props.handleAddOption}>
                    <input type="text" name="text" placeholder="Enter desired options" />
                    <button >Add Option</button>
                </form>
            </div>
        )
    }
};

const componentDiv = $("#component-div")[0];
ReactDOM.render(<IndecisionApp />,componentDiv);
