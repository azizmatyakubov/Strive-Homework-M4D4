import React, { Component, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import BookList from "./BookList";
import CommentArea from "./CommentArea";
import data from "../data/sciFi.json";

const Main = (props) => {
  const [bookAsin, setBookAsin] = useState("0199540241");

  const changeBookId = (data) => {
    setBookAsin(data);
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <BookList data={data} showComment={changeBookId} />
        </Col>
        <Col md={6}>
          <CommentArea id={bookAsin} />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
