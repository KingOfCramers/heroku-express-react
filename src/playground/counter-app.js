class Counter extends React.Component {
  constructor(props){ // Props from react component are passed as first argument automatically.
    super(props); // Gives us access to this.props w/in our Counter component. Could call super();
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
    this.reset = this.reset.bind(this);

    // Setup our defualt state object.
    this.state = {
      counter: props.counter
    }
  }

  addOne(){
    // Do not manually update state object. Instead, use setState method, which accepts function that returns single object, allows us to update state elements.
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1 // Only provide values we want to change from previous state.
      }
    });
  }

  minusOne(){
    this.setState((prevState) => {
      return {
        counter: prevState.counter - 1
      }
    });
  }

  reset(){
    this.setState(() => {
      // Set to original prop counter value.
      return {
        counter: this.props.counter
      }
    })
  }

  render(){
    return (
      <div>
        <h1>Count: {this.state.counter}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
Counter.defaultProps = {
  counter: 0
}

ReactDOM.render(<Counter counter={15}/>, document.getElementById("app"));

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };
//
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// };
//
// renderCounterApp();