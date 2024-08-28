import React from "react";
import { FaHome } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { CiMoneyCheck1 } from "react-icons/ci";
import { TbReportSearch } from "react-icons/tb";
import { CgInsights } from "react-icons/cg";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <ul className="links">
      <NavLink to="/" className="navlink" >
        <li className="link">
          <FaHome /> <span className="link-item">Home</span>
        </li>
      </NavLink>
      <NavLink to="/admin" className="navlink">
        <li className="link">
          <MdAdminPanelSettings /> <span className="link-item">Admin</span>
        </li>
      </NavLink>
      <NavLink to="/userdetails" className="navlink">
        <li className="link">
          <CiMoneyCheck1 /> <span className="link-item">User Details</span>
        </li>
      </NavLink>
      <li className="link">
        <TbReportSearch /> <span className="link-item">Reports</span>
      </li>
      <li className="link">
        <CgInsights /> <span className="link-item">Insights</span>
      </li>
    </ul>
  );
}

export default NavLinks;
