import React from "react";

const Option = (props) => (
    <div className="option">
      <p className="option__text">{props.count}. {props.optionText}</p>
      <button className="button button--link" onClick={ (e) => {
          // Don't call directly, because we need to pass it the optionText as an argument.
          props.handleDeleteOption(props.optionText)
        }}
      >
        Delete
      </button>
    </div>
  );

export default Option;