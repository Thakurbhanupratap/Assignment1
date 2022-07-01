import React, { useState } from "react";
import axios from "axios";
import path from "../../Path/Path";

function EditPopup({ placeholder, user }) {
  const [formValue, setFormValue] = useState("");

  const editHandler = async () => {
    try {
      console.log(placeholder);
      console.log(formValue);
      if (placeholder === "Username") {
        let res1 = await axios.post(`${path}/editusername/${user._id}`, {
          username: formValue,
        });
        console.log(res1);
      } else if (placeholder === "Password") {
        let res2 = await axios.post(`${path}/editpassword/${user._id}`, {
          password: formValue,
        });
        console.log(res2);
      }
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main_container">
      <div className="addTodo">
        <h2>Edit Details</h2>
        <div className="addTodo_todoinput">
          <input
            type="text"
            placeholder={placeholder}
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            className="addTodo_title"
          />
          <input type="submit" name="" value="Edit" onClick={editHandler} />
        </div>
      </div>
    </div>
  );
}

export default EditPopup;
