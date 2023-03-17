const express = require("express");
const router = express.Router();

const { todos: ctrl } = require("../../controllers");
const { validation, ctrlWrapper } = require("../../middleware");
const { todoSchema } = require("../../schemas");

// GET all todos of // //user
router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getTodoById));

router.post("/", validation(todoSchema), ctrlWrapper(ctrl.addTodo));

router.put("/:id", validation(todoSchema), ctrlWrapper(ctrl.updateTodo));

router.delete("/:id", ctrlWrapper(ctrl.deleteTodo));

module.exports = router;
