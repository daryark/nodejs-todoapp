const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");
const updateTodoList = require("./updateTodoList");

const todoPath = path.join(__dirname, "./todo.json");

const getAll = async () => {
	return JSON.parse(await fs.readFile(todoPath));
};

const getTodoById = async (id) => {
	const todoList = await getAll();
	const todo = todoList.find((item) => item.id === id);
	if (!todo) {
		return null;
	}
	return todo;
};

const addTodo = async (body) => {
	const todoList = await getAll();
	const newTodo = { id: v4(), ...body };
	todoList.push(newTodo);
	await updateTodoList(todoList);
	return newTodo;
};

const updateTodo = async (id, body) => {
	const todoList = await getAll();
	const idx = todoList.findIndex((item) => item.id === id);
	if (idx === -1) {
		return null;
	}

	todoList[idx] = { id, ...body };
	await updateTodoList(todoList);
	return todoList[idx];
};

const deleteTodo = async (id) => {
	const todoList = await getAll();
	const idx = todoList.findIndex((item) => item.id === id);
	if (idx === -1) {
		return null;
	}

	const removedTodo = todoList.splice(idx, 1);
	await updateTodoList(todoList);
	return removedTodo;
};

module.exports = {
	getAll,
	getTodoById,
	addTodo,
	updateTodo,
	deleteTodo,
};
