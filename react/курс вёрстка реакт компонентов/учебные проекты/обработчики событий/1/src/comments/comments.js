import React from "react";

import { Ul } from "/src/elements";
import { CoomentsLi, CoomentsButton, Name, Text } from "./styled";

function Comments({ comments }) {
  return (
    <>
      <Ul>
        {comments.map((comment) => (
          <CoomentsLi key={comment.id}>
            <Name>{comment.author}</Name>
            <Text>{comment.text}</Text>
          </CoomentsLi>
        ))}
      </Ul>
      <CoomentsButton>Показать ещё</CoomentsButton>
    </>
  );
}

export default Comments;
