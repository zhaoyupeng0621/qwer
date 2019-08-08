
$(function(){
    $('#jnBrandTab li').on('click',function(){
        $(this).addClass('chos').siblings().removeClass('chos');
        var width=$('#jnBrandList li').outerWidth(true)*4;
        var index=$(this).index();
        $('#jnBrandList').animate({
            left:-index*width
        },1000)
    })
})
