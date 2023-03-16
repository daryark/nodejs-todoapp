const express = require("express");
const router = express.Router();
const contactsOperations = require("../../models/contacts");

router.get("/", async (req, res) => {
	try {
		const listContacts = await contactsOperations.listContacts();
		res.json(listContacts);
	} catch (error) {
		console.error(error);
	}
});

router.get("/:contactId", async (req, res, next) => {
	res.json({ message: "template message" });
});

router.post("/", async (req, res, next) => {
	res.json({ message: "template message" });
});

router.delete("/:contactId", async (req, res, next) => {
	res.json({ message: "template message" });
});

router.put("/:contactId", async (req, res, next) => {
	res.json({ message: "template message" });
});

module.exports = router;
