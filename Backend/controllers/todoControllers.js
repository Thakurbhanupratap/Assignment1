const TODO = require("../Model/todo");
const User = require("../Model/user");

module.exports.addTodo = async (req, res) => {
  try {
    const { user, todo } = req.body;
    const newTodo = new TODO({
      user,
      todo,
    });
    let result = await newTodo.save();
    res.status(201).json({ msg: "TODO stored successfully!", data: result });
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports.getAllTodoOfParticularUser = async (req, res) => {
  try {
    const user = req.params.userId;
    let result = await TODO.find({ user });
    res.status(201).json({ data: result });
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports.deleteTodo = async (req, res) => {
  try {
    const id = req.params.todoId;
    console.log(id);
    let result = await TODO.findByIdAndDelete(id);
    res.status(201).json({ msg: "Todo deleted successfully.", data: result });
  } catch (error) {
    console.log(error);
  }
};
