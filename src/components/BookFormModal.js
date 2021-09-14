import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export class BookFormModal extends Component {

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.addFormShow}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.props.addBookHandle}>
            <Form.Group className="mb-3">
              <Form.Label>Book Title</Form.Label>
              <Form.Control type="text" name="title" placeholder="Enter Book Title" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Book Image</Form.Label>
              <Form.Control type="text" name="imgUrl" placeholder="Enter Book Image" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Book Description</Form.Label>
              <Form.Control type="text" name="desc" placeholder="Enter Book Description" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Book status</Form.Label>
              <Form.Control type="text" name="status" placeholder="Enter Book status" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add New Book!
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

    )
  }
}

export default BookFormModal;