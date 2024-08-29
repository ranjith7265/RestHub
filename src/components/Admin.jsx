import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";
import { useNavigate } from "react-router-dom";


function Admin() {
  const { getData } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone
    }
    getData(user);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    navigate("/userdetails");
  } 

  const handleFirstNamechange = (e) => {
    const firstName = e.target.value;
    firstName.length < 5
      ? setMessage("Must be at least 5 characters!!")
      : setMessage("");
    
    setFirstName(e.target.value);
  };

  const handleLastNamechange = (e) => {
    const lastName = e.target.value;
    lastName.length < 1
      ? setMessage("Atleast 1 character must!!")
      : setMessage("");
    
    setLastName(e.target.value);

  };
  const handleEmailchange = (e) => {
    const email = e.target.value;
     
    (email.toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) ? setMessage("") : setMessage("Invalid email address!!"));

    setEmail(e.target.value);
};

  const handlePhonechange = (e) => {
    const phone = e.target.value;

    (phone.length < 10 ? setMessage("10 numbers must!!") : setMessage(""));
    setPhone(e.target.value)
  };
  return (
    <section className="admin">
      <h3 className="admin-title">Admin Pannel</h3>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="admin-form">
          <div>
            <label>
              First Name:
              <input
                onChange={handleFirstNamechange}
                type="text"
                placeholder="eg: John"
                value={firstName}
                required
              ></input>
            </label>
          </div>
          <div>
            <label>
              Last Name:
              <input
                onChange={handleLastNamechange}
                type="text"
                value={lastName}
                placeholder="eg: Smith"
              ></input>
            </label>
          </div>
          <div>
            <label>
              <span className="input-email">Email:</span>
              <input
                onChange={handleEmailchange}
                type="email"
                value={email}
                placeholder="abc@gmiil.com"
                required
              ></input>
            </label>
          </div>
          <div>
            <label>
              <span className="input-phone">Phone:</span>
              <input
                onChange={handlePhonechange}
                type="number"
                value={phone}
                required
              ></input>
            </label>
          </div>
          <div>
            <label>
              <span className="input-pwd">Password:</span>
              <input type="password" required></input>
            </label>
          </div>
          <div>
            <label>
              <span className="input-cpwd"> Confirm:</span>
              <input type="password" required></input>
            </label>
          </div>
          <p className="validation-msg">{message}</p>
          <button className="input-btn">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Admin;
