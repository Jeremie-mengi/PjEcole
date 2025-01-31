const express = require("express")
const {getPresence} = require ("../controllers/countPresences")
const router = express.Router();
router.get("/presences",getPresence )
module.exports= router