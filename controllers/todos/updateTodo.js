const todoOperations = require("../../db/todo-func");

const updateTodo = async (req, res, next) => {
	try {
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
};

module.exports = updateTodo;
