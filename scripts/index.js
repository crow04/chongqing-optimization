
function topMenuHandle() {
    var menus=config.topMenu;
    var htmlArr=[];
    for(var i=0;i<menus.length;i++){
        var str = '<div class="item" data-index="'+menus[i].code+'">'+menus[i].desc+'</div>';
        htmlArr.push(str);
    }
    $(".top-nav").html(htmlArr.join(""));
    $(".top-nav").off("click",".item").on("click",".item",function () {
        $(this).siblings(".item").removeClass("active");
        $(this).addClass("active");
        var html='views/'+$(this).data("index")+'.html';
        $("main").load(html);
    })
    $(".top-nav").find(".item").eq(0).trigger("click");
}
function showDate() {
    var date=moment().format('YYYY-MM-DD');
    var time=moment().format('HH:mm');
    var weekday=changeWeek(moment().format('d'));
    var html='<span style="">'+date+'</span><span>'+weekday+'</span><span>'+time+'</span>';
    $(".now-date").html(html);
}

 ///
function changeWeek(str) {
    switch (str) {
        case "1":
            return "星期一";
        case "2":
            return "星期二";

        case "3":
            return "星期三";
        case "4":
            return "星期四";
        case "5":
            return "星期五";
        case "6":
            return "星期六";
        case "7":
            return "星期日";
    }
}

$(function () {
    topMenuHandle();
    showDate();
    setInterval(function () {
        showDate()
    },1000)

})
