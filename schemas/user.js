const Joi = require("joi");

const userSchema = Joi.object({
	username: Joi.string().alphanum().min(2).max(40).required(),
	email: Joi.string().email().required(),
	password: Joi.string().regex("^[a-zA-Z0-9]{6,20}$"),
});

module.exports = userSchema;
