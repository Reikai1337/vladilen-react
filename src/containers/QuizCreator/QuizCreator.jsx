import React from "react";
import classes from "./QuizCreator.css";
import Form from "./Form/Form";
import CreateQuizName from "./CreateQuizName/CreateQuizName";
import Loader from "../../components/UI/Loader";
import { connect } from "react-redux";
import {
  postQuizToServer,
  setQuizNameAC,
  addQuestion,
} from "../../store/actions/quiz/actions";

const QuizCreator = ({
  addQuestion,
  postQuizToServer,
  loading,
  isIndicate,
  setQuizNameR,
  quizName,
  length
}) => {
  const postTheQuiz = () => {
    postQuizToServer();
  };

  return (
    <div className={classes.QuizCreator}>
      {isIndicate ? (
        <Form addQuestionR={addQuestion} length={length} postTheQuiz={postTheQuiz} name={quizName} />
      ) : (
        <CreateQuizName setQuizNameR={setQuizNameR} />
      )}
      {loading ? <Loader /> : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.quizCreator.loading,
  isIndicate: state.quizCreator.isIndicate,
  quizName: state.quizCreator.name,
  length: state.quizCreator.questions.length
});

const mapDispatchToProps = (dispatch) => ({
  postQuizToServer: () => {
    dispatch(postQuizToServer());
  },
  setQuizNameR: (name) => {
    dispatch(setQuizNameAC(name));
  },
  addQuestion: (question) => {
    dispatch(addQuestion(question));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(QuizCreator);
