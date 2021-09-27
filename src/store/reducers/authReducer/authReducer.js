import {
  AUTH_LOADING,
  LOGIN,
  SET_EMAIL_ERROR,
  SET_PASSWORD_ERROR,
  SET_NAME_ERROR,
  SET_LAST_NAME_ERROR,
} from "../../actions/quiz/actionsTypes";

const initialState = {
  isAuth: false,
  passwordError: false,
  emailError: false,
  nameError: false,
  lastNameError: false,
  loading: false,
  serverResponse: null,
  user: {
    name: null,
    email: null,
    localId: null,
  },
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuth: true,
      };
    case SET_EMAIL_ERROR:
      return {
        ...state,
        emailError: action.payload,
      };
    case SET_PASSWORD_ERROR:
      return {
        ...state,
        passwordError: action.payload,
      };
    case AUTH_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_NAME_ERROR:
      return {
        ...state,
        nameError: action.payload,
      };
    case SET_LAST_NAME_ERROR:
      return {
        ...state,
        lastNameError: action.payload,
      };
    default:
      return state;
  }
}
