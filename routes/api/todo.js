/* eslint-disable new-cap */
const express = require("express");
const createError = require("http-errors");
const Joi = require("joi");

const router = express.Router();
const todoOperations = require("../../db/todo-func");
const todoSchema = Joi.object({
	text: Joi.string().required(),
});

// GET all todos of // //user
router.get("/", async (req, res, next) => {
	try {
		const result = await todoOperations.getAll();
		res.json({
			status: "success",
			code: 200,
			data: {
				result,
			},
		});
	} catch (error) {
		next(error);
	}
});
// GET one todo by id
router.get("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await todoOperations.getTodoById(id);
		if (!result) {
			throw new createError(404, `Todo with id: ${id} not found`);
		}
		res.json({
			status: "success",
			code: 200,
			data: {
				result,
			},
		});
	} catch (error) {
		next(error);
	}
});
// POST new todo
router.post("/", async (req, res, next) => {
	try {
		const { error } = todoSchema.validate(req.body);
		if (error) {
			throw new createError(400, error.message);
		}

		const result = await todoOperations.addTodo(req.body);
		res.status(201).json({
			status: "success",
			code: 201,
			data: {
				result,
			},
		});
	} catch (error) {
		next(error);
	}
});
// //UPDATE todo
router.put("/:id", async (req, res, next) => {
	try {
		const { error } = todoSchema.validate(req.body);
		if (error) {
			throw new createError(400, error.message);
		}

		const { id } = req.params;
		const result = await todoOperations.updateTodo(id, req.body);
		res.json({
			status: "success",
			code: 200,
			data: {
				result,
			},
		});
	} catch (error) {
		next(error);
	}
});
// DELETE todo
router.delete("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const result = await todoOperations.deleteTodo(id);

		if (!result) {
			throw new createError(404, `Todo with id: ${id} not found`);
		}

		res.json({
			status: "success",
			code: 200,
			data: {
				result,
			},
		});
	} catch (error) {
		next(error);
	}
});

module.exports = router;
