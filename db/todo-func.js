const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");

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

const addTodo = async (body) => {
	const todoList = await getAll();
	const newTodo = { id: v4(), ...body };
	todoList.push(newTodo);
	await fs.writeFile(todoPath, JSON.stringify(todoList));
	return newTodo;
};

const updateTodo = async (todoId, body) => {};

// const removeTodo = async (todoId) => {};

//
module.exports = {
	getAll,
	getTodoById,
	addTodo,
	updateTodo,
	// removeTodo,
};
