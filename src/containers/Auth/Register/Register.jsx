import React from "react";
import classes from "./register.css";
import { Box } from "@material-ui/core";
import Button from "./../../../components/UI/Button";
import Input from "./../../../components/UI/Input/Input";
import Loader from "./../../../components/UI/Loader";
import { useState } from "react";
import { connect } from "react-redux";
import {
  register,
  setNameError,
  setEmailErrorAC,
  setPasswordErrorAC,
  setLastNameError,
} from "../../../store/actions/quiz/actions";
const Register = ({
  // state
  passwordError,
  emailError,
  nameError,
  loading,
  lastNameError,
  // dispatch
  registerR,
  setEmailError,
  setNameError,
  setPasswordError,
  setLastNameError,
}) => {
  const [email, setEmail] = useState({
    title: "",
  });
  const [name, setName] = useState({
    title: "",
  });
  const [lastName, setLastName] = useState({
    title: "",
  });
  const [password, setPassword] = useState({
    title: "",
  });
  const [repeatedPassword, setRepeatedPassword] = useState({
    title: "",
  });
  const register = () => {
    registerR(
      email.title,
      password.title,
      repeatedPassword.title,
      name.title,
      lastName.title
    );
  };

  return (
    <div className={classes.Register}>
      <span>Register</span>
      <form>
        <Box boxSizing="border-box" width="100%">
          <Box display="flex" justifyContent="space-around">
            <Box width="50%">
              <Input
                variant="outlined"
                fullWidth={true}
                onClick={() => {
                  if (nameError) setNameError(false);
                }}
                label="First name"
                type="text"
                value={name}
                setValue={setName}
                error={nameError}
              />
            </Box>
            <Box width="50%">
              <Input
                variant="outlined"
                fullWidth={true}
                onClick={() => {
                  if (lastNameError) setLastNameError(false);
                }}
                label="Last name"
                type="text"
                value={lastName}
                setValue={setLastName}
                error={lastNameError}
              />
            </Box>
          </Box>
          <Input
            variant="outlined"
            fullWidth={true}
            onClick={() => {
              if (emailError) setEmailError(false);
            }}
            label="Email"
            type="text"
            value={email}
            setValue={setEmail}
            error={emailError}
          />
          <Box width="100%" display="flex" justifyContent="space-around">
            <Input
              variant="filled"
              error={passwordError}
              onClick={() => {
                if (passwordError) setPasswordError(false);
              }}
              type="password"
              value={password}
              setValue={setPassword}
            />
            <Input
              label="Confirm password"
              variant="filled"
              error={passwordError}
              onClick={() => {
                if (passwordError) setPasswordError(false);
              }}
              type="password"
              value={repeatedPassword}
              setValue={setRepeatedPassword}
            />
          </Box>
        </Box>
      </form>
      <div>
        <Button
          onClick={(e) => {
            register(email, password, e);
          }}
          type="primary"
        >
          Register
        </Button>
      </div>
      {loading ? <Loader /> : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  emailError: state.auth.emailError,
  passwordError: state.auth.passwordError,
  loading: state.auth.loading,
  nameError: state.auth.nameError,
  lastNameError: state.auth.lastNameError,
});
const mapDispatchToProps = (dispatch) => ({
  registerR: (email, password, repeatedPassword, name, lastName) =>
    dispatch(register(email, password, repeatedPassword, name, lastName)),
  setEmailError: (value) => dispatch(setEmailErrorAC(value)),
  setPasswordError: (value) => dispatch(setPasswordErrorAC(value)),
  setNameError: (value) => dispatch(setNameError(value)),
  setLastNameError: (value) => dispatch(setLastNameError(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
