$(function () {
    var $li = $("#skin li");
    $li.click(function () {
        switchSkin(this.id);
    });
    var skin_cookie = $.cookie("MyCssSkin");
    if (skin_cookie) {
        switchSkin(skin_cookie);
    }
});

function switchSkin(skinName) {
    $("#" + skinName).addClass("selected").siblings().removeClass("selected");
    $("#cssfile").attr("href", "css/skin/" + skinName + ".css");
    $.cookie("MyCssSkin", skinName, { path: '/', expires: 10 })
}