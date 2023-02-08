const express = require("express");
const validateLogin = require("../validations/login");
const login = require("../handlers/login");

const router = express.Router();

router.post("/login", validateLogin(), login);

module.exports = router;
