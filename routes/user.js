const express = require("express");
const  {createTuteur, getUsers} = require("../controllers/users");
const router = express.Router();

router.get("/",  getUsers)
router.post("/",createTuteur);
// router.get("/renderUser");
module.exports = router;