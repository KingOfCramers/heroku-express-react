console.log("App.js is running!");

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer.",
    options: []
};

const addOption = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const clearOptions = () => {
  app.options = [];
  render();
};
const chooseOption = () => {
  const random = Math.floor(Math.random() * app.options.length);
  const selected = app.options[random];
  alert(selected);
  render();
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options:" : "No options"}</p>
            <p>{app.options.length}</p>
        <button disabled={app.options.length == 0}onClick={chooseOption}>What should I do?</button>
        <button disabled={app.options.length == 0}onClick={clearOptions}>Remove All</button>
        <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
        </ol>
        <form onSubmit={addOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
        </div>
    );
  ReactDOM.render(template,appRoot);
};

const appRoot = document.getElementById("app");
render();