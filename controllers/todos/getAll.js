const todoOperations = require("../../db/todo-func");

const getAll = async (req, res, next) => {
	const result = await todoOperations.getAll();
	res.json({
		status: "success",
		code: 200,
		data: {
			result,
		},
	});
};

module.exports = getAll;
