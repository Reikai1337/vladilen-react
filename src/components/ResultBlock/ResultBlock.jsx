import React from "react";
import Button from "../UI/Button";
import CurrentAnswers from "./CurrentAnswers/CurrentAnswers";
import classes from "./ResultBlock.css";
import { Link } from "react-router-dom";

function makeColor(result) {
  if (result <= 25) return "red";
  if (result <= 50) return "orange";
  if (result <= 75) return "yellow";
  if (result <= 100) return "green";
}

const ResultBlock = ({ results, reTryQuiz }) => {
  let result = Math.floor((results.true / results.total) * 100);
  return (
    <div className={classes.wrapper}>
      <span>{result}%</span>
      <div className={classes.ResultBlock}>
        <div
          className={classes.PercentLine}
          style={{
            width: result + "%",
            backgroundColor: makeColor(result),
            borderBottomRightRadius: "0.5rem",
            borderTopRightRadius: '0.5rem'
          }}
        ></div>
      </div>
      <CurrentAnswers
        tittlesOfQuiz={results.tittlesOfQuiz}
        currentAnswers={results.rightAnswers}
      />
      <div style={{ display: "flex" }}>
        <Button
          disabled={false}
          type={result >= 25 ? "success" : "error"}
          onClick={reTryQuiz}
        >
          Retry
        </Button>
        <Link to="/quiz-list">
          <Button disabled={false} type="primary">
            Go to quiz list
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ResultBlock;
