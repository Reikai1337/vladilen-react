import { combineReducers } from "redux";
import { quizListReducer } from "./quizLIstReducer/quizListReducer";
import { quizCreatorReducer } from "./quizCreatorReducer/quizCreatorReducer";
import { activeQuizReducer } from "./activeQuizReducer/activeQuizReducer";
import { authReducer } from "./authReducer/authReducer";

export const rootReducer = combineReducers({
  quizList: quizListReducer,
  quizCreator: quizCreatorReducer,
  activeQuiz: activeQuizReducer,
  auth: authReducer,
});
