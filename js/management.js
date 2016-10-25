/**
 * Created by lenovo on 2016/10/25.
 */
$(function () {
    createClass();
    createStudent();
    modifyStudent();
    singelDelete();
    multiplyDelete();
    changePass();

    //warningdialog退出监听
    $("#quit").click(function () {
        hideDialog();
    });
    $("#quit1").click(function () {
        hideDialog();
    });
    //全选监听
    $("#checkAll").click(function () {
        if(this.checked){
            $("input[name='classlist']").attr("checked", true);
        }
        else{
            $("input[name='classlist']").attr("checked", false);
        }
    });
    //修改密码
    $(".change-btn").click(function () {
        $("#changepass-dialog").show();
        $("#mask").show();
    });
    //退出创建面板
    $('#create-quit').click(function () {
        $('#create-dialog').hide();
        $('#mask').hide();
    });
    $('.quit2').click(function () {
        $('#create-dialog').hide();
        $('#changepass-dialog').hide();
        $('#mask').hide();
    });

});
function createStudent() {
    //创建学生
    $("#create").click(function () {
        $('#create-dialog').show();
        $('#mask').show();
    });
    $("#create-stuClass").submit(function (e) {
        e.preventDefault();
    });
    $('#create-sure').click(function () {
        var name = $('#student_name').val();
        var classes = $('#student_class').val();
        var num = $('#student_num').val();
        $('tr:nth-last-child(2)').after('<tr><td><input name="classlist" type="checkbox" value="3"></td><td>'+name+'</td><td>'+ classes +'</td><td>'+ num+'</td> <td><button class="btn btn-info btn-sm managestu-btn" type="button">修改学生</button> <button class="btn btn-warning btn-sm del-btn" type="button">删除学生</button> <button class="btn btn-primary btn-sm change-btn" type="button">修改密码</button> <h6>双击单元格修改</h6> </td></tr>');
        $('#create-dialog').hide();
        $('#mask').hide();
        singelDelete();
        changePass();
    });
}
function createClass() {
    //创建班级
    $("#create-class").submit(function (e) {
        e.preventDefault();
    });
    $('#createclass-sure').click(function () {
        var name = $('#student_name').val();
        var classes = $('#student_class').val();
        var num = $('#student_num').val();
        $('tr:nth-last-child(2)').after('<tr><td><input name="classlist" type="checkbox" value="3"></td><td>'+name+'</td><td>'+ classes +'</td><td>'+ num+'</td> <td> <button class="btn btn-info btn-sm manage-btn" type="button">管理班级</button> <button  class="btn btn-warning btn-sm del-btn" type="button">删除班级</button> </td></tr>');
        $('#create-dialog').hide();
        $('#mask').hide();
        singelDelete();
    });
    $('#createclass-quit').click(function () {
        $('#create-dialog').hide();
        $('#mask').hide();
    });
}

function modifyStudent() {
    $("table").click(function (e) {
        console.log(e.target);
        console.log(e.target.className);
        if(e.target.className == 'btn btn-info btn-sm managestu-btn'){
            var prev;
            var now;
           $(e.target).parent().parent().toggleClass("change1");
           $(e.target).parent().find("h6").toggleClass("change");
           $(e.target).parent().siblings().dblclick(function () {
                prev = $(this).text();
                $(this).html('<input class="form-control" type="text" autofocus>');
                var a = $(this);
                $(this).children().blur(function () {
                    now = $(this).val();
                    if(now != null && now != ''){
                        a.html(now);
                    } else {
                        a.html(prev);
                    }
                });
            });
        }
    })
}

/*function modifyStudent(){
    //修改学生
    $("table .managestu-btn").click(function () {
        var prev;
        var now;
        $(this).parent().parent().toggleClass("change1");
        $(this).parent().find("h6").toggleClass("change");
        $(this).parent().siblings().dblclick(function () {
            prev = $(this).text();
            $(this).html('<input class="form-control" type="text" autofocus>');
            var a = $(this);
            $(this).children().blur(function () {
                now = $(this).val();
                if(now != null && now != ''){
                    a.html(now);
                } else {
                    a.html(prev);
                }
            });
        });
    });
}*/
function singelDelete() {
    //一个个删除
    $(".del-btn").click(function () {
        var th =this;
        showDialog();
        $("#confirm").click(function () {
            $(th).parent().parent().remove();
            hideDialog();
        });
    });
}
function multiplyDelete() {
    //批量删除
    $("#delAll").click(function () {
        showDialog();
        $("#confirm").click(function () {
            $("input[name='classlist']:checked").parent().parent().remove();
            $("#checkAll").attr("checked",false);
            hideDialog();
        });
    });
}
function changePass() {
    //修改密码
    $(".change-btn").click(function () {
        $("#changepass-dialog").show();
        $("#mask").show();
    });
}
function showDialog() {
    $("#warn-dialog").show();
    $("#mask").show();
}

function hideDialog() {
    $("#warn-dialog").hide();
    $("#mask").hide();
}