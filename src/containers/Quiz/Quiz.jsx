import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ActiveQuestion from "../../components/ActiveQuiz/ActiveQuiz";
import ResultBlock from "../../components/ResultBlock/ResultBlock";
import classes from "./Quiz.css";
import Loader from "../../components/UI/Loader";
import { connect } from "react-redux";
import {
  setLoadingActiveQuizAC,
  retryQuiz,
  fetchCurrentQuiz,
  toNextQuestionAC,
} from "../../store/actions/quiz/actions";

const Quiz = ({
  // ==== state ==== //
  loading,
  questions,
  activeQuestion,
  endQuiz,
  rightAnswers,
  // ==== dispatch ==== //
  fetchCurrentQuiz,
  toNextQuestionR,
  retryQuizR
}) => {
  const { id } = useParams();
  useEffect(() => {
    fetchCurrentQuiz(id);
  }, []);

  const toNextQuestion = (answerID) => {
    toNextQuestionR(answerID);
  };
  const reTryQuiz = () => {
    retryQuizR();
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.Quiz}>
        {loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            {endQuiz ? (
              <ResultBlock
                results={{
                  true: rightAnswers.length,
                  total: questions.length,
                  tittlesOfQuiz: questions.map((question) => question.title),
                  rightAnswers: rightAnswers,
                }}
                reTryQuiz={reTryQuiz}
              />
            ) : (
              <ActiveQuestion
                question={{
                  data: questions[activeQuestion],
                  number: activeQuestion,
                  total: questions.length,
                }}
                toNextQuestion={toNextQuestion}
              />
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.activeQuiz.loading,
  questions: state.activeQuiz.questions,
  activeQuestion: state.activeQuiz.activeQuestion,
  endQuiz: state.activeQuiz.endQuiz,
  rightAnswers: state.activeQuiz.rightAnswers,
});

const mapDispatchToProps = (dispatch) => ({
  setLoading: (value) => dispatch(setLoadingActiveQuizAC(value)),
  fetchCurrentQuiz: (id) => dispatch(fetchCurrentQuiz(id)),
  toNextQuestionR: (answerID) => dispatch(toNextQuestionAC(answerID)),
  retryQuizR: () => dispatch(retryQuiz()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
