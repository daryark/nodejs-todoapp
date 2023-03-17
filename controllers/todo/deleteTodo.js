/* eslint-disable new-cap */
const createError = require("http-errors");
const todoOperations = require("../../db/todo-func");

const deleteTodo = async (req, res) => {
	const { id } = req.params;
	const result = await todoOperations.deleteTodo(id);

	if (!result) {
		throw new createError(404, `Todo with id: ${id} not found`);
	}

	res.json({
		status: "success",
		code: 200,
		message: "item deleted",
		data: {
			result,
		},
	});
};

module.exports = deleteTodo;
