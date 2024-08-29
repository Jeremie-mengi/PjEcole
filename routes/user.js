const express = require("express");
const  {createTuteur} = require("../controllers/users");
const router = express.Router();

router.post("/",createTuteur);
// router.get("/renderUser");
module.exports = router;