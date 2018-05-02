import React from "react";
import AddOption from "./AddOption";
import Action from "./Action";
import Header from "./Header";
import Options from "./Options";
import OptionModal from "./OptionModal";

// FINAL COMPONENT
// The context in which all of our components live. The context for "this" for many components, it's the component we pass to our final render. It includes our final JSX outline.

export default class IndecisionApp extends React.Component {
  // Set initial state
  state = {
    options: [],
    selectedOption: undefined
  };

  // Define our FUNCTION props, which we pass to our components. If we're only returning one object, we can wrap it in parentheses, and it's implicitly returned by the arrow function.
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }) );
  }

  handleDeleteOption = (option) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((item) => {
        return item !== option;
      })
    }))
  }

  handleAddOption = (option) => {
  // Recieves data from AddOption component below.
    if(!option){
      return "Enter a valid option."
    } else if (this.state.options.indexOf(option) > -1) {
      return "This is already an option."
    } else {
      this.setState((prevState) => ({ options: prevState.options.concat(option)}) )
    }
  }
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const choice = this.state.options[randomNum];
    this.setState(() => ({ selectedOption: choice}));
  }
  handleClearModal = () => {
    this.setState(() => ({ selectedOption: undefined}))
  }

  // Add handlers for when component renders/updates to DOM
  componentDidMount = () => {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if(options){
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all.
    }
  }
  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options); // Get current options.
      localStorage.setItem("options", json);
    }
  }
  componentWillUnmount = () => {
    console.log("Component will unmount.")
  }

  // Create our FINAL template, and pass our props to the sub-components.
  render() {
    const subtitle = "Put your life in the hands of a computer.";
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
        <div className="widget">
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
        </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearModal={this.handleClearModal}
        />
      </div>
      );
  }
};