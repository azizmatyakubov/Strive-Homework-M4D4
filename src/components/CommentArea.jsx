import React from "react";
import CommentList from "./CommentList";
import { Alert } from "react-bootstrap";

class CommentArea extends React.Component {
  state = {
    comments: [],
  };

  componentDidMount = async () => {
    try {
      console.log(this.props.id, "this i scomment");
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + this.props.id,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YWU0NDRlYTdiMTAwMTVkMDY3YTciLCJpYXQiOjE2NDc1MjkxNzYsImV4cCI6MTY0ODczODc3Nn0.vr-jJbC512PCTm2kVtbBd2gMuC94Nk9u8m_IlRkNdZw",
          },
        }
      );

      let data = await response.json();
      console.log(data);
      this.setState({ comments: data });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <>
        <Alert variant="info">Comments section</Alert>
        <CommentList array={this.state.comments} />
      </>
    );
  }
}

export default CommentArea;
