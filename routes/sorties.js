const express = require("express")
const { getSortie } = require ("../controllers/sortie")
const router = express.Router();

router.get("/eleve/:id_El/sorties", getSortie)

module.exports= router