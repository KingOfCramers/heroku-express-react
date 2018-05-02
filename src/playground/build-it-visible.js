console.log("Build it is running!");

class Visibility extends React.Component {
  constructor(props){
    super(props);

    // Bind functions to context.
    this.toggle = this.toggle.bind(this);

    // Set initial state.
    this.state = {
      visibility: true
    };
  }
  toggle() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggle}>
          {this.state.visibility ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visibility && <p>These are the details</p>}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById("app"));

// let visibility = false;
//
// const toggle = () => {
//     visibility = !visibility;
//     render();
// }
//
// const render = () => {
//     const template = (
//       <div>
//         <h1>Hello World!</h1>
//         <button onClick={toggle}>{visibility ? "Hide details" : "Show details"}</button>
//         {visibility && <p>"These are the details"</p>}
//       </div>
//     );
//   ReactDOM.render(template,appRoot);
// };
//
// const appRoot = document.getElementById("app");
// render();