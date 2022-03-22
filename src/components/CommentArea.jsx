import React, { useState, useEffect } from "react";
import CommentList from "./CommentList";
import { Alert } from "react-bootstrap";

const CommentArea = (props) => {
  // state = {
  //   comments: [],
  //   bookTitle: "",
  // };

  const [comments, setComments] = useState([]);
  const [bookTitle, setbookTitle] = useState("");

  // componentDidMount = () => {
  //   this.displayComment();
  // };

  useEffect(() => {
    displayComment();
  }, []);

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (prevProps.id !== this.props.id) {
  //     this.displayComment();
  //   }
  // };

  useEffect(() => {
    displayComment();
  }, [props.id]);

  const displayComment = async () => {
    try {
      console.log(props.id, "this i scomment");
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + props.id,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YWU0NDRlYTdiMTAwMTVkMDY3YTciLCJpYXQiOjE2NDc1MjkxNzYsImV4cCI6MTY0ODczODc3Nn0.vr-jJbC512PCTm2kVtbBd2gMuC94Nk9u8m_IlRkNdZw",
          },
        }
      );

      let data = await response.json();
      console.log(data);
      // this.setState({ comments: data });
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ position: "fixed", width: "500px" }}>
      <Alert variant="info">Comments of {props.id}</Alert>
      <CommentList array={comments} />
    </div>
  );
};

export default CommentArea;
