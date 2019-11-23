var arr=new Array();
var j=-1;
for(var i=1;i<=10;i++){
    arr[i-1]=i;
    
    setTimeout(function(){
        j++;
        console.log(arr[j]);
        
    },2000)
    
}