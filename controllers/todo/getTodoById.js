/* eslint-disable new-cap */
const createHttpError = require("http-errors");
const todoOperations = require("../../db/todo-func");

const getTodoById = async (req, res) => {
	const { id } = req.params;
	const result = await todoOperations.getTodoById(id);
	if (!result) {
		throw new createHttpError(404, `Todo with id: ${id} not found`);
	}
	res.json({
		status: "success",
		code: 200,
		data: {
			result,
		},
	});
};

module.exports = getTodoById;
