import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import classes from "./MenuToggle.css";
import CloseIcon from "@material-ui/icons/Close";

const MenuToggle = ({ open, setOpen }) => {
  const cls = [classes.Menu];
  if (open) cls.push(classes.open);
  return (
    <IconButton
      className={cls.join(" ")}
      onClick={() => setOpen((prev) => !prev)}
    >
      {open ? <CloseIcon htmlColor="orange" /> : <MenuIcon color="secondary" />}
    </IconButton>
  );
};

export default MenuToggle;
