var Blog_model=require("../models/blog_model.js");

exports.do_search=function(req,res,next){
	var search_name=req.query.q;
	Blog_model.search_article_by_name(search_name,function(err,data){
		if(data.length>0){
			//console.log(data);
			res.render("index_logined",{
				'sess':req.session,
				'blogs':data,
			});
		}
	})
}


exports.index=function(req,res,next){
	//console.log(req.session);
	//把index主页加载
	var uid=req.session.id;
	Blog_model.show_articles_by_name(uid,function(err,data){
		if(data.length>0){
			//console.log(data);
			
			res.render("index_logined",{
				'sess':req.session,
				'blogs':data,
			});
		}
	})
	
}

exports.do_add=function(req,res,next){

}

exports.add=function(req,res,next){
	//调用Blog_model下的分类查询方法
	var uid=req.session.id;
	Blog_model.sel_cata_by_uid(uid,function(err,data){
		if(data.length>0){
			res.render("newBlog",{
				'sess':req.session,
				'catas':data,
			});
		}
		
	})
	
}

exports.add_catalog=function(req,res,next){
	var uid=req.session.id;
	Blog_model.sel_cata_by_uid(uid,function(err,data){
		if(data.length>0){
			res.render("blogCatalogs",{
				'sess':req.session,
				'catas':data,
			});
		}
	});
}

exports.addBlogCatalog=function(req,res,next){
	var uid=req.session.id;
	var cataname=req.body.name;
	Blog_model.insert_catalog(cataname,uid,function(err,data){
		if(data.affectedRows==1){
			res.redirect("/blogCatalogs");
		}
	})
}


exports.editCatalog=function(req,res,next){
	var cid=req.query.cid;
	//var uid=req.session.id;
	Blog_model.sel_catadata(cid,function(err,data){
		if(data.length>0){
			res.render("editCatalog",{
				'sess':req.session,
				'cata':data[0],
			});
		}
	});
	

}

exports.updateCatalog=function(req,res,next){
	var cid=req.body.hcid;
	var cname=req.body.name;
	Blog_model.update_cataname(cid,cname,function(err,data){
		if(data.affectedRows==1){
			res.redirect("/blogCatalogs");
		}
	})
}

exports.delCatalog=function(req,res,next){
	var cid=req.query.cid;
	//var uid=req.session.id;
	Blog_model.del_cataname(cid,function(err,data){
		if(data.affectedRows==1){
			res.redirect("/blogCatalogs");
		}
	})
}