import React from "react";
import { Box } from "@material-ui/core";
import { useState } from "react";
import Input from "../../../components/UI/Input/Input";
import classes from "../QuizCreator.css";
import MySelect from "../../../components/UI/Select/Select";
import Button from "../../../components/UI/Button";

function validInputs(...inputsValues) {
  return inputsValues.reduce((acc, value, index) => {
    if (value === "") return { ...acc, [index + 1]: value };
    return acc;
  }, {});
}

const Form = ({ name, postTheQuiz, addQuestionR,length }) => {
  const [answerName, setAnswerName] = useState({
    title: "",
    error: false,
  });
  const [variantA, setVariantA] = useState({
    title: "",
    error: false,
  });
  const [variantB, setVariantB] = useState({
    title: "",
    error: false,
  });
  const [variantC, setVariantC] = useState({
    title: "",
    error: false,
  });
  const [variantD, setVariantD] = useState({
    title: "",
    error: false,
  });
  const [trueAnswer, setTrueAnswer] = useState({
    title: "",
    error: false,
  });
  const [quiz, setQuiz] = useState([]);

  const toInitialValues = () => {
    const iV = {
      title: "",
      error: false,
    };
    setAnswerName({ ...iV });
    setTrueAnswer({ ...iV });
    setVariantA({ ...iV });
    setVariantB({ ...iV });
    setVariantC({ ...iV });
    setVariantD({ ...iV });
  };

  const submit = (event) => {
    event.preventDefault();
  };
  const createQuiz = () => {
    postTheQuiz(name, quiz);
  };

  const addQuestion = () => {
    const result = Object.keys(
      validInputs(
        answerName.title,
        variantA.title,
        variantB.title,
        variantC.title,
        variantD.title,
        trueAnswer.title
      )
    );
    if (result.length === 0) {
      const answer = {
        title: answerName.title,
        rightAnswerId: trueAnswer.title - 1,
        answers: [
          variantA.title,
          variantB.title,
          variantC.title,
          variantD.title,
        ],
      };
      addQuestionR(answer);
      // setQuiz((prev) => [...prev, answer]);
      toInitialValues();
    } else {
      for (let index of result) {
        switch (index) {
          case "1":
            setAnswerName((prev) => ({ ...prev, error: true }));
            break;
          case "2":
            setVariantA((prev) => ({ ...prev, error: true }));
            break;
          case "3":
            setVariantB((prev) => ({ ...prev, error: true }));
            break;
          case "4":
            setVariantC((prev) => ({ ...prev, error: true }));
            break;
          case "5":
            setVariantD((prev) => ({ ...prev, error: true }));
            break;
          case "6":
            setTrueAnswer((prev) => ({ ...prev, error: true }));
            break;
        }
      }
    }
  };
  return (
    <form onSubmit={(e) => submit(e)}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <h1>{name}</h1>
        <h2>Answer №{length + 1}</h2>
      </Box>
      <Box className={classes.Box}>
        <Input
          error={answerName.error}
          variant="outlined"
          fullWidth={true}
          label="Answer title"
          setValue={setAnswerName}
          value={answerName}
          type="text"
          onClick={() => setAnswerName((prev) => ({ ...prev, error: false }))}
        />
        <Input
          onClick={() => setVariantA((prev) => ({ ...prev, error: false }))}
          error={variantA.error}
          variant="filled"
          fullWidth={true}
          label="Variant A"
          setValue={setVariantA}
          value={variantA}
          type="text"
        />
        <Input
          onClick={() => setVariantB((prev) => ({ ...prev, error: false }))}
          error={variantB.error}
          variant="filled"
          fullWidth={true}
          label="Variant B"
          setValue={setVariantB}
          value={variantB}
          type="text"
        />
        <Input
          onClick={() => setVariantC((prev) => ({ ...prev, error: false }))}
          error={variantC.error}
          variant="filled"
          fullWidth={true}
          label="Variant C"
          setValue={setVariantC}
          value={variantC}
          type="text"
        />
        <Input
          onClick={() => setVariantD((prev) => ({ ...prev, error: false }))}
          error={variantD.error}
          variant="filled"
          fullWidth={true}
          label="Variant D"
          setValue={setVariantD}
          value={variantD}
          type="text"
        />
        <MySelect
          onClick={() => setTrueAnswer((prev) => ({ ...prev, error: false }))}
          value={trueAnswer}
          setValue={setTrueAnswer}
        />
        <Box width="100%" display="flex" justifyContent="flex-start">
          <Button
            disabled={length === 0} 
            onClick={createQuiz}
            type={length === 0 ? "disabled" : "success"}

          >
            Create the quiz
          </Button>
          <Button onClick={addQuestion} type="primary">
            Add question
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default Form;
