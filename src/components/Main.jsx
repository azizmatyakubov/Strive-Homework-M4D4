import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import BookList from "./BookList";
import CommentArea from "./CommentArea";
import data from "../data/sciFi.json";

export default class Main extends Component {
  state = {
    bookAsin: null,
  };

  changeBookId = (data) => {
    this.setState({ bookAsin: data });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={6}>
            <BookList data={data} showComment={this.changeBookId} />
          </Col>
          <Col md={6}>
            <CommentArea id={this.state.bookAsin} />
          </Col>
        </Row>
      </Container>
    );
  }
}
