import React from 'react';
import classes from './BackDrop.css'
const BackDrop = ({onClick}) => {
  return (
    <div className={classes.BackDrop} onClick={()=>onClick(prev=>!prev)}>
      
    </div>
  );
};

export default BackDrop;