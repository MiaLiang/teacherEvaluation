/**
 * Created by lenovo on 2016/10/20.
 */
$(function () {
    $(".dropdown1").click(function () {
       $(".dropdown1 ul").toggleClass("vis");
    });

    $("#imgbg").fadeOut(3000);
    $("#welcome").fadeOut(3000,function () {
        $("#intro").removeClass("hide").addClass("show");
    });
});