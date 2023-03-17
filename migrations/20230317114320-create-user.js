"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("user", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			username: {
				type: Sequelize.STRING,
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
				type: Sequelize.STRING,
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
				type: Sequelize.STRING,
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
						args: ["^[a-zA-Z0-9]{6,20}$"],
						msg: "Invalid password",
					},
				},
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});

		await queryInterface.createTable("group", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			category: {
				type: Sequelize.STRING,
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
				type: Sequelize.INTEGER,
			},
			text: {
				type: Sequelize.TEXT,
				validate: {
					notEmpty: {
						msg: "type something",
					},
				},
			},
			group_id: {
				type: Sequelize.INTEGER,
				unique: true,
				references: {
					model: "group",
					key: "id",
				},
			},
			user_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: "user",
					key: "id",
				},
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropAllTables();
	},
};
