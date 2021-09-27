import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyle = makeStyles(() => ({
  input: {
    "& label.Mui-focused": {
      color: "#4a148c",
    },
    "& label": {
      color: "black",
    },
    "& fieldset:hover": {
      borderColor: "red",
    },
  },
  formControl: {
    boxSizing: 'border-box',
    padding: "0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Input = ({
  variant,
  type,
  value,
  setValue,
  label,
  onClick,
  error,
  fullWidth,
}) => {
  const [showPass, setShowPass] = useState(false);
  const classes = useStyle();
  return type === "password" ? (
    <FormControl fullWidth={fullWidth} className={classes.formControl}>
      <TextField
      // style={{boxSizing:'border-box'}}
      // fullWidth={fullWidth}
        error={error}
        variant={variant}
        onFocus={onClick}
        className={classes.input}
        type={showPass ? "text" : "password"}
        label={label === undefined ? "Password" : label}
        value={value.title}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, title: e.target.value }))
        }
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPass((prev) => !prev)}
                edge="end"
                aria-label="toggle password visibility"
              >
                {showPass ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  ) : (
    <FormControl  fullWidth={fullWidth} className={classes.formControl} size="small">
      <TextField
      fullWidth={fullWidth}
        error={error}
        variant={variant}
        onFocus={onClick}
        className={classes.input}
        type="text"
        label={label}
        value={value.title}
        onChange={(e) =>
          setValue((prev) => ({ ...prev, title: e.target.value }))
        }
      />
    </FormControl>
  );
};

export default Input;
