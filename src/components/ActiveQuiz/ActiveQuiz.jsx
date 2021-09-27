import React from "react";
import classes from "./ActiveQuiz.css";
import AnswerList from "./AnswerList/AnswerList";

const ActiveQuestion = ({ question, toNextQuestion }) => {
  return (
    <div className={classes.ActiveQuiz}>
      <p className={classes.Question}>
        <span>{question.data.title}</span>
        <span className={classes.number}>
          {question.number + 1}/{question.total}
        </span>
      </p>
      <AnswerList
        trueAnswerID={question.data.rightAnswerId}
        toNextQuestion={toNextQuestion}
        answers={question.data.answers}
      />
    </div>
  );
};

export default ActiveQuestion;
