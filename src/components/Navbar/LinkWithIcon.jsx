import React from "react";
import { NavLink } from "react-router-dom";

import "./LinkWithIcon.css";

const LinkWithIcon = ({ title, link, icon, sidebar }) => {
  return (
    <NavLink
      to={link}
      className={sidebar ? "align_center sidebar_link" : "align_center"}
    >
      {title} <img src={icon} alt="home image" className="link_emoji" />
    </NavLink>
  );
};

export default LinkWithIcon;
