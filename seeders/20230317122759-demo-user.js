"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"user",
			[
				{
					id: 1,
					username: "John Doe",
					email: "user1@mail.com",
					password: "mypassword",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					id: 2,
					username: "John Doe",
					email: "user2@mail.com",
					password: "mypassword",
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					id: 3,
					username: "John Doe",
					email: "user3@mail.com",
					password: "mypassword",
					created_at: new Date(),
					updated_at: new Date(),
				},
			],
			{}
		);

		await queryInterface.bulkInsert(
			"group",
			[
				{
					id: 1,
					category: "daily",
				},
				{
					id: 2,
					category: "thoughts",
				},
				{
					id: 3,
					category: "ideas",
				},
			],
			{}
		);

		await queryInterface.bulkInsert(
			"todo",
			[
				{
					id: 1,
					text: "1 todo",
					group_id: null,
					user_id: 1,
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					id: 2,
					text: "2 todo",
					group_id: 1,
					user_id: 2,
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					id: 3,
					text: "3 todo",
					group_id: 2,
					user_id: 1,
					created_at: new Date(),
					updated_at: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("user", null, {});
		await queryInterface.bulkDelete("group", null, {});
		await queryInterface.bulkDelete("todo", null, {});
	},
};
