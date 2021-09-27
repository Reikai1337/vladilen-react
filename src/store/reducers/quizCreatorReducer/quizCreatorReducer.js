import {
  SET_LOADING,
  SET_QUIZ_NAME,
  TO_NULL_QUIZ,
  ADD_QUESTION,
} from "../../actions/quiz/actionsTypes";

const initialState = {
  questions: [],
  name: null,
  isIndicate: false,
  loading: false,
};

export function quizCreatorReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_QUIZ_NAME:
      return {
        ...state,
        name: action.payload,
        isIndicate: true,
      };
    case TO_NULL_QUIZ:
      return {
        name: null,
        isIndicate: false,
        loading: false,
        questions: [],
      };
    case ADD_QUESTION:
      return {
        ...state,
        questions: [...state.questions, action.payload],
      };
    default:
      return state;
  }
}
