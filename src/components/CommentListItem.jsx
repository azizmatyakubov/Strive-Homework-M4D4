import React from "react";
import { ListGroupItem } from "react-bootstrap";

const CommentListItem = (props) => {
  return <ListGroupItem variant="dark">{props.comment}</ListGroupItem>;
};

export default CommentListItem;
