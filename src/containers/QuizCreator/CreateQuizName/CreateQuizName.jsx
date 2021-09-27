import React from "react";
import Input from "../../../components/UI/Input/Input";
import { useState } from "react";
import Button from "../../../components/UI/Button";
import { Box } from "@material-ui/core";
import classes from "./CreateQuizName.css";

const CreateQuizName = ({ setQuizNameR }) => {
  const [nameOfQuiz, setNameOfQuiz] = useState({
    title: "",
    error: false,
  });
  const enterName = () => {
    if (nameOfQuiz.title.trim() !== "") {
      setQuizNameR(nameOfQuiz.title);
    } else {
      setNameOfQuiz((prev) => ({ ...prev, error: true }));
    }
  };

  return (
    <Box
      className={classes.box}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <h1>CREATE THE QUIZ</h1>
      <Input
        label="Name of quiz"
        type="text"
        variant="filled"
        value={nameOfQuiz.title}
        setValue={setNameOfQuiz}
        error={nameOfQuiz.error}
      />
      <Button onClick={enterName} type="success">
        Enter
      </Button>
    </Box>
  );
};

export default CreateQuizName;
