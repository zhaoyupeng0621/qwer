function Person(){
    this.eat="eat";
    this.sleep="sleep";
    this.thing="anything"
    this.do=function(){
        console.log(this.eat+" "+this.sleep+" "+this.thing)
    }
}
module.exports=Person;