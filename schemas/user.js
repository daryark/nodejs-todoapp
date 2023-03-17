const Joi = require("joi");
const passwordRegExp = require("./password-pattern");

const userSchema = Joi.object({
	username: Joi.string().guid({ version: "uuidv4" }).alphanum().min(2).max(40).required(),
	email: Joi.string().email().required(),
	password: Joi.string().pattern(new RegExp(passwordRegExp)),
});

module.exports = userSchema;
