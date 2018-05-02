import React from "react";
export default class AddOption extends React.Component {
  // Set the initial state to handle errors.
  state = { error: undefined }

  // Some of the handling occurs w/in, then the option is passed to our function prop.
  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option); // Any returned value is an error. This is the parent function, which lives outside the component.
    this.setState(() => ({ error }))
    // Shorthand lets us drop the error: error syntax. It's implied.
    if(!error){
      e.target.elements.option.value = "";
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}