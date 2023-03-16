const createError = require("http-errors");
const Joi = require("joi");
const todoOperations = require("../../db/todo-func");

const todoSchema = Joi.object({
	text: Joi.string().required(),
});

const addTodo = async (req, res, next) => {
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
};

module.exports = addTodo;
