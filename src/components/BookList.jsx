import React, { Component, useState } from "react";
import SingleBook from "./SingleBook";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Card,
  Button,
} from "react-bootstrap";

// class BookList extends Component
const BookList = (props) => {
  // state = {
  //   searchQuery: "",
  // };

  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState(false);

  return (
    <Container>
      <Row>
        <Col>
          <Form inline className="d-flex justify-content-center p-3">
            <FormControl
              type="text"
              value={searchQuery}
              placeholder="Search"
              className="mr-sm-2 w-50 p-4 m-3 text-"
              onChange={(e) =>
                // this.setState({
                //   searchQuery: e.target.value,
                // })
                setSearchQuery(e.target.value)
              }
            />
          </Form>
        </Col>
      </Row>

      <Row>
        {props.data
          .filter((b) => b.title.toLowerCase().includes(searchQuery))
          .map((book, i) => (
            <Col>
              {/* <SingleBook
                  img={book.img}
                  title={book.title}
                  price={book.price}
                  asin={book.asin}
                  key={book.asin}
                  showComment={this.props.getBookId}
                /> */}

              <Card
                style={{
                  width: "14rem",
                  border: selected ? "3px solid red" : "none",
                }}
                onClick={() => props.showComment(book.asin)}
              >
                <Card.Img variant="top" src={book.img} />

                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Button variant="primary">{book.price}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default BookList;
