import is from "is_js";
import { validPassword } from "./passwond";

export const userDataValidator = (
  email,
  password,
  repeatedPassword,
  name,
  lastName
) => {
  return (
    is.email(email) &&
    validPassword(password) &&
    password === repeatedPassword &&
    name !== "" &&
    lastName !== ""
  );
};
