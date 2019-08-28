function getPath() {
    var pathName = document.location.pathname;
    var index = pathName.substr(1).indexOf("/");
    return pathName.substr(0,index + 1);
}

$(document).ready(function () {
    $.ajaxSetup({cache: false });
    $(".includeHtml").each(function() {
        if (!!$(this).attr("file")) {
            var $includeObj = $(this);
            $(this).load($(this).attr("file"), function(html) {
                $includeObj.after(html).remove(); //加载的文件内容写入到当前标签后面并移除当前标签
            });
        }
    });
    // Start global js
    $.getScript(getPath() + "/js/frame/left-menu.min.js");
    // End global js
});