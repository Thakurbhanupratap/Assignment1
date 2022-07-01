import React, { useState } from "react";
import "./Profile.Style.css";

import EditPopup from "./EditPopup.jsx";

function Profile({ user }) {
  const [flag1, setFlag1] = useState(false);

  const eventHandler1 = async () => {
    setFlag1(!flag1);
  };

  return (
    <div className="main_container2">
      <div className="profile_container">
        <div className="profile">
          <h2>Profile</h2>
          <div className="username_conatainer">
            <input
              type="text"
              defaultValue={user.username}
              className="profile_name common2"
              readOnly={true}
            />
            <button onClick={eventHandler1}>
              <i className="fa-solid fa-pen i_edit"></i>
            </button>
          </div>
          {flag1 && <EditPopup placeholder="Username" user={user} />}
          <div className="name_container">
            <input
              type="text"
              defaultValue={user.name}
              className="profile_username common2"
              readOnly={true}
            />
          </div>

          <div className="password_container">
            <input
              type="text"
              defaultValue={user.phone}
              className="profile_password common2"
              readOnly={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
