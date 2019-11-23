var Person=require('./person.js');
var util=require("util");

function Student(){
    Person.call(this);
    this.thing="xuexi"
    // this.do=function(){
    //     console.log(22);
    // }
}
util.inherits(Student, Person);
module.exports=Student;