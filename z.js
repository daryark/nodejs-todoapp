"use strict";

const passwordRegExp = require("../schemas/password-pattern");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, DataTypes) {
		await queryInterface.createTable("user", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.UUIDV4,
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
		});

		await queryInterface.createTable("group", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			category: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				isAlphanumeric: {
					msg: "Must contain only almphanumeric characters",
				},
			},
		});

		await queryInterface.createTable("todo", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER,
			},
			text: {
				type: DataTypes.TEXT,
				validate: {
					notEmpty: {
						msg: "type something",
					},
				},
			},
			group_id: {
				type: DataTypes.INTEGER,
				unique: true,
				references: {
					model: "group",
					key: "id",
				},
			},
			user_id: {
				type: DataTypes.UUIDV4,
				allowNull: false,
				references: {
					model: "user",
					key: "id",
				},
			},
			created_at: {
				allowNull: false,
				type: DataTypes.DATE,
			},
			updated_at: {
				allowNull: false,
				type: DataTypes.DATE,
			},
		});
	},
	async down(queryInterface, DataTypes) {
		await queryInterface.dropAllTables();
	},
};
