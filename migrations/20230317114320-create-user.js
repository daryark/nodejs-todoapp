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
					len: [2, 30],
				},
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false,
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
			name: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
				defaultValue: "Not sorted",
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
				allowNull: false,
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
