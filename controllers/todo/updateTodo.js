const todoOperations = require("../../db/todo-func");

const updateTodo = async (req, res) => {
	const { id } = req.params;
	const result = await todoOperations.updateTodo(id, req.body);
	res.json({
		status: "success",
		code: 200,
		data: {
			result,
		},
	});
};

module.exports = updateTodo;
