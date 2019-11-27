var User_model=require('../models/user_model');

exports.reg=function(req,res,next){
    res.render('reg')
}

exports.do_reg=function(req,res,next){
    var account=req.body.email;
    var nickname=req.body.name;
    var pass=req.body.pwd;
    User_model.check_name(account,function(err,data){
        if(data.length>0){
            res.redirect('/reg');
        }else{
            User_model.insert_name_by_pass(account,pass,nickname,function(err,data){
                if(data.affectedRows==1){
                    res.redirect('/login');
                }
            })
        }
    })
    
}

exports.checkname=function(req,res,next){
    var account=req.body.account;
    User_model.check_name(account,function(err,data){
        if(data.length>0){
            res.send("success");
        }else{
            res.send("error");
        }
    })
}

exports.login=function(req,res,next){
    //res.send("success");
    res.render('login')
}

exports.do_login=function(req,res,next){
    var account=req.body.email;
    var pass=req.body.pwd;
    User_model.get_name_by_pass(account.pass,function(err,data){
        if(data.length>0){
            //console.log("success");
            // res.send("success");
            req.session.id=data[0].USER_ID;
			req.session.nickname=data[0].NAME;

			res.redirect("/index");
        }
    })
}