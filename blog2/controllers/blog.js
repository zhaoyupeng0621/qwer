var Blog_model=require('../models/blog_model');
exports.index=function(req,res,next){
    Blog_model.show_articles_by_name(req.session.id,function(err,data){
        if(data.length>0){
            //console.log(data);
            res.render('index_logined',{
                'sess':req.session,
                'blogs':data,
            })
        }
    })
    
}

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

exports.add=function(req,res,next){
    var uid=req.session.id;
    Blog_model.sel_cata_by_uid(uid,function(err,data){
        if(data.length>0){
            res.render('newBlog',{
                'sess':req.session,
                'catas':data
            })
        }
    })
    
}

exports.do_add=function(req,res,next){
    
}

exports.add_catalog=function(req,res,next){
    var uid=req.session.id;
    Blog_model.sel_cata_by_uid(uid,function(err,data){
        if(data.length>0){
            res.render('blogCatalogs',{
                'sess':req.session,
                'catas':data
            })
        }
    });
}

exports.addBlogCatalog=function(req,res,next){
    //var flag=true;
    var cataname = req.body.name;
    var uid = req.session.id;
    // Blog_model.sel_cata_by_uid(uid,function(err,data){
    //     if(data.length>0){
    //         data.forEach(function(da,index){
    //             if(da.NAME==cataname){
    //                 flag=!flag;
    //                 //alert("请重新命名");
    //                 res.redirect('/blogCatalogs');
    //                 return ;
    //             }
    //         })
    //     }
    // });
    // if(flag){
    //     Blog_model.insert_catalog(cataname,uid,function(err,data){
    //         if(data.affectedRows==1){
    //             res.redirect('/blogCatalogs');
    //         }
    //     })
    // }
    Blog_model.insert_catalog(cataname,uid,function(err,data){
         //console.log(data);
        if(data.affectedRows==1){
            res.redirect("/blogCatalogs");
        }
        // else{
        //     req.redirect("/blogCatalogs");
        // }
    })
}

exports.editCatalog=function(req,res,next){
    var cid = req.query.cid;
    //var uid = req.session.id;
    //var dd;
    
    // Blog_model.sel_cata_by_uid(uid,function(err,data1){
    //     if(data1.length>0){
    //         dd=data1;
    //     }
    // })
    Blog_model.sel_catadata(cid,function(err,data){
        if(data.length>0){
            //console.log(dd);
            res.render('editCatalog',{
                'sess':req.session,
                'cata':data[0],
                //'catas':dd,
            })
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
    Blog_model.del_cataname(cid,function(err,data){
        if(data.affectedRows==1){
            res.redirect("/blogCatalogs");
        }
    })
}