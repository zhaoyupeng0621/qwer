var express = require('express');
var User=require('../controllers/user');
var Blog=require('../controllers/blog');
var router = express.Router();
function checklogin(req,res,next){
    if(req.session.id){
      next();
    }else{
      res.redirect('/login');
    }
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/reg',User.reg);
router.post('/reg',User.do_reg);
router.post('/check',User.checkname);
router.get('/login',User.login);
router.post('/login',User.do_login);
router.get('/index',checklogin);
router.get('/index',Blog.index);
router.get('/unlogin',User.unlogin);

router.get('/newBlog',Blog.add);
router.post('/newBlog',Blog.do_add);

router.get('/blogCatalogs',Blog.add_catalog);
router.post('/addBlogCatalog',Blog.addBlogCatalog);
router.get('/editCatalog',Blog.editCatalog);
router.post('/updateCatalog',Blog.updateCatalog);
router.get('/delCatalog',Blog.delCatalog);
router.get("/search",Blog.do_search);
module.exports = router;
