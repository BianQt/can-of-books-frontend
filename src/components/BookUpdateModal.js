  
import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export class BookUpdateModal extends Component {

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handelDisplayUpdateModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.props.handelUpdateModal}>
            <Form.Group className="mb-3">
              <Form.Label>Book Title</Form.Label>
              <Form.Control type="text" name="title" placeholder="Enter Book Title" defaultValue={this.props.selectedBook.title} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Book Image</Form.Label>
              <Form.Control type="text" name="imgUrl" placeholder="Enter Book Image" defaultValue={this.props.selectedBook.imgUrl} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Book Description</Form.Label>
              <Form.Control type="text" name="desc" placeholder="Enter Book Description" defaultValue={this.props.selectedBook.description} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Book status</Form.Label>
              <Form.Control type="text" name="status" placeholder="Enter Book status" defaultValue={this.props.selectedBook.status} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Update!
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

    )
  }
}

export default BookUpdateModal