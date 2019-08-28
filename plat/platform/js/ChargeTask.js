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
    $("#endTime").datetimepicker({
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
            },
            {
                field:'',
                title: "操作",
                valign:"middle",
                align:"center",
                formatter: actionFormatter
            }
        ],
        onLoadSuccess:function () {
            $(".ck").click(function () {
            layui.use(['layer'],function () {
                var layer=layui.layer;
                layer.open({
                    type: 1,
                    title: '查看详情',
                    shadeClose: true,
                    shade: false,
                    maxmin: true, //开启最大化最小化按钮
                    area: ['893px', '600px'],
                    content: '查看详情界面，当会诊申请以后到会诊方管理员，管理员在分配时，查看申请会诊的详细信息，分配给会诊以后，会诊医生可以查看' +
                        '到此案例详情，然后选择资料确认，会诊结束以后，申请会诊方可查看会诊报告'
                });
            })

        });
            $(".fp").click(function () {
                layui.use(['layer'],function () {
                    var layer=layui.layer;
                    layer.open({
                        type: 1,
                        title: '分配会诊',
                        shadeClose: true,
                        shade: false,
                        maxmin: true, //开启最大化最小化按钮
                        area: ['893px', '600px'],
                        content: '申请会诊后到会诊方管理员处，管理员分配此案例给医生，需完成分配表'
                    });
                })

            });
            $(".lq").click(function () {
                layui.use(['layer'],function () {
                    var layer=layui.layer;
                    layer.open({
                        type: 1,
                        title: '领取任务',
                        shadeClose: true,
                        shade: false,
                        maxmin: true, //开启最大化最小化按钮
                        area: ['893px', '600px'],
                        content: '医生登陆以后可查看管理员分配给自己的会诊案例'
                    });
                })

            });
            $(".hz").click(function () {
                layui.use(['layer'],function () {
                    var layer=layui.layer;
                    layer.open({
                        type: 1,
                        title: '办理会诊案例',
                        shadeClose: true,
                        shade: false,
                        maxmin: true, //开启最大化最小化按钮
                        area: ['893px', '600px'],
                        content: '查看资料以后填写会诊报告'
                    });
                })

            });

        }
    });
    /*value 是值 row是列数 index为下标*/
    function actionFormatter() {
        var result = "";
        result += "<button id='Finish' type='button' data-toggle = 'modal' class='btn btn-success btn-sm ck' value='1'><span class='Ck'>查看</span>";
        result += "<button type='button'class='btn btn-info btn-sm fp '><span>分配</span>";
        result += "<button type='button'  class='btn btn-danger btn-sm lq'><span>领取</span>";
        result += "<button type='button'  class='btn btn-error btn-sm hz'><span>办理会诊</span>";
        return result;

    };
    $(".icon-arrow-left").addClass("fa fa-hand-o-left");
    $(".icon-arrow-right").addClass("fa fa-hand-o-right");
})