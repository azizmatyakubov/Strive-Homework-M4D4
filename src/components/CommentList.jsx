import React from "react";
import { ListGroup } from "react-bootstrap";
import CommentListItem from "./CommentListItem";

const CommentList = (props) => {
  return (
    <ListGroup>
      {props.array.map((comment) => {
        <CommentListItem comment={comment} />;
      })}
    </ListGroup>
  );
};

export default CommentList;
