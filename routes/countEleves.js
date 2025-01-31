const express = require("express")
const {getCountEleves} = require ("../controllers/countEleves")
const router = express.Router();
router.get("/students/count",getCountEleves )
module.exports= router