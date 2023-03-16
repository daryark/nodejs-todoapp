const Joi = require("joi");

const todoSchema = Joi.object({
	text: Joi.string().required(),
});

module.exports = todoSchema;
