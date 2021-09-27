import { API } from "../../../axios/axios-quiz";
import {
  SET_QUIZ_LIST_DATA,
  SET_LOADING,
  SET_QUIZ_NAME,
  TO_NULL_QUIZ,
  ADD_QUESTION,
  SET_LOADING_ACTIVE_QUIZ,
  SET_ACTIVE_QUIZ_DATA,
  TO_NEXT_QUESTION,
  RETRY_QUIZ,
  LOGIN,
  SET_PASSWORD_ERROR,
  SET_EMAIL_ERROR,
  AUTH_LOADING,
  SET_NAME_ERROR,
  SET_LAST_NAME_ERROR,
} from "./actionsTypes";
import { validPassword } from "../../../common/validate/passwond";
import { userDataValidator } from "../../../common/validate/userData";
import is from "is_js";

// ====================================================================================
// ================================QUIZ LIST===========================================
// ====================================================================================
export const setQuizLIstAC = (payload) => ({
  type: SET_QUIZ_LIST_DATA,
  payload,
});

export const fetchQuizList = () => {
  return async (dispatch) => {
    try {
      let { data } = await API.get("/quizList.json");
      const response = Object.keys(data).map((quizID) => {
        return {
          ID: quizID,
          name: data[quizID].name,
        };
      });
      dispatch(setQuizLIstAC(response));
    } catch (e) {
      console.log(e);
    }
  };
};

// ====================================================================================
// ================================ CREATE THE QUIZ ===================================
// ====================================================================================
export const setQuizNameAC = (payload) => ({ type: SET_QUIZ_NAME, payload });
export const loadingAC = (payload) => ({ type: SET_LOADING, payload });
export const toNullQuiz = () => ({ type: TO_NULL_QUIZ });
export const addQuestion = (payload) => ({ type: ADD_QUESTION, payload });

export const postQuizToServer = () => {
  return async (dispatch, getState) => {
    const { quizCreator } = getState();
    // console.log(quizCreator);
    try {
      dispatch(loadingAC(true));
      const quizToPost = {
        name: quizCreator.name,
        quiz: [...quizCreator.questions],
      };
      const { data } = await API.post("/quizList.json", quizToPost);
      dispatch(loadingAC(false));
      dispatch(toNullQuiz());
    } catch (e) {
      console.log(e);
    }
  };
};
// ====================================================================================
// ================================ ACTIVE QUIZ =======================================
// ====================================================================================

export const setLoadingActiveQuizAC = (payload) => ({
  type: SET_LOADING_ACTIVE_QUIZ,
  payload,
});
export const setQuizData = (payload) => ({
  type: SET_ACTIVE_QUIZ_DATA,
  payload,
});
export const toNextQuestionAC = (payload) => ({
  type: TO_NEXT_QUESTION,
  payload,
});
export const retryQuiz = () => ({
  type: RETRY_QUIZ,
});

export const fetchCurrentQuiz = (quizID) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoadingActiveQuizAC(true));
      const { data } = await API.get(`/quizList/${quizID}.json`);
      dispatch(setQuizData(data));
      dispatch(setLoadingActiveQuizAC(false));
    } catch (e) {
      console.log(e);
    }
  };
};
// ====================================================================================
// ======================================= AUTH =======================================
// ====================================================================================

export const loginAC = (payload) => ({ type: LOGIN, payload });

export const setPasswordErrorAC = (payload) => ({
  type: SET_PASSWORD_ERROR,
  payload,
});

export const setEmailErrorAC = (payload) => ({
  type: SET_EMAIL_ERROR,
  payload,
});

export const setNameError = (payload) => ({
  type: SET_NAME_ERROR,
  payload,
});

export const setLastNameError = (payload) => ({
  type: SET_LAST_NAME_ERROR,
  payload,
});
export const setAuthLoadingAC = (payload) => ({
  type: AUTH_LOADING,
  payload,
});

export const login = (email, password) => async (dispatch, getState) => {
  if (is.email(email) && validPassword(password)) {
    console.log("auth");
    const inputData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    try {
      dispatch(setAuthLoadingAC(true));
      const { data } = await API.auth.singIN.post("", inputData);
      console.log(data);
      dispatch(setAuthLoadingAC(false));
    } catch (e) {
      console.log(e);
      dispatch(setAuthLoadingAC(false));
    }
  } else {
    dispatch(setEmailErrorAC(true));
    dispatch(setPasswordErrorAC(true));
  }
};
export const register =
  (email, password, repeatedPassword, name, lastName) => async (dispatch) => {
    if (userDataValidator(email, password, repeatedPassword, name, lastName)) {
      const data = {
        email: email,
        password: password,
        returnSecureToken: true,
      };
      try {
        dispatch(setAuthLoadingAC(true));
        const response = await API.auth.singUp.post("", data);
        console.log(response);
        dispatch(setAuthLoadingAC(false));
      } catch (e) {
        dispatch(setAuthLoadingAC(false));
        console.log(e);
      }
    } else {
      if (password !== repeatedPassword || !validPassword(password)) {
        dispatch(setPasswordErrorAC(true));
      }
      if (!is.email(email)) dispatch(setEmailErrorAC(true));
      if (name === "") dispatch(setNameError(true));
      if (lastName === "") dispatch(setLastNameError(true));
    }
  };
