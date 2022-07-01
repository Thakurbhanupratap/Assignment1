import axios from "axios";
import React, { useState } from "react";
import path from "../../../Path/Path";
import "./AddTodo.Styles.css";
// import AllTodo from "../AllTodo";

function AddTodo({ user }) {
  const [todo, setTodo] = useState("");
  const [newTodo, setNewTodo] = useState();

  const addTodoHandler = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(`${path}/addtodo`, { user: user._id, todo });
      setNewTodo(res.data.data);

      localStorage.setItem("newTodo", JSON.stringify(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="main_container">
      <div className="addTodo">
        <h2>Add Todo</h2>
        <div className="addTodo_todoinput">
          <input
            type="text"
            placeholder="Work"
            className="addTodo_title"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <input
            type="submit"
            value="Add"
            className="addTodo_AddBtn"
            onClick={addTodoHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
