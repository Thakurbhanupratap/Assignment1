import React, { useState, useEffect } from "react";
import axios from "axios";
import path from "../../Path/Path";
import "./AllTodo.styles.css";

function AllTodo({ user, newTodo }) {
  const [allTodofinal, setAllTodofinal] = useState([]);

  useEffect(() => {
    const getAllTodo = async () => {
      try {
        let res = await axios.get(`${path}/getAllTodos/${user._id}`);
        setAllTodofinal(res.data.data);
      } catch (error) {}
    };

    getAllTodo();
  }, [user]);
  console.log(allTodofinal);

  const todoDelete = async (id) => {
    try {
      let res = await axios.delete(`${path}/deleteTodo/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {allTodofinal.map((item, index) => (
        <div className="todos_header--work">
          {item.todo}
          <button>
            <i
              className="fas fa-times crossBtn"
              onClick={() => todoDelete(item._id)}
            ></i>
          </button>
        </div>
      ))}
    </div>
  );
}

export default AllTodo;
