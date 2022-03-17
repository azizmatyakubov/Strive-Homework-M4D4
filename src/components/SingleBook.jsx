import { Card, Button } from "react-bootstrap";
import MyBadge from "./MyBadge";
import {Component} from 'react'
import CommentArea from "./CommentArea";
//import CommentList from "./CommentList";

class SingleBook extends Component {

  state = {
    selected: false,
  }

  
 


  render() {
  return (
    <>
      <Card style={{ width: "14rem" }}>
        <MyBadge
          color="black"
          bgColor="yellow"
          text="New"
          padding={8}
          position="absolute"
        />
        <Card.Img variant="top" src={this.props.img} />

        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Button variant="primary">{this.props.price}</Button>
        </Card.Body>
        </Card>

        <CommentArea asin={this.props.book.asin} />
    </>
  )};
};

export default SingleBook;
