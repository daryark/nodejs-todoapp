const express = require("express");
// const app = require(./app);
const router = express.Router();

const todoOperations = require("../../db/todo-func");

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
			res.status(404).json({
				status: "error",
				code: 404,
				message: `Todo with id: ${id} not found`,
			});
			return;
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
// //POST new todo
// router.post("/", async (req, res, next) => {
// 	res.json({ message: "template message" });
// });
// //UPDATE todo
// router.put("/:todoId", async (req, res, next) => {
// 	res.json({ message: "template message" });
// });
// //DELETE todo
// router.delete("/:todoId", async (req, res, next) => {
// 	res.json({ message: "template message" });
// });

module.exports = router;
