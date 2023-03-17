"use strict";
const passwordRegExp = require("../schemas/password-pattern");

// const secrets = [
// 	// "emailVerificationToken",
// 	"id",
// 	"username",
// 	"email",
// 	"password",
// 	"createdAt",
// 	"updatedAt",
// ];

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		"user",
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.STRING,
				validate: {
					isUUID: 4,
				},
			},
			username: {
				type: DataTypes.STRING,
				validate: {
					isAlphanumeric: {
						msg: "Must contain only almphanumeric characters",
					},
					len: {
						args: [2, 40],
						msg: "Length must be from 2 to 40 symbols",
					},
				},
			},
			email: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: {
						msg: "required",
					},
					isEmail: {
						msg: "Not valid email",
					},
				},
				allowNull: false,
				unique: true,
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: "required",
					},
					len: {
						args: [6, 20],
						msg: "Length must be from 6 to 20 symbols",
					},
					is: {
						args: [passwordRegExp],
						msg: "Invalid password",
					},
				},
			},
			// auth_token: {
			// 	type: DataTypes.STRING,
			// 	defaultValue: "",
			// },
			// email_verification_token: {
			// 	type: DataTypes.STRING,
			// 	allowNull: false,
			// },
			// is_email_verified: {
			// 	type: DataTypes.BOOLEAN,
			// 	defaultValue: false,
			// },
			created_at: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			updated_at: {
				allowNull: false,
				type: DataTypes.DATE,
			},
		},
		{}
	);

	// User.prototype.purge = function () {
	// 	const clean = {};
	// 	for (const key of Object.keys(this.dataValues)) {
	// 		if (!secrets.includes(key)) {
	// 			clean[key] = this.dataValues[key];
	// 		}
	// 	}
	// 	return clean;
	// };

	return User;
};
