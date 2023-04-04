const validation = (schema) => {
	return (req, res, next) => {
		const { error } = schema.validate(req.body);
		if (error) {
			error.status = 400;
			next(error);
			return;
		}
		next();
		console.log("validation failed");
	};
};

module.exports = validation;
