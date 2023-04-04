const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { config } = require("dotenv");
config();

const jwtToken = {
	createWebToken({ id, email }) {
		return jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: "24h" });
	},
	verifyWebToken(token) {
		return jwt.verify(token, process.env.JWT_SECRET, { expiresIn: "24h" });
	},
};

const hashPassword = (password) => bcrypt.hashSync(password, 10);
const comparePassword = (password, hash) => bcrypt.compareSync(password, hash);

module.exports = { jwtToken, hashPassword, comparePassword };
