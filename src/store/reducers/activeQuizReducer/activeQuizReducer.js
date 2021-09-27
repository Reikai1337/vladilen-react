import {
  SET_LOADING_ACTIVE_QUIZ,
  SET_ACTIVE_QUIZ_DATA,
  TO_NEXT_QUESTION,
  RETRY_QUIZ,
} from "../../actions/quiz/actionsTypes";

const initialState = {
  name: null,
  questions: [],
  activeQuestion: 0,
  loading: true,
  endQuiz: false,
  rightAnswers: [],
};

export function activeQuizReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING_ACTIVE_QUIZ:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ACTIVE_QUIZ_DATA:
      return {
        ...state,
        name: action.payload.name,
        questions: action.payload.quiz,
      };
    case TO_NEXT_QUESTION: {
      if (state.activeQuestion + 1 < state.questions.length) {
        return {
          ...state,
          activeQuestion: state.activeQuestion + 1,
          rightAnswers:
            action.payload ===
            state.questions[state.activeQuestion].rightAnswerId
              ? [...state.rightAnswers, state.activeQuestion]
              : [...state.rightAnswers],
        };
      } else {
        return {
          ...state,
          activeQuestion: state.activeQuestion + 1,
          rightAnswers:
            action.payload ===
            state.questions[state.activeQuestion].rightAnswerId
              ? [...state.rightAnswers, state.activeQuestion]
              : [...state.rightAnswers],
          endQuiz: true,
        };
      }
    }
    case RETRY_QUIZ:
      return {
        ...state,
        activeQuestion: 0,
        loading: false,
        endQuiz: false,
        rightAnswers: [],
      };
    default:
      return state;
  }
}
