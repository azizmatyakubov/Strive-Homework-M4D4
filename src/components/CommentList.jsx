import React from "react";
import { ListGroup } from "react-bootstrap";
import CommentListItem from "./CommentListItem";

const CommentList = (props) => {
  return (
    <ListGroup>
      {props.array.map((comment) => (
        <CommentListItem key={comment._id} comment={comment.comment} />
      ))}
    </ListGroup>
  );
};

export default CommentList;
