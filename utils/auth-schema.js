const Joi = require("joi");
const passwordRegExp = require("./password-pattern");

const authSchema = Joi.object({
	username: Joi.string().alphanum().min(2).max(40).required(),
	email: Joi.string().email().required(),
	password: Joi.string().pattern(new RegExp(passwordRegExp)),
});

module.exports = authSchema;
