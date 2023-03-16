/* eslint-disable new-cap */
const createError = require("http-errors");
const Joi = require("joi");
const todoOperations = require("../../db/todo-func");

const todoSchema = Joi.object({
	text: Joi.string().required(),
});

const updateTodo = async (req, res, next) => {
	try {
		const { error } = todoSchema.validate(req.body);
		if (error) {
			throw new createError(400, error.message);
		}

		const { id } = req.params;
		const result = await todoOperations.updateTodo(id, req.body);

		if (!result) {
			throw new createError(404, `Not found todo with id: ${id}`);
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
};

module.exports = updateTodo;
