import React from 'react';
import './ImageComponent.css';
import {Button, ButtonGroup, Modal} from "react-bootstrap";
import {FormattedMessage} from "react-intl";

export default class ImageComponent extends React.Component {
  state = {isOpen: false};

  handleClose = () => {
    this.setState({ isOpen: false });
  }

  handleShow = () => {
    this.setState({ isOpen: true });
  }

  render() {
    function setWidth(width) {
      return function (p1: React.MouseEvent<HTMLElement>) {
        const elements = document.getElementsByClassName("modal-dialog");
        for (let i = 0; i < elements.length; i++) {
          elements[i].style.maxWidth=(width+"px");
        }
      };
    }

    return (
      <div className={`image-component`}>
        <img
          src={this.props.pic}
          alt={this.props.alt}
          className={`${this.props.class} img-preview`}
          onClick={this.handleShow}
        />
        <Modal show={this.state.isOpen} onHide={this.handleClose} className="picture-preview">
          <Modal.Header closeButton>
            <ButtonGroup aria-label="Width size">
              <Button variant="light" size={"sm"}><FormattedMessage
                id = "content.size"
                defaultMessage="Size"
              />:</Button>
              <Button variant="dark" size={"sm"} onClick={setWidth(500)}><FormattedMessage
                id = "content.size_standard"
                defaultMessage="Standard"
              /></Button>
              <Button variant="dark" size={"sm"} onClick={setWidth(window.innerWidth)}><FormattedMessage
                id = "content.size_window"
                defaultMessage="Window"
              /></Button>
            </ButtonGroup>
          </Modal.Header>
          <Modal.Body>
            <img
              src={this.props.pic}
              alt="{this.props.alt}"
              className="img-fluid"
            />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
