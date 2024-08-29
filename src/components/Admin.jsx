import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Admin() {
  const { getData } = useContext(UserContext);
  const [validationMsg, setValidationMsg] = useState({
    firstNameMsg: "",
    lastNameMsg: "",
    emailMsg: "",
    phoneMsg: "",
    passwordMsg: "",
    confirmMsg: "",
  });
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
      phone: phone,
    };

    if (firstName === "" && lastName === "" && email === "" && phone === "") {
      setValidationMsg({
        firstNameMsg: " First name empty!!",
        lastNameMsg: "Last name empty!!",
        emailMsg: " Email empty!!",
        phoneMsg: "Phone empty!!",
      });
    }

    if (firstName.length < 5) {
      return;
    } else if (lastName.trim() === "") {
      return;
    } else if (email.trim() === "") {
      return;
    } else if (phone.length < 10) {
      return;
    } else {
      getData(user);
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    toast.success("Form submitted successfully", {
      duration: 1000,
      style: {
        padding: "15px",
        fontSize: "14px",
      },
    });
    navigate("/userdetails");
  };

  const handleFirstNamechange = (e) => {
    const firstName = e.target.value;
    firstName.length < 5
      ? setValidationMsg({ firstNameMsg: "Must be at least 5 characters!!" })
      : setValidationMsg({ firstNameMsg: "" });

    setFirstName(e.target.value);
  };

  const handleLastNamechange = (e) => {
    const lastName = e.target.value;
    lastName.length < 1
      ? setValidationMsg({ lastNameMsg: "Atleast 1 character must!!" })
      : setValidationMsg({ lastNameMsg: "" });

    setLastName(e.target.value);
  };
  const handleEmailchange = (e) => {
    const email = e.target.value;

    email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
      ? setValidationMsg({ emailMsg: "" })
      : setValidationMsg({ emailMsg: "Invalid email address!!" });

    setEmail(e.target.value);
  };

  const handlePhonechange = (e) => {
    const phone = e.target.value;

    phone.length < 10
      ? setValidationMsg({ phoneMsg: "Atleast 10 numbers must!!" })
      : setValidationMsg({ phoneMsg: "" });

    setPhone(e.target.value);
  };
  const handlePasswordchange = (e) => {
    const password = e.target.value;
    // let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (password.length < 8) {
      setValidationMsg({
        passwordMsg: "Your password must be at least 8 characters",
      });
    } else if (password.search(/[a-z]/i) < 0) {
      setValidationMsg({
        passwordMsg: "Your password must contain at least one letter",
      });
    } else if (password.search(/[0-9]/) < 0) {
      setValidationMsg({
        passwordMsg: "Your password must contain at least one digit.",
      });
    } else if (password.search(/[!@#$%^&*]/) < 0) {
      setValidationMsg({
        passwordMsg: "Your password must contain at least one special latter.",
      });
    } else {
      setValidationMsg({
        passwordMsg: "",
      });
    }
    // password.match(passwordRegex)
    //   ? setValidationMsg({ passwordMsg: "" })
    //   : setValidationMsg({ passwordMsg: "invalid password" });
  };
  const handleConfirmchange = (e) => {
    const confirm = e.target.value;
    // let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (confirm.length < 8) {
      setValidationMsg({
        confirmMsg: "Your confirm password must be at least 8 characters",
      });
    } else if (confirm.search(/[a-z]/i) < 0) {
      setValidationMsg({
        confirmMsg: "Your confirm password must contain at least one letter",
      });
    } else if (confirm.search(/[0-9]/) < 0) {
      setValidationMsg({
        confirmMsg: "Your confirm password must contain at least one digit.",
      });
    } else if (confirm.search(/[!@#$%^&*]/) < 0) {
      setValidationMsg({
        confirmMsg:
          "Your confirm password must contain at least one special latter.",
      });
    } else {
      setValidationMsg({
        confirm: "",
      });
    }

    // (confirm.match(passwordRegex)
    //   ? setValidationMsg({ confirmMsg: "" })
    //   : setValidationMsg({ confirmMsg: "invalid password" }));
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
              ></input>
            </label>
            <p className="validation-msg">{validationMsg.firstNameMsg}</p>
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
            <p className="validation-msg">{validationMsg.lastNameMsg}</p>
          </div>
          <div>
            <label>
              <span className="input-email">Email:</span>
              <input
                onChange={handleEmailchange}
                type="email"
                value={email}
                placeholder="abc@gmiil.com"
              ></input>
            </label>
            <p className="validation-msg">{validationMsg.emailMsg}</p>
          </div>
          <div>
            <label>
              <span className="input-phone">Phone:</span>
              <input
                onChange={handlePhonechange}
                type="number"
                value={phone}
              ></input>
            </label>
            <p className="validation-msg">{validationMsg.phoneMsg}</p>
          </div>
          <div>
            <label>
              <span className="input-pwd">Password:</span>
              <input type="password" onChange={handlePasswordchange}></input>
            </label>
            <p className="validation-msg">{validationMsg.passwordMsg}</p>
          </div>
          <div>
            <label>
              <span className="input-cpwd"> Confirm:</span>
              <input type="password" onChange={handleConfirmchange}></input>
            </label>
            <p className="validation-msg">{validationMsg.confirmMsg}</p>
          </div>
          <button className="input-btn">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Admin;
