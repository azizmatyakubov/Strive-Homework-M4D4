import { Card, Button } from "react-bootstrap";
import MyBadge from "./MyBadge";

// this.setState({ selected: !this.state.selected })
// class SingleBook extends Component
const SingleBook = (props) => {
  return (
    <>
      <Card onClick={(event) => props.showComment(event.target.value)}>
        <MyBadge
          color="black"
          bgColor="yellow"
          text="New"
          padding={8}
          position="absolute"
        />
        <Card.Img variant="top" src={props.img} />

        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Button variant="primary">{props.price}</Button>
        </Card.Body>
      </Card>
    </>
  );
};


export default SingleBook;
