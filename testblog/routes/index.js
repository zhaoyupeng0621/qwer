var express = require('express');
var router = express.Router();
var User = require('../controllers/user');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
function checklogin(req,res,next){
	if(req.session.id){
		next();
	}else{
		res.redirect("/login");
	}
}

router.get('/reg',User.reg);
router.post('/reg',User.do_reg);
router.post('/check',User.check_name);
router.get('/login',User.login);
router.post('/login',User.do_login);
router.get("/unlogin",User.unlogin);
router.get("/index",checklogin);
router.get("/index",User.index);
module.exports = router;
