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
			"todo",
			[
				{
					id: 1,
					text: "1 todo",
					group: "user1@mail.com",
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
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
