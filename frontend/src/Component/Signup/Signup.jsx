import React, { useState } from "react";
import "./signup.Styles.css";
import axios from "axios";
import path from "../../Path/Path";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  let name, value;
  const formOnChangeHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      const { name, email, phone, username, password } = user;
      const res = await axios.post(`${path}/register`, {
        name,
        email,
        phone,
        username,
        password,
      });
      setUser({
        name: "",
        email: "",
        phone: "",
        username: "",
        password: "",
        confirmPassword: "",
      });
      alert(res.data.msg);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="container_signin">
          <div className="container_signin-details">
            <h3>Sign Up to IELTS Proficiency</h3>
            <form
              action=""
              className="container_signin-details--form"
              onSubmit={signUpHandler}
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="form_name common"
                value={user.name}
                onChange={formOnChangeHandler}
              />

              <input
                type="email"
                name="email"
                placeholder="Email address"
                className="form_email common"
                value={user.email}
                onChange={formOnChangeHandler}
              />

              <input
                type="phone"
                name="phone"
                placeholder="Phone No"
                className="form_phone common"
                value={user.phone}
                onChange={formOnChangeHandler}
              />

              <input
                type="text"
                name="username"
                placeholder="User Name"
                className="form_name common"
                value={user.username}
                onChange={formOnChangeHandler}
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form_password common"
                value={user.password}
                onChange={formOnChangeHandler}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="form_password common"
                value={user.confirmPassword}
                onChange={formOnChangeHandler}
              />
              <input type="submit" value="SIGN UP" className="form_submit" />
            </form>
            <div className="container_signup">
              <h4>Already have an account?</h4>
              <Link to="/">Sign In</Link>
            </div>
          </div>
        </div>
        <div className="container_right-flex">
          <div className="container_right">
            <h2 className="container_right-heading">IELTS Proficiency</h2>
            <div className="container_right-heading--image_quoto">
              <img
                src="./images/right.png "
                className="container_right-image"
                alt=""
              />
              <h3 className="container_right-quto">
                Join Us for the best learning materials
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
