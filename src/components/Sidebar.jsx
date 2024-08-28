import React from "react";
import NavLinks from "./NavLinks";
import profile from '../user-profile.jpg'

function Sidebar() {
  return (
    <section className="sidebar">
      <h1 className="title">
        REST<span>HUB</span>
      </h1>
      <div className="user">
        <img className="user-picture" src={profile} alt="user-pic"></img>
        <div>
          <span className="user-name">Ranjith K</span>
          <p className="user-role">Administrator</p>
        </div>
      </div>
      <NavLinks />
    </section>
  );
}

export default Sidebar;
