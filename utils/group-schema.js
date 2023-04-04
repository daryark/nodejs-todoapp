const Joi = require("joi");

const groupSchema = Joi.object({
	category: Joi.string().alphanum().required(),
});

module.exports = groupSchema;
