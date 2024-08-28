import React from "react";
import { useContext } from "react";
import UserContext from "../Context/UserContext.jsx"

function UserDetails() {
  const { userData } = useContext(UserContext);
  return (
    <section className="user-details">
      <h3>User Details</h3>
      <div className="details-container">
        <div className="details">
          <div>Name: <span>{userData.firstName}</span> <span>{userData.lastName }</span></div>
          <div>Email: {userData.email }</div>
          <div>Phone: { userData.phone}</div>
        </div>
      </div>
    </section>
  );
}

export default UserDetails;
