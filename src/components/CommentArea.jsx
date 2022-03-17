import React from "react";

class CommentArea extends React.Component {
  state = {
    bookId: "1943006733",
    comments: [],
  };

  componentDidMount = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YWU0NDRlYTdiMTAwMTVkMDY3YTciLCJpYXQiOjE2NDc1MjkxNzYsImV4cCI6MTY0ODczODc3Nn0.vr-jJbC512PCTm2kVtbBd2gMuC94Nk9u8m_IlRkNdZw",
        },
      }
    );

    let data = await response.json();
    await console.log(data);
  };
  render() {
  return (<div>CommentArea</div>)
}};

export default CommentArea;
