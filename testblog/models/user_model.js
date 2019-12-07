var db=require('./db');

exports.insert_name_by_pass=function(uname,pass,nickname,callback){
    var sql="insert into t_users(ACCOUNT,PASSWORD,NAME) values(?,?,?)";
    db.query(sql,[uname,pass,nickname],callback);
}

exports.check_name=function(uname,callback){
    var sql="select * from t_users where ACCOUNT=?";
    db.query(sql,[uname],callback);
}

exports.get_name_by_pass=function(account,pass,callback){
    var sql="select * from t_users where ACCOUNT=? and PASSWORD=?";
    db.query(sql,[account,pass],callback);
}