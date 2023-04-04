const express = require("express");
const router = express.Router();

// const { auth: ctrl } = require("../../controllers");
const { register } = require("../../+models/user");
const { validation, ctrlWrapper } = require("../../middlewares");
const { authSchema } = require("../../utils");

router.post("/register", validation(authSchema), ctrlWrapper(register));

// router.get("/", ctrlWrapper(ctrl.getAll));

// router.post("/", validation(authSchema), ctrlWrapper(ctrl.addUser));

// router.put("/:id", validation(authSchema), ctrlWrapper(ctrl.updateUser));

// router.delete("/:id", ctrlWrapper(ctrl.deleteUser));

router.use("/", (req, res) => res.send("auth"));

module.exports = router;
