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
import BookFormModal from "./BookFormModal";
import BookUpdateModal from "./BookUpdateModal";

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: [],
      logedEmail: "",
      addFormShow: false,
      email: localStorage.getItem("user_email"),
      showUpdateModal: false,
      selectedBook: {},
    };
  }

  addBookHandle = (e) => {
    e.preventDefault();
    const reqBody = {
      title: e.target.title.value,
      imgUrl: e.target.imgUrl.value,
      description: e.target.desc.value,
      status: e.target.status.value,
      email: this.state.email,
    };
    axios
      .post(`${process.env.REACT_APP_LOCAL_SERVER_API}/books`, reqBody)
      .then((newBook) => {
        this.state.booksData.push(newBook.data);
        const newBooks = this.state.booksData;
        this.setState({ booksData: newBooks });
      })
      .catch(() => console.log("Something went wrong!"));
    this.addFormShow();
  };

  addFormShow = () => {
    this.setState({ addFormShow: !this.state.addFormShow });
  };

  handelUpdateModal = (e) => {
    e.preventDefault();

    const reqBody = {
      title: e.target.title.value,
      imgUrl: e.target.imgUrl.value,
      description: e.target.desc.value,
      status: e.target.status.value,
      email: this.state.email,
    };

    axios
      .put(
        `${process.env.REACT_APP_LOCAL_SERVER_API}/books/${this.state.selectedBook._id}`,
        reqBody
      )
      .then((updatedBook) => {
        const updateBookArr = this.state.booksData.map((book) => {
          if (book._id === this.state.selectedBook._id) {
            book = updatedBook.data;

            return book;
          }
          return book;
        });

        this.setState({
          booksData: updateBookArr,
          selectedBook: {},
        });
        this.handelDisplayUpdateModal();
      })
      .catch(() => alert("Something went wrong!"));
  };

  handelDisplayUpdateModal = (bookObj) => {
    this.setState({
      showUpdateModal: !this.state.showUpdateModal,
      selectedBook: bookObj,
    });
  };

  deleteBookHandle = (id) => {
    axios
      .delete(`${process.env.REACT_APP_LOCAL_SERVER_API}/books/${id}`)
      .then((deleteResponse) => {
        if (deleteResponse.data.deletedCount === 1) {
          const newBookArr = this.state.booksData.filter(
            (book) => book._id !== id
          );
          this.setState({ booksData: newBookArr });
        }
      })
      .catch(() => alert("something went wrong"));
  };

  componentDidMount = () => {
    try {
      const booksUrl = `${process.env.REACT_APP_LOCAL_SERVER_API}/books`;
      axios.get(booksUrl).then((booksData) => {
        this.setState({
          booksData: booksData.data,
        });
      });
    } catch (e) {
      console.log("Something went wrong.");
    }
  };

  render() {
    console.log("book", this.props.email);
    return (
      <div className="books">
        <h2>Books List</h2>
        <button onClick={this.addFormShow} className="button">
          +
        </button>
        {this.state.addFormShow && (
          <>
            <BookFormModal
              show={this.state.addFormShow}
              addBookHandle={this.addBookHandle}
              addFormShow={this.addFormShow}
            />
          </>
        )}

        {this.state.showUpdateModal && (
          <>
            <BookUpdateModal
              show={this.state.showUpdateModal}
              handelUpdateModal={this.handelUpdateModal}
              handelDisplayUpdateModal={this.handelDisplayUpdateModal}
              selectedBook={this.state.selectedBook}
            />
          </>
        )}

        {this.state.booksData.length > 0 && (
          <Row xs={1} md={3} className="g-4">
            {this.state.booksData.map((element, idx) => {
              if (element.status === "Available") {
                return (
                  <Col>
                    <Card>
                   
                      <Card.Img variant="top" className="cardImg" src={element.imgUrl} />
                      <Card.Body>
                        <Card.Title >{element.title}</Card.Title>
                        <Card.Text className="cardText">{element.description}</Card.Text>
                        <Card.Text className="cardEmail">{element.email}</Card.Text>
                        <i class="fas fa-pen" onClick={() => this.handelDisplayUpdateModal(element)}></i>
                        <Button
                          variant="danger"
                          onClick={() => this.deleteBookHandle(element._id)}
                        >
                          Delete
                        </Button>
                        
                        {/* <Button
                          variant="warning"
                          onClick={() => this.handelDisplayUpdateModal(element)}
                        >
                          Update
                        </Button> */}
                      </Card.Body>
                    </Card>
                  </Col>
                );
              } else {
                <h1>No Books Found!</h1>;
              }
            })}
          </Row>
        )}
      </div>
    );
  }
}

export default Books;
