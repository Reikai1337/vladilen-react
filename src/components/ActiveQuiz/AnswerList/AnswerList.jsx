import React from "react";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswerList = ({ answers, trueAnswerID, toNextQuestion }) => {
  return (
    <ul>
      {answers.map((answer, id) => {
        return (
          <AnswerItem
            trueAnswerID={trueAnswerID}
            toNextQuestion={toNextQuestion}
            key={id}
            answer={answer}
            id={id}
          />
        );
      })}
    </ul>
  );
};

export default AnswerList;
