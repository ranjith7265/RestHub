import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext.jsx";
import { FaChevronCircleLeft } from "react-icons/fa";

function UserDetails() {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);
  return (
    <section className="user-details">
      <h3>User Details</h3>
      <div className="details-container">
        <div className="details-title">
          <span>Name</span>
          <span>Email</span>
          <span>Phone</span>
        </div>
        {userData.map((user) => (
          <div className="details-show" key={user.phone}>
            <span>{`${user.firstName} ${user.lastName}`}</span>
            <span>{user.email}</span>
            <span>{user.phone}</span>
          </div>
        ))}
      </div>
      <button className="back-btn" onClick={() => navigate("/admin")}>
        <span className="back-icon">
          <FaChevronCircleLeft />
        </span>
      </button>
    </section>
  );
}

export default UserDetails;
