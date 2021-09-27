import React from "react";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";
import classes from "./CurrentAnswers.css";
const CurrentAnswers = ({ currentAnswers, tittlesOfQuiz }) => {
  return (
    <div className={classes.CurrentAnswers}>
      {tittlesOfQuiz.map((title, index) => {
        return (
          <span key={index}>
            {`${index + 1}) ${title}`}
            {currentAnswers.includes(index) ? (
              <DoneIcon htmlColor="green" />
            ) : (
              <CloseIcon htmlColor="red" />
            )}
          </span>
        );
      })}
    </div>
  );
};

export default CurrentAnswers;
