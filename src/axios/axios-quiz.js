import axios from "axios";

export const API = {
  base: axios.create({
    baseURL: `${process.env.REACT_APP_FIREBASE_BASE_URL}`,
  }),
  auth: {
    singIN: axios.create({
      baseURL: `${process.env.REACT_APP_FIREBASE_SING_IN}key=${process.env.REACT_APP_FIREBASE_WEB_API_KEY}`,
    }),
    singUp: axios.create({
      baseURL: `${process.env.REACT_APP_FIREBASE_SING_UP}key=${process.env.REACT_APP_FIREBASE_WEB_API_KEY}`,
    }),
  },
};
