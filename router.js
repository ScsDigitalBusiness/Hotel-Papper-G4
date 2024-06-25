const express = require("express"); 
const router = express.Router(); 
const {indexLogin,Auth,indexRegister,createAccount} = require("./src/controllers/LoginAndSignUp");  
const {indexHome,logout} = require("./src/controllers/HomeControllers");  
const {QuartoIndividualIndex} = require("./src/controllers/QuartoIndividualControllers");   
const {quartoDeCasalIndex} = require("./src/controllers/QaurtoDeCasalController");  
const {quartoDeLuxoController} = require("./src/controllers/QuartoDeLuxoController");
const {reservationIndex,createReservation}  = require("./src/controllers/ReservationController") 
const {QuemSomosIndex} = require("./src/controllers/QuemSomosIndexControllers"); 
router.get("/",indexLogin);  
router.post("/login/",Auth);
router.get("/register/",indexRegister); 
router.post("/register/create",createAccount);  
router.get("/home",indexHome) ;
router.get("/quartoIndividual/",QuartoIndividualIndex);    
router.get("/quartoDeCasal/",quartoDeCasalIndex);  
router.get("/quartoDeLuxo/",quartoDeLuxoController); 
router.get("/QuemSomos/",QuemSomosIndex)  


router.get("/reservation/",reservationIndex);  
router.post("/reservation/create/",createReservation); 
router.get('/logout',logout); 

  
   
module.exports = router; 