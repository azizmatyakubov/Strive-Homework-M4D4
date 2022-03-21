import { Card, Button } from "react-bootstrap";
import MyBadge from "./MyBadge";
import {Component} from 'react'
import CommentArea from "./CommentArea";

// this.setState({ selected: !this.state.selected })

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Card
          style={{
            width: "14rem",
            border: this.state.selected ? "3px solid red" : "none",
          }}
          onClick={(event) => this.props.showComment(event.target.value)}
        >
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
      </>
    );
  }
};

export default SingleBook;
