exports.middlwareGlobal = (req,res,next) =>{
  res.locals.erros = req.flash("erros"); 
  res.locals.success = req.flash("success");  
  next(); 

}