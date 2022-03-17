import React from "react";
import CommentList from "./CommentList";

class CommentArea extends React.Component {
  state = {
    bookId: "1943006733",
    comments: [],
  };

  componentDidMount = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + this.state.bookId,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YWU0NDRlYTdiMTAwMTVkMDY3YTciLCJpYXQiOjE2NDc1MjkxNzYsImV4cCI6MTY0ODczODc3Nn0.vr-jJbC512PCTm2kVtbBd2gMuC94Nk9u8m_IlRkNdZw",
        },
      }
    );

    if (response.ok) {
      let data = await response.json();
      this.setState({ comments: data });
      console.log(data);
    }
  };
  render() {
    return <CommentList array={this.state.comments} />;
  }
};

export default CommentArea;
