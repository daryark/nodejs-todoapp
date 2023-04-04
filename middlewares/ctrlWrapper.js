const ctrlWrapper = (ctrl) => {
	return async (req, res, next) => {
		try {
			await ctrl(req, res, next);

			console.log("try");
		} catch (error) {
			next(error);

			console.log("catch");
		}
	};
};

module.exports = ctrlWrapper;
