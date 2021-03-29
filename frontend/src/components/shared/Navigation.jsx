import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import classes from "./navigation.module.scss";
import { translations } from "./translations";

const Navigation = ({ users }) => {
  const { lang } = useSelector((state) => state);

  const { english, turkish, spanish } = translations;

  return (
    <nav className={users ? classes.users_nav : classes.nav}>
      <NavLink activeClassName={classes.active} to="/" exact>
        {lang === "en"
          ? english.menu.home
          : lang === "tr"
          ? turkish.menu.home
          : spanish.menu.home}
      </NavLink>
      <NavLink activeClassName={classes.active} to="/users">
        {lang === "en"
          ? english.menu.users
          : lang === "tr"
          ? turkish.menu.users
          : spanish.menu.users}
      </NavLink>
    </nav>
  );
};

export default Navigation;
