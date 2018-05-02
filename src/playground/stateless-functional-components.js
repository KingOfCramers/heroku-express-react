// Stateless functional components cannot have state, but we can pass props to them. They are passed as the initial argument to the function.

// They also automatically render the return statement. They're perfect for simply rendering JSX to the screen.

const User = (props) => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

const age = 23;

ReactDOM.render(<User name="Harry" age={age}/>, document.getElementById("app"));