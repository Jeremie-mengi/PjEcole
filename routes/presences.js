const express = require("express")
const { getPresences } = require ("../controllers/presences")
const router = express.Router();

router.get("/eleve/:id_El/presences", getPresences)

module.exports= router