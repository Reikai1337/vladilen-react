import { SET_QUIZ_LIST_DATA } from "../../actions/quiz/actionsTypes";

const initialState = {
  quizList: [],
  loading: true,  
};

export function quizListReducer(state = initialState, action) {
  switch (action.type) {
    case SET_QUIZ_LIST_DATA:
      return {
        quizList: [...action.payload],
        loading: false,
      };
    default:
      return state;
  }
}


