const todoOperations = require("../../db/todo-func");

const getAll = async (req, res, next) => {
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
};

module.exports = getAll;
