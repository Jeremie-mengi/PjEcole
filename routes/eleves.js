const express = require("express")
const {getEleves, createEleve} = require ("../controllers/eleves")
const router = express.Router();

router.get("/", getEleves)
router.post("/", createEleve);

module.exports= router