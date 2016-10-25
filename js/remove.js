/**
 * Created by LSW on 2016/10/20.
 * 用于移除 questionlist.html 中已经填完的问卷
 */
$(function () {
    //移除已经完成的问卷
    var a = $("#counter").text();
    function getURLParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var param = window.location.search.substr(1).match(reg);
        console.log(param);
        if (param != null) {
            a = a-1;
            return decodeURI(param[2]);
        }
        else{
            return null;
        }
    }
    var rm ="#" + getURLParam("questionNum");
    $(rm).remove();
    $("#counter").text(a);
});