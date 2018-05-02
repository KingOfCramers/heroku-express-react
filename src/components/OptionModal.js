import React from "react";
import Modal from "react-modal";
// Modal.setAppElement(el)

export default class OptionModal extends React.Component {
  componentWillMount() {
    Modal.setAppElement("body");
  }

  render() {
    return (
      <Modal
        isOpen={!!this.props.selectedOption}
        ontentLabel={"Selected Option"}
        onRequestClose={this.props.handleClearModal}
        closeTimeoutMS={0}
        className="modal"
      >
        <h3 className="modal__title"> Selected Option: </h3>
          {this.props.selectedOption && <p className="modal__body">{this.props.selectedOption}</p>}

        <button className="button" onClick={this.props.handleClearModal}>Close</button>
      </Modal>
    );
  }
}