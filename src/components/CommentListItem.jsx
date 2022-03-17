import React from "react";
import { ListGroupItem } from "react-bootstrap";

const CommentListItem = (props) => {
  return <ListGroupItem>{props.comment}</ListGroupItem>;
};

export default CommentListItem;
