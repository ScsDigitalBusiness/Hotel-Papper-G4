const express = require("express"); 
const router = express.Router(); 
const {indexLogin} = require("./src/controllers/LoginAndSignUp"); 
router.get("/",indexLogin);  

module.exports = router; 