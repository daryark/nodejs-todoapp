const fs = require("fs/promises");
const path = require("path");
const todoPath = path.join(__dirname, "./todo.json");

const updateTodoList = async (newTodoList) => {
	await fs.writeFile(todoPath, JSON.stringify(newTodoList));
};

module.exports = updateTodoList;
