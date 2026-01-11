import React from "react";

import "./LinkWithIcon.css";

const LinkWithIcon = ({ title, link, icon, sidebar }) => {
  return (
    <a
      href={link}
      className={sidebar ? "align_center sidebar_link" : "align_center"}
    >
      {title} <img src={icon} alt="home image" className="link_emoji" />
    </a>
  );
};

export default LinkWithIcon;
