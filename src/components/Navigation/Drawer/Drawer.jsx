import React from "react";
import BackDrop from "../../UI/BackDrop/BackDrop";
import classes from "./Drawer.css";
import { NavLink } from "react-router-dom";
const links = [
  {
    title: "Home",
    path: "/",
    exact: true,
  },
  {
    title: "Create the quiz",
    path: "/Create-the-quiz",
    exact: true,
  },
  {
    title: "Quiz list",
    path: "/Quiz-list",
    exact: true,
  },
  {
    title: "Auth",
    path: "/Auth",
    exact: true,
  },
];
const Drawer = ({ open, setOpen }) => {
  const renderLinks = () =>
    links.map((link, index) => (
      <li key={index}>
        <NavLink
          exact={link.exact}
          activeClassName={classes.active}
          to={link.path.toLocaleLowerCase()}
          key={index}
          onClick={()=>setOpen(prev=>!prev)}
        >
          {link.title}
        </NavLink>
      </li>
    ));
  const cls = [classes.Drawer];
  if (!open) cls.push(classes.close);

  return (
    <React.Fragment>
      <nav className={cls.join(" ")}>
        <ul>{renderLinks()}</ul>
      </nav>
      {open ? <BackDrop onClick={setOpen} /> : null}
    </React.Fragment>
  );
};

export default Drawer;
