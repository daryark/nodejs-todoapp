/* eslint-disable new-cap */
const express = require("express");
// const createError = require("http-errors");

const router = express.Router();
// const todoOperations = require("../../db/todo-func");
const { todos: ctrl } = require("../../controllers");

// GET all todos of // //user
router.get("/", ctrl.getAll);
// GET one todo by id
router.get("/:id", ctrl.getTodoById);
// POST new todo
router.post("/", ctrl.addTodo);
// //UPDATE todo
router.put("/:id", ctrl.updateTodo);
// DELETE todo
router.delete("/:id", ctrl.deleteTodo);

module.exports = router;
