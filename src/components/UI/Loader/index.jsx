import React from "react";
import classes from "./index.css";

const Loader = () => {
  return ( 
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.topLeft}></div>
        <div className={classes.topRight}></div>
        <div className={classes.bottomLeft}></div>
        <div className={classes.bottomRight}></div>
      </div>
    </div>
  );
}; 

export default Loader;
