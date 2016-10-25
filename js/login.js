/**
 * Created by LSW on 2016/10/19.
 * 用于检测 login.html 和 admin/login.html 的表单验证。
 */

$(function () {
    var margin_top = ( $(window).height() - $("#login-panel").height()-80 ) / 2;
    var margin_img  = ( $(window).height() - $("#login img").height()-80 ) / 2;
    $("#login-panel").css("margin-top",margin_top);
   $(window).resize(function () {
       var margin_top = ( $(window).height() - $("#login-panel").height()-80 ) / 2;
       $("#login-panel").css("margin-top",margin_top);
       var margin_img  = ( $(window).height() - $("#login img").height()-80 ) / 2;
       $("#login img").css("margin-top",margin_img);
   });
    //-----验证表单-----
    $("#login-form").validate({
        rules:{     //配置验证规则，key就是被验证的dom对象，value就是调用验证的方法(也是json格式)
            name:{
                required:true,  //必填。如果验证方法不需要参数，则配置为true
                rangelength:[6,12]
            },
            password:{
                required:true,
                rangelength:[6,12]
            }
        },
        messages:{
            name:{
                required:"请输入用户名",
                rangelength:$.validator.format("用户名长度在必须为：{0}-{1}之间")
            },
            password:{
                required:"请输入密码",
                rangelength:$.validator.format("字段长度必须为：{0}-{1}之间")
            }
        },
            errorPlacement: function( error, element ) {
                error.insertAfter( element.parent() );
            }
        });
    //-------验证表单------结束
    

});