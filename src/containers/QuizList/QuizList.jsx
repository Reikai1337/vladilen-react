import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./QuizList.css";
import { useEffect } from "react";
import Loader from "../../components/UI/Loader";
import { connect } from "react-redux";
import { fetchQuizList } from "../../store/actions/quiz/actions";

function giveQuizLinks(quizList) {
  return quizList.map((quiz, index) => {
    return (
      <li key={index}>
        <NavLink key={index} to={`/quiz/${quiz.ID}`}>
          {quiz.name}
        </NavLink>
      </li>
    );
  });
}

function QuizList({ quizList, fetchQuizList, loading }) {
  useEffect(() => {
    fetchQuizList();
  }, []);

  return (
    <div className={classes.QuizList}>
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          {quizList.length === 0 ? (
            <h1>No tests yet</h1>
          ) : (
            <ul>{giveQuizLinks(quizList)}</ul>
          )}
        </React.Fragment>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.quizList.loading,
  quizList: state.quizList.quizList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuizList: () => dispatch(fetchQuizList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);
