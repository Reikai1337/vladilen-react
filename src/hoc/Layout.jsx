import React from "react";
import style from "../hoc/Layout.css";
import MenuToggle from "../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../components/Navigation/Drawer/Drawer";
import { useState } from "react";
const Layout = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <MenuToggle setOpen={setOpen} open={open} />
      <Drawer open={open} setOpen={setOpen}/>
      <menu style={{ margin: 0, padding: 0 }}>
        <div className={style.Layout}>{props.children}</div>
      </menu>
    </div>
  );
};

export default Layout;
