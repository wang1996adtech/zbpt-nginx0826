$(document).ready(function () {

    /*时间选择器*/
    $("#startTime").datetimepicker({
        format: 'yyyy-mm-dd',//显示格式
        startView:2,
        minView:2,
        maxView :2,
        language: 'zh-CN',
        autoclose: 1,//选择后自动关闭
        clearBtn:true,//清除按钮
    });
    /*bootstraptable动态渲染表格*/
    $('#ChargeTable').bootstrapTable({
        url:'../js/data11.json',  //请求后台的URL（*）
        Type: 'get',   //请求方式（*）
        toolbar: '#toolbar',  //工具按钮用哪个容器
        cache: false,   //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,   //是否显示分页（*）
        sidePagination: "server",
        pageNumber: 1,                       //初始化加载第一页，默认第一页
        pageSize: 20,                       //每页的记录行数（*）
        pageList: [10],        //可供选择的每页的行数（*）
        sortable: false,   //是否启用排序
        sortOrder: "asc",   //排序方式
        paginationDetailHAlign:"right",
        showExport: true,
        sidePagination: "server",  //分页方式：client客户端分页，server服务端分页（*）
        columns: [
            {
                title: "序号",
                valign:"middle",
                align:"center",
                formatter: function (value, row, index) {
                    return index+1;
                }
            },
            {
                field: 'ApplicationTime',
                title: "申请时间",
                valign:"middle",
                align:"center",
            },
            {
                field: 'BrName',
                title: "病人姓名",
                valign:"middle",
                align:"center",
            },
            {
                field:'Sex',
                title:"性别",
                valign:'middle'
            },
            {
                field:'Age',
                title: "年龄",
                valign:"middle",
                align:"center",
            },
            {
                field:'SqHos',
                title: "申请会诊医院",
                valign:"middle",
                align:"center",
            },
            {
                field:'SqDoctor',
                title: "申请医生姓名",
                valign:"middle",
                align:"center",
            },
            {
                field:'SqTime',
                title: "申请时间",
                valign:"middle",
                align:"center",
            }
            ,
            {
                field:'State',
                title: "当前状态",
                valign:"middle",
                align:"center",
            }
        ]
    });
/*弹出层start*/
layui.use(['layer'],function () {
    var layer=layui.layer;
$("#Consultation").click(function () {
    layer.open({
        type: 2,
        title: '填写会诊申请表',
        shadeClose: true,
        shade: false,
        maxmin: true, //开启最大化最小化按钮
        area: ['893px', '600px'],
        content: 'ConsultationForm.html'
    });

})
});
    /*弹出层end*/
    $(".icon-arrow-left").addClass("fa fa-hand-o-left");
    $(".icon-arrow-right").addClass("fa fa-hand-o-right");
})
