import React from "react";
import styles from "./SideNav.module.css";
import { navdata } from "constants";
import { NavLink } from "react-router-dom";

const SideNav = () => {

  return (
    <aside className={`${styles.sidenav} txt-label`}>
      {navdata.map(({ title, icon, nextUrl, id }) => {
        return (
          <NavLink to={nextUrl} className={`${styles.navItem}`} key={id}>
            <span className="material-icons md-24">{icon}</span>
            <span className={`${styles.navTitle}`}>{title}</span>
          </NavLink>
        );
      })}
    </aside>
  );
};

export default SideNav;