const router = require("express").Router();

const {addTodo, getAllTodoOfParticularUser, deleteTodo} = require("../controllers/todoControllers");

router.post("/addtodo", addTodo);
router.get("/getAllTodos/:userId", getAllTodoOfParticularUser);
router.delete("/deleteTodo/:todoId", deleteTodo);

module.exports = router;