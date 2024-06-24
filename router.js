const express = require("express"); 
const router = express.Router(); 
const {indexLogin,Auth,indexRegister,createAccount} = require("./src/controllers/LoginAndSignUp");  
const {indexHome} = require("./src/controllers/HomeControllers"); 
router.get("/",indexLogin);  
router.post("/login/",Auth);
router.get("/register/",indexRegister); 
router.post("/register/create",createAccount);  
router.get("/home",indexHome)
  
   
module.exports = router; 