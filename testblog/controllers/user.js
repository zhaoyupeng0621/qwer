var User_models=require('../models/user_model');
exports.reg=function(req,res,next){
    res.render('reg');
}

exports.do_reg=function(req,res,next){
    var uname=req.body.email;
    var pass=req.body.pwd;
    var nickname=req.body.name;
    User_models.check_name(uname,function(err,data){
        if(data.length>0){
            res.redirect('/reg');
        }else{
            User_models.insert_name_by_pass(uname,pass,nickname,function(err,data){
                if(data.affectedRows==1){
                    res.redirect('/login')
                }
            })
        }
    })
}

exports.check_name=function(req,res,next){
    var uname=req.body.account;
    User_models.check_name(uname,function(err,data){
        if(data.length>0){
            res.send('success');
        }else{
            res.send('error');
        }
    })
}

exports.login=function(req,res,next){
    res.render('login');
}

exports.do_login=function(req,res,next){
    var account=req.body.email;
    var pass=req.body.pwd;
    User_models.get_name_by_pass(account,pass,function(err,data){
        if(data.length>0){
            req.session.id=data[0].USER_ID;
			req.session.nickname=data[0].NAME;

			res.redirect("/index");
        }
    })
}
exports.index=function(req,res,next){
	//console.log(req.session);
	res.render("index_logined",{
		'sess':req.session,
	})
}

exports.unlogin=function(req,res,next){
	req.session=null;
	res.redirect("/index");
}