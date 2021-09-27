import React, { useState } from "react";
import classes from "./AnswerItem.css";

function giveStyle(color) {
  switch (color) {
    case "default":
      return classes.AnswerItem;
    case "true":
      return classes.trueAnswerItem;
    case "wrong":
      return classes.wrongAnswerItem;
      default: break;
  }
}

const AnswerItem = ({ answer, id, toNextQuestion, trueAnswerID }) => {
  const [itemColor, setItemColor] = useState(giveStyle("default"));
  const [blockClick, setBlockClick] = useState(false);

  const answerClickHandler = (id) => {
    if (!blockClick) {
      setBlockClick(true);
      if (id === trueAnswerID) setItemColor(giveStyle("true"));
      if (id !== trueAnswerID) setItemColor(giveStyle("wrong"));
      setTimeout(() => {
        setItemColor(giveStyle("default"));
        setBlockClick(false);
        toNextQuestion(id);
      }, 2000);
    }
  };
  return (
    <li onClick={() => answerClickHandler(id)} className={itemColor}>
      {answer}
    </li>
  );
};

export default AnswerItem;
