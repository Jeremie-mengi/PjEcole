const express = require("express");
const authMidlUser = require ("../midllware/authMidlUser")
const router = express.Router();

router.post("/", authMidlUser)
module.exports = router