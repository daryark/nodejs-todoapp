const fs = require("fs/promises");
const path = require("path");

const todoPath = path.join(__dirname, "./todo.json");

const getAll = async () => {
	return JSON.parse(await fs.readFile(todoPath));
};

const getTodoById = async (todoId) => {
	const todoList = await getAll();
	const todo = todoList.find((item) => item.id === todoId);
	if (!todo) {
		return null;
	}
	return todo;
};

// const addTodo = async (body) => {};

// const updateTodo = async (todoId, body) => {};

// const removeTodo = async (todoId) => {};

//
module.exports = {
	getAll,
	getTodoById,
	// removeTodo,
	// addTodo,
	// updateTodo,
};
