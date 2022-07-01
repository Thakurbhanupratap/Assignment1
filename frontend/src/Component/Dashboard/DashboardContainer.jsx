import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import Profile from "../Profile/Profile.jsx";
import axios from "axios";
import path from "../../Path/Path.js";

function DashboardContainer() {
  const [isDashboard, setIsDashboard] = useState(true);
  const [isProfile, setIsProfile] = useState(false);

  const location = useLocation();
  const [user, setuser] = useState("");

  useEffect(() => {
    const findUser = async () => {
      let res = await axios.get(`${path}/findUser/${location.state.user._id}`);
      setuser(res.data.data);
    };
    findUser();
  }, [location.state.user]);

  const clickHandler = () => {
    setIsDashboard(true);
    setIsProfile(false);
  };

  const clickHandler2 = () => {
    setIsDashboard(false);
    setIsProfile(true);
  };

  return (
    <div>
      <div className="dashboard">
        <div className="header">
          <button
            onClick={clickHandler}
            className="header-rightbtn header-common"
          >
            Dashboard
          </button>
          <button
            onClick={clickHandler2}
            className="header-profilebtn header-common"
          >
            {user.username}
          </button>
        </div>
      </div>
      {isDashboard && <Dashboard user={user} />}
      {isProfile && <Profile user={user} />}
    </div>
  );
}

export default DashboardContainer;
