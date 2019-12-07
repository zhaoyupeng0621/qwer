var express = require('express');
var router = express.Router();
var User=require("../controllers/user.js");
var Blog=require("../controllers/blog.js");

/* GET home page. */
function checklogin(req,res,next){
	if(req.session.id){
		next();
	}else{
		res.redirect("/login");
	}
}

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/laoshan",function(req,res,next){
	//res.send("laoshan loves laoxie");
	var xxarr=['jiangyiyan','zhaowei','jiangshuying'];
	res.render("err",{'girlname':xxarr});
});


router.get("/reg",User.reg);
router.post("/reg",User.do_reg);

router.get("/login",User.login);
router.post("/login",User.do_login);
router.get("/unlogin",User.unlogin);

router.post("/check",User.checkname);

router.get("/index",checklogin);
router.get("/index",Blog.index);

//文章相关
router.get("/newBlog",Blog.add);
router.post("/newBlog",Blog.do_add);


//文章分类相关
router.get("/blogCatalogs",Blog.add_catalog);
router.post("/addBlogCatalog",Blog.addBlogCatalog);
router.get("/editCatalog",Blog.editCatalog);
router.post("/updateCatalog",Blog.updateCatalog);
router.get("/delCatalog",Blog.delCatalog);


router.get("/search",Blog.do_search);
/*
router.get("/xx",User.yy);
router.get("/zz/:xname",User.mm);*/

module.exports = router;
