import React, { useEffect, useState, useRef } from "react";
import "./Dashboard.Styles.css";
import axios from "axios";
import path from "../../Path/Path";

import AddTodo from "./AddTodo/AddTodo.jsx";
import { useLocation, Link } from "react-router-dom";
import AllTodo from "./AllTodo";

function Dashboard({ user }) {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  let todoRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!todoRef.current.contains(e.target)) {
        setIsActive(false);
      }
    });
  });

  const [todo, setTodo] = useState("");
  const [newTodo, setNewTodo] = useState();

  const addTodoHandler = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(`${path}/addtodo`, { user: user._id, todo });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="dastboard_addTodo">
        <div className="todos">
          <div className="todos_header">
            <div className="todos_header--container">
              <div className="todos_header--text">Todos</div>
              <button
                className="todos_header--btn"
                onClick={() => {
                  setIsActive(!isActive);
                }}
              >
                +
              </button>
            </div>

            <div ref={todoRef} className="addTodoplusbtn">
              {isActive && (
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
              )}
            </div>
            <div className="todos_header--work-container">
              <AllTodo user={user} newTodo={newTodo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
