import React from "react";
import axios from "axios";
import {
  Card,
  Button,
  Row,
  Container,
  Col,
  Table,
  Alert,
} from "react-bootstrap";

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      errShow: false,
      booksData: [],
    };
  }

  submission = async (e) => {
    try {
      const booksUrl = `${process.env.REACT_APP_LOCAL_SERVER_API}/books`;
      axios.get(booksUrl).then((booksData) => {
          console.log(booksData);
        this.setState({
          booksData: booksData.data,
        });
      });

      this.setState({
        show: true,
        errShow: false,
      });
    } catch (e) {
      console.log("Something went wrong.");
      this.setState({
        show: false,
        errShow: true,
      });
    }
  };

  render() {
    return (
      <div className="books">
        <h2>Books List</h2>
        <button onClick={this.submission}>Show Books</button>
        <Row xs={1} md={6} className="g-4">
          {this.state.booksData.map((element, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src={element.imgUrl} />
                <Card.Body>
                  <Card.Title>{element.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Books;
