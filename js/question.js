/**
 * Created by LSW on 2016/10/19.
 * 检查 question.html 的问题有没有全填写完，填写完才能提交。
 * 
 */
$(function () {
    $("#question-form").validate({
        rules: {
            q1: {
                required: true
            },
             q2:{
                 required:true
             },
            q3:{
                required:true
            },
            q4:{
                required:true
            }
        },
        messages:{
            q1:{
                required:"请选择",
            },
            q2:{
                required:"请选择",
            },
            q3:{
                required:"请选择",
            },
            q4:{
                required: '请选择'
            }

        },
        errorPlacement: function( error, element ) {
            error.insertAfter( element.parent().parent().parent());
        }
    });
    $("#question-form").submit(function () {
        
    });
});