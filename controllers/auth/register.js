/* eslint-disable new-cap */
// const createHttpError = require("http-errors");
// const User = require("../../models/user");

// const register = async (req, res) => {
// 	const { username, email, password } = req.body;

// 	console.log("userEmail", User.get("email"));
// 	console.log("email", email);
// 	const user = await User.findOne({ email });
// 	if (user) {
// 		throw new createHttpError(409, `User with this email ${email} already exists`);
// 	}
// 	const result = await User.create({ username, email, password });
// 	console.log("result", JSON.parse(result));
// 	res.status(201).json({
// 		status: "success",
// 		code: 201,
// 		data: {
// 			user: {
// 				email,
// 				username,
// 			},
// 		},
// 	});
// };

// module.exports = register;

const { User } = require("../../+models/user");
const { hashPassword, jwtToken } = require("../../utils/jwt");

const register = async (req, res) => {
	const { username, email, password } = req.body;
	const hash = hashPassword(password);

	console.log(req.body);
	console.log(User);

	const result = await User.create({ username, email, password: hash });
	const token = jwtToken.createWebToken(result);
	console.log(token);

	return res.status(201).json({
		status: "success",
		code: 201,
		data: {
			token,
			result,
		},
	});
};

module.exports = register;
