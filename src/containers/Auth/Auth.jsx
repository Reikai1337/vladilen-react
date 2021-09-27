import React from "react";
import Button from "../../components/UI/Button";
import classes from "./Auth.css";
import { useState } from "react";
import Input from "../../components/UI/Input/Input";
import { connect } from "react-redux";
import {
  login,
  setEmailErrorAC,
  setPasswordErrorAC,
} from "../../store/actions/quiz/actions";
import Loader from "../../components/UI/Loader";
import { NavLink } from "react-router-dom";

const Auth = ({
  // =====state
  loading,
  emailError,
  passwordError,
  //==== dispatch
  loginR,
  setEmailError,
  setPasswordError,
}) => {
  const [email, setEmail] = useState({
    title: "",
  });
  const [password, setPassword] = useState({
    title: "",
  });
  const login = (email, password, event) => {
    event.preventDefault();
    loginR(email.title, password.title);
  };
  const register = () => {
  };

  return (
    <div className={classes.Auth}>
      <span>You are welcome!</span>
      <form>
        <div className={classes.Wrapper}>
          <Input
            variant="filled"
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
          <Input
            variant="filled"
            fullWidth={true}
            error={passwordError}
            onClick={() => {
              if (passwordError) setPasswordError(false);
            }}
            type="password"
            value={password}
            setValue={setPassword}
          />
        </div>
      </form>
      <div>
        <Button
          onClick={(e) => {
            login(email, password, e);
          }}
          type="success"
        >
          Sign in
        </Button>
        <NavLink to='/register'>
          <Button
            // onClick={(e) => {
            //   register(email, password, e);
            // }}
            type="primary"
          >
            Register
          </Button>
        </NavLink>
      </div>
      {loading ? <Loader /> : null}
    </div>
  );
};
const mapStateToProps = (state) => ({
  emailError: state.auth.emailError,
  passwordError: state.auth.passwordError,
  loading: state.auth.loading,
});
const mapDispatchToProps = (dispatch) => ({
  loginR: (email, password) => dispatch(login(email, password)),
  setEmailError: (value) => dispatch(setEmailErrorAC(value)),
  setPasswordError: (value) => dispatch(setPasswordErrorAC(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
