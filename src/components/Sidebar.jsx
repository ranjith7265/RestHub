import React, { useState } from "react";
import NavLinks from "./NavLinks";
import profile from '../user-profile.jpg'
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";

function Sidebar() {
  const [toggle, settoggle] = useState(false);
  const [toggleClass, setToggleClass] = useState("");

  const handleToggle = () => {
    if (!toggle) {
      setToggleClass("close");
      settoggle(true)
    }
    else {
      setToggleClass("")
      settoggle(false)
    }
  }
  return (
    <section className={`sidebar ${toggleClass}`}>
      <h1 className="title">
        REST<span>HUB</span>
      </h1>
      <div className="user">
        <img className="user-picture" src={profile} alt="user-pic"></img>
        <div className="user-name-role">
          <span className="user-name">Ranjith K</span>
          <p className="user-role">Administrator</p>
        </div>
      </div>
      <NavLinks />
      <button onClick={handleToggle} className="toggle">
        <span className="toggle-icon">
          {toggle ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
        </span>
      </button>
    </section>
  );
}

export default Sidebar;
