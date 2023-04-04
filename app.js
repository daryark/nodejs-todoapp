const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const todoRouter = require("./routes/api/todo");
const authRouter = require("./routes/api/auth");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/todo", todoRouter);
app.use("/api/auth", authRouter);

app.use((req, res) => {
	res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
	const { status = 500, message = "Server error" } = err;
	res.status(status).json({ message });
});

module.exports = app;

// ID: todoapp
// password: T7'K|fZDMq?AVBI[
// connection name to database: atomic-nation-380813:europe-central2:todoapp
// public ip address: 34.116.149.176
