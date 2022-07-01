import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signin.Styles.css";
import path from "../../Path/Path";

function Signin() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  let name, value;
  const inputOnChangeHandler = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  console.log(user.username, user.password);

  const signInHandler = async (e) => {
    e.preventDefault();
    try {
      const { username, password } = user;
      const res = await axios.post(`${path}/login`, { username, password });
      console.log(res);
      setUser(res.data.data);
      console.log({ user });
      navigate("/dashboard", { state: { user: res.data.data } });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className="container">
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
                Discover new skills, meet passionate teachers and become a part
                of the most helpful community of creatives in the world.{" "}
              </h3>
            </div>
          </div>
        </div>
        <div className="container_signin">
          <div className="container_signin-details">
            <h3>Sign in to IELTS Proficiency</h3>
            <form
              action=""
              className="container_signin-details--form"
              onSubmit={signInHandler}
            >
              <input
                type="text"
                placeholder="Username"
                name="username"
                className="form_email common"
                value={user.username}
                onChange={inputOnChangeHandler}
              />

              <input
                type="password"
                placeholder="Password"
                name="password"
                className="form_password common"
                value={user.password}
                onChange={inputOnChangeHandler}
              />
              <input type="submit" value="SIGN IN" className="form_submit" />
            </form>
            <div className="container_signup">
              <h4>Don't have an account?</h4>
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
