const todoOperations = require("../../db/todo-func");

const addTodo = async (req, res, next) => {
	const result = await todoOperations.addTodo(req.body);
	res.status(201).json({
		status: "success",
		code: 201,
		data: {
			result,
		},
	});
};

module.exports = addTodo;
