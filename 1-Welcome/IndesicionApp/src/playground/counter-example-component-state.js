class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleRestart = this.handleRestart.bind(this);
        this.state = {
            count:0
        }
    }
    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count+1
            };
        });
    }
    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count-1
            };
        });
    }
    handleRestart(){
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    render(){
        return(
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick = {this.handleAddOne}>+1</button>
                <button onClick = {this.handleMinusOne}>-1</button>
                <button onClick = {this.handleRestart}>reset</button>
            </div>
        );
    }
}

// Create 3 methods : handleAddOne, handleMinusOne, handleReset
// Use console.log to print the method name
// Wire up onClick & bind in the constructor 

const counterDiv = $("#counter-div")[0];
ReactDOM.render(<Counter />,counterDiv);